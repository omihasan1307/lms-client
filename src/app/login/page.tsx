"use client";
import React, { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import Cookies from "js-cookie";
import { ApiBaseMysql } from "@/Helper/ApiBase";
import { toast } from "react-toastify";
import Link from "next/link";
import envConfig from "@/lib/env.config";

// Define types
interface FormData {
  email: string;
  password: string;
}

const redirectUri = "http://localhost:3000/login/";
const apiBaseURL = "http://localhost:8000";
axios.defaults.withCredentials = true;

const Login = () => {
  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
  });

  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState<boolean>(false);
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/";
  const router = useRouter();

  // Handle input change for formData
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post(
        `${envConfig.baseApi}/auth/jwt/create/`,
        formData
      );
      const { access } = response.data.data;
      localStorage.setItem("accessToken", "JWT " + access);
      Cookies.set("access_token", access);
      const decodedToken: any = jwtDecode(access);
      Cookies.set("user_id", decodedToken.user_id);
      Cookies.set("email", decodedToken.email);
      toast.success(`Login Successfully`);
      router.push(callbackUrl);
    } catch (err: any) {
      toast.error("Login Failed");
    } finally {
      setLoading(false);
    }
  };

  // Redirect user if already logged in
  useEffect(() => {
    const token = Cookies.get("access_token");
    if (token) {
      router.push(callbackUrl);
      // router.push("/");
    }
  }, []);

  return (
    <div className="bg-gray-50 font-sans min-h-screen flex flex-col items-center justify-center py-6 px-4">
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
            Sign in
          </h2>
          <form className="mt-8 space-y-4" onSubmit={handleSubmit}>
            {/* Email Field */}
            <div>
              <label className="text-gray-800 text-sm mb-2 block">Email</label>
              <input
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleInputChange}
                className="w-full text-gray-800 text-sm border border-gray-300 px-4 py-3 rounded-md outline-blue-600"
                placeholder="Enter email"
              />
            </div>

            {/* Password Field */}
            <div>
              <label className="text-gray-800 text-sm mb-2 block">
                Password
              </label>
              <div className="relative flex items-center">
                <input
                  name="password"
                  type={showPassword ? "text" : "password"}
                  required
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full text-gray-800 text-sm border border-gray-300 px-4 py-3 rounded-md outline-blue-600"
                  placeholder="Enter password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 cursor-pointer"
                >
                  {showPassword ? "🙈" : "👁"}
                </button>
              </div>
            </div>

            {/* Remember Me + Forgot Password */}
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-3 text-sm text-gray-800"
                >
                  Remember me
                </label>
              </div>
              <Link
                href="/forgot-password"
                className="text-sm text-blue-600 hover:underline font-semibold"
              >
                Forgot your password?
              </Link>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3 px-4 text-sm tracking-wide rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
            >
              {loading ? "Signing in..." : "Sign in"}
            </button>

            {/* Register Link */}
            <p className="text-gray-800 text-sm mt-8 text-center">
              Don't have an account?{" "}
              <Link
                href="/register"
                className="text-blue-600 hover:underline ml-1 font-semibold"
              >
                Register here
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

// <div>
//   {loading || (googleLoading && <Loading />)}
//   <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-orange-50 to-orange-100">
//     <div className="card p-4 shadow-lg rounded-lg bg-white border border-gray-200 w-full max-w-md space-y-8 bg-gradient-to-b from-orange-50 to-orange-100/0">
//       {error && <div className="text-center text-red-500">{error}</div>}
//       {googleError && (
//         <div className="text-center text-red-500">
//           {googleError.message}
//         </div>
//       )}
//       <div>
//         <h2 className="mt-6 text-center text-xl font-semibold text-gray-900">
//           Log in to your account
//         </h2>
//       </div>
//       <div className="text-center mt-4">
//         <button
//           onClick={continueWithGoogle}
//           className="group relative w-full justify-center py-2 px-4 text-sm font-medium rounded-md text-black bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 border border-gray-300 hover:border-gray-400 hover:shadow-md transition duration-300 ease-in-out block"
//         >
//           <div className="flex justify-between items-center w-full">
//             <div className="flex items-center">
//               <GoogleSvg />
//               <span className="ml-2">Sign in with Google</span>
//             </div>
//             <div className="flex items-center">
//               <HiArrowLongRight className="text-xl" />
//             </div>
//           </div>
//         </button>
//       </div>
//       <form className="mt-8 space-y-6 card-body" onSubmit={handleSubmit}>
//         <input type="hidden" name="remember" defaultValue="true" />
//         <div className="rounded-md shadow-sm -space-y-px">
//           <div className="mb-4">
//             <label
//               htmlFor="email-address"
//               className="text-sm text-gray-900 mb-1 block font-semibold text-left w-full"
//             >
//               Email address
//             </label>
//             <input
//               id="email-address"
//               name="email"
//               type="email"
//               autoComplete="email"
//               required
//               className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
//               placeholder="Email address"
//               onChange={handleInputChange}
//             />
//           </div>
//           <div className="mb-4">
//             <label
//               htmlFor="password"
//               className="text-sm text-gray-900 mb-1 block font-semibold text-left w-full"
//             >
//               Password
//             </label>
//             <input
//               id="password"
//               name="password"
//               type="password"
//               autoComplete="current-password"
//               required
//               className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
//               placeholder="Password"
//               onChange={handleInputChange}
//             />
//           </div>
//         </div>
//         <div className="flex items-center justify-between mb-4">
//           <div className="flex items-center">
//             <input
//               id="remember-me"
//               name="remember-me"
//               type="checkbox"
//               className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
//             />
//             <label
//               htmlFor="remember-me"
//               className="ml-2 block text-sm text-gray-900"
//             >
//               Remember me
//             </label>
//           </div>
//           <div className="text-sm">
//             <a
//               href="#"
//               className="font-medium text-indigo-600 hover:text-indigo-500"
//             >
//               Forgot your password?
//             </a>
//           </div>
//         </div>
//         <div className="mt-4">
//           <button
//             type="submit"
//             className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//           >
//             {loading ? "Loading..." : "Log in"}
//           </button>
//         </div>
//         <div className="mt-4">
//           <p className="text-center text-sm text-gray-900">
//             Don't have an account?{" "}
//             <a
//               href="/signup"
//               className="font-medium text-indigo-600 hover:text-indigo-500"
//             >
//               Sign up
//             </a>
//           </p>
//         </div>
//       </form>
//     </div>
//   </div>
// </div>
