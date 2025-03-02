"use client";
import React, { useState } from "react";
import axios from "axios";
import { useRouter, useSearchParams } from "next/navigation";
import Loading from "../_components/Loading";
import envConfig from "@/lib/env.config";
import { toast } from "react-toastify";
import Link from "next/link";

const Signup = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    phone: "",
    country: "",
    email: "",
    password: "",
    confirmPassword: "",
    address: "",
    zipCode: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const response = await axios.post(
        `${envConfig.baseApi}/auth/users/`,
        formData
      );
      if (response.status === 201) {
        toast.success(`Sign up Successfully`);
        // const referrer = document.referrer || "/";
        router.push("/");
      }
    } catch (error: any) {
      console.log(
        error?.response?.data?.details?.email?.[0] ||
          error?.response?.data?.details?.password?.[0],
        "error"
      );

      toast.success(
        error?.response?.data?.details?.email?.[0] ||
          error?.response?.data?.details?.email?.[0] ||
          "An error occurred. Please try again."
      );
      setError(
        error?.response?.data?.details?.email?.[0] ||
          error?.response?.data?.details?.password?.[0] ||
          "An error occurred. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };
  return (
    <div>
      {loading && <Loading />}
      <div className="bg-gray-50 font-sans min-h-screen flex flex-col items-center justify-center py-6 px-4">
        {error && <div className="text-center text-red-500">{error}</div>}
        <div className="max-w-md w-full">
          <Link href="/">
            <img
              src="https://readymadeui.com/readymadeui.svg"
              alt="logo"
              className="w-40 mb-8 mx-auto block"
            />
          </Link>

          <div className="p-8 rounded-2xl bg-white shadow">
            <h2 className="text-gray-800 text-center text-2xl font-bold">
              Sign Up
            </h2>
            <form className="mt-8 space-y-4" onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-4">
                <input
                  name="firstName"
                  type="text"
                  placeholder="First Name"
                  required
                  onChange={handleChange}
                  className="w-full border px-4 py-3 rounded-md"
                />
                <input
                  name="middleName"
                  type="text"
                  placeholder="Middle Name (Optional)"
                  onChange={handleChange}
                  className="w-full border px-4 py-3 rounded-md"
                />
              </div>
              <input
                name="lastName"
                type="text"
                placeholder="Last Name"
                required
                onChange={handleChange}
                className="w-full border px-4 py-3 rounded-md"
              />
              <input
                name="phone"
                type="tel"
                placeholder="Phone Number"
                required
                onChange={handleChange}
                className="w-full border px-4 py-3 rounded-md"
              />
              <select
                name="country"
                required
                onChange={handleChange}
                className="w-full border px-4 py-3 rounded-md"
              >
                <option value="">Select Country</option>
                <option value="USA">USA</option>
                <option value="Canada">Canada</option>
                <option value="UK">UK</option>
              </select>
              <input
                name="email"
                type="email"
                placeholder="Email"
                required
                onChange={handleChange}
                className="w-full border px-4 py-3 rounded-md"
              />
              <div className="relative">
                <input
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  required
                  onChange={handleChange}
                  className="w-full border px-4 py-3 rounded-md"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-3"
                >
                  {showPassword ? "🙈" : "👁"}
                </button>
              </div>
              <input
                name="confirmPassword"
                type="password"
                placeholder="Re-type Password"
                required
                onChange={handleChange}
                className="w-full border px-4 py-3 rounded-md"
              />
              <input
                name="address"
                type="text"
                placeholder="Address"
                required
                onChange={handleChange}
                className="w-full border px-4 py-3 rounded-md"
              />
              <input
                name="zipCode"
                type="text"
                placeholder="Zip Code"
                required
                onChange={handleChange}
                className="w-full border px-4 py-3 rounded-md"
              />

              <button
                type="submit"
                className="w-full py-3 px-4 text-white bg-blue-600 hover:bg-blue-700 rounded-lg"
              >
                Sign Up
              </button>

              <p className="text-gray-800 text-sm mt-4 text-center">
                Already have an account?{" "}
                <Link
                  href="/signin"
                  className="text-blue-600 hover:underline font-semibold"
                >
                  Sign in here
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Signup;
