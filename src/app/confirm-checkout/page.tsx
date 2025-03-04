"use client";
import { useGetBookingById, useGetProfile } from "@/hooks/get.hooks";
import MainLayout from "@/layout/MainLayout";
import { useRouter, useSearchParams } from "next/navigation";
import SelectedContinueItem from "../personal-info/SelectedContinueItem";
import { useState } from "react";
import axiosInstance from "@/lib/AxiosInstance";
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { toast } from "react-toastify";

const stripePromise = loadStripe(
  "pk_test_51GwbeaINl754AERGy6WB5G8YSGY3WAzomh9rgf39kDbh3gUqhAtLCEuLjl0xRlgCDOOnL9QC5Szgmp8JEveTXFZZ00iogv0t0u"
);

interface BookingData {
  id: string;
  total_amount: number;
}

interface CheckoutFormProps {
  data: BookingData | null;
}

const CheckoutForm = ({ data }: CheckoutFormProps) => {
  const stripe: any = useStripe();
  const elements = useElements();
  const router = useRouter();
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleStripePayment = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!stripe || !elements || !data) return;

    setLoading(true);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

    if (error) {
      setLoading(false);
      toast.error(error.message || "Payment failed");
      return;
    }

    try {
      const { id } = paymentMethod;
      const response = await axiosInstance.post(`/shop/tours/payment/`, {
        api_type: "g",
        id: data.id,
        payment_method: id,
      });

      if (response.data.success) {
        setSuccess(true);
        router.push(
          `/confirm-checkout/success?api-type=G&id=${
            data.id
          }&booking=${encodeURIComponent(JSON.stringify(response.data))}`
        );
      } else {
        throw new Error("Payment confirmation failed");
      }
    } catch (error: any) {
      setSuccess(false);
      setLoading(false);
      toast.error(
        error?.response?.data?.error ||
          error?.response?.data?.details?.error ||
          "Booking and Payment could not be confirmed"
      );
      router.push(`/confirm-checkout/failed?api-type=G&id=${data.id}`);
    }
  };

  return (
    <div className="container mt-10" id="payment-form">
      {!success && (
        <form onSubmit={handleStripePayment}>
          <div className="form-row mb-3 bg-white rounded-md border border-zinc-100 p-4">
            <CardElement
              options={{
                style: {
                  base: {
                    fontSize: "16px",
                    color: "black",
                    "::placeholder": {
                      color: "gray-400",
                    },
                  },
                  invalid: {
                    color: "red-500",
                  },
                },
              }}
            />
          </div>
          <div className="text-red-500 text-sm font-semibold">
            {`Total Amount: €${data?.total_amount || 0}`}
          </div>
          {!loading ? (
            <button
              type="submit"
              disabled={!data?.total_amount}
              className="bg-red-500 text-white px-4 py-2 rounded-md mt-4"
            >
              Pay with Stripe
            </button>
          ) : (
            <div className="text-red-500 text-sm font-semibold">
              <h1>Processing...</h1>
            </div>
          )}
        </form>
      )}
    </div>
  );
};

const ConfirmCheckout = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  const { data: selectedBookingCart } = useGetBookingById(id);
  const { data } = useGetProfile();
  const profileData = data?.data || {};

  return (
    <MainLayout>
      <div className="mx-10 lg:mx-20 my-10 lg:grid grid-cols-3 gap-5">
        <div className="col-span-2">
          <h1 className="text-xl font-bold">Your Personal Details</h1>
          <hr className="my-2" />
          <div className="border w-fit p-6 space-y-2">
            <h1 className="font-semibold">
              {profileData?.first_name} {profileData?.last_name}
            </h1>
            <p>{profileData?.email}</p>
            <p>{profileData?.phone}</p>
          </div>

          <div>
            <Elements stripe={stripePromise}>
              <CheckoutForm data={selectedBookingCart?.data} />
            </Elements>
          </div>
        </div>
        <div className="col-span-1">
          {selectedBookingCart ? (
            <SelectedContinueItem
              selectedBookingCart={selectedBookingCart?.data}
            />
          ) : (
            <p>Loading booking details...</p>
          )}
        </div>
      </div>
    </MainLayout>
  );
};

export default ConfirmCheckout;
