"use client";
import React, { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { HiArrowLongRight } from "react-icons/hi2";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import Cookies from "js-cookie";
import { ApiBaseMysql } from "@/Helper/ApiBase";
import Loading from "../_components/Loading";
import GoogleSvg from "../_components/Svg/GoogleSvg";
import { toast } from "react-toastify";
// Define types
interface FormData {
  email: string;
  password: string;
}
interface GoogleError {
  message: string;
  error: any;
}
const redirectUri = "http://localhost:3000/login/";
const apiBaseURL = "http://localhost:8000";
axios.defaults.withCredentials = true;
const Login = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [googleLoading, setGoogleLoading] = useState<boolean>(false);
  const [googleError, setGoogleError] = useState<GoogleError | null>(null);
  const [error, setError] = useState<string | null>(null);
  const searchParams = useSearchParams();
  const router = useRouter();
  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
  });
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const response = await axios.post(
        `${ApiBaseMysql}/auth/jwt/create/`,
        formData
      );
      const { access } = response.data.data;
      Cookies.set("access_token", access);
      const decodedToken: any = jwtDecode(access);
      Cookies.set("user_id", decodedToken.user_id);
      Cookies.set("email", decodedToken.email);
      const referrer = document.referrer || "/";
      toast.success(`Login Successfully`);
      router.push(referrer);
    } catch (err: any) {
      setError(err.response?.data?.message || "An error occurred during login");
      toast.error("Login Failed");
    } finally {
      setLoading(false);
    }
  };
  const continueWithGoogle = async () => {
    try {
      setGoogleError(null);
      setGoogleLoading(true);
      const res = await axios.get(
        `${apiBaseURL}/auth/o/google-oauth2/?redirect_uri=${redirectUri}`
      );

      window.location.replace(res.data.data.authorization_url);
    } catch (err: any) {
      setGoogleError({
        message: "An error occurred while initiating Google OAuth",
        error: err,
      });

      setGoogleLoading(false);
    }
  };
  useEffect(() => {
    const token = Cookies.get("access_token");
    if (token) {
      router.push("/");
    }
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      const state = searchParams.get("state");
      const code = searchParams.get("code");
      try {
        if (state && code) {
          const res = await axios.post(
            `${apiBaseURL}/auth/o/google-oauth2/?state=${state}&code=${code}`
          );
          const token = res.data.data.access;
          Cookies.set("access_token", token);
          const decodedToken: any = jwtDecode(token);
          Cookies.set("user_id", decodedToken.user_id);
          Cookies.set("email", decodedToken.email);
          setGoogleLoading(false);
          const referrer = document.referrer || "/";
          router.replace(referrer);
        }
      } catch (error) {
        setGoogleLoading(false);
      }
    };
    fetchData();
  }, [router]);
  return (
    <div>
      {loading || (googleLoading && <Loading />)}
      <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-orange-50 to-orange-100">
        <div className="card p-4 shadow-lg rounded-lg bg-white border border-gray-200 w-full max-w-md space-y-8 bg-gradient-to-b from-orange-50 to-orange-100/0">
          {error && <div className="text-center text-red-500">{error}</div>}
          {googleError && (
            <div className="text-center text-red-500">
              {googleError.message}
            </div>
          )}
          <div>
            <h2 className="mt-6 text-center text-xl font-semibold text-gray-900">
              Log in to your account
            </h2>
          </div>
          {/* Google Sign-in Button */}
          <div className="text-center mt-4">
            <button
              onClick={continueWithGoogle}
              className="group relative w-full justify-center py-2 px-4 text-sm font-medium rounded-md text-black bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 border border-gray-300 hover:border-gray-400 hover:shadow-md transition duration-300 ease-in-out block"
            >
              <div className="flex justify-between items-center w-full">
                <div className="flex items-center">
                  <GoogleSvg />
                  <span className="ml-2">Sign in with Google</span>
                </div>
                <div className="flex items-center">
                  <HiArrowLongRight className="text-xl" />
                </div>
              </div>
            </button>
          </div>
          <form className="mt-8 space-y-6 card-body" onSubmit={handleSubmit}>
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div className="mb-4">
                <label
                  htmlFor="email-address"
                  className="text-sm text-gray-900 mb-1 block font-semibold text-left w-full"
                >
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                  onChange={handleInputChange}
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="password"
                  className="text-sm text-gray-900 mb-1 block font-semibold text-left w-full"
                >
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-gray-900"
                >
                  Remember me
                </label>
              </div>
              <div className="text-sm">
                <a
                  href="#"
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                >
                  Forgot your password?
                </a>
              </div>
            </div>
            <div className="mt-4">
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                {loading ? "Loading..." : "Log in"}
              </button>
            </div>
            <div className="mt-4">
              <p className="text-center text-sm text-gray-900">
                Don't have an account?{" "}
                <a
                  href="/signup"
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                >
                  Sign up
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Login;
