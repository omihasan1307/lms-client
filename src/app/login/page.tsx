"use client";
import React, { useEffect, useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import Cookies from "js-cookie";
import { toast } from "react-toastify";
import Link from "next/link";
import envConfig from "@/lib/env.config";
import GoogleSvg from "../_components/Svg/GoogleSvg";
import { HiArrowLongRight } from "react-icons/hi2";
import { ApiBaseMysql } from "@/Helper/ApiBase";

// Define types
interface FormData {
  email: string;
  password: string;
}

const redirectUri = "http://localhost:3000/login/";
axios.defaults.withCredentials = true;

interface GoogleError {
  message: string;
  error: any;
}

const LoginContent = () => {
  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
  });
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/";
  const [googleLoading, setGoogleLoading] = useState<boolean>(false);
  const [googleError, setGoogleError] = useState<GoogleError | null>(null);
  const router = useRouter();

  // Handle input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post(
        `${ApiBaseMysql}/auth/jwt/create/`,
        formData
      );
      const { access } = response.data.data;
      localStorage.setItem("accessToken", access);
      Cookies.set("access_token", access);
      const decodedToken: any = jwtDecode(access);
      Cookies.set("user_id", decodedToken.user_id);
      Cookies.set("email", decodedToken.email);
      toast.success(`Login Successfully`);
      router.push(callbackUrl);
    } catch (err: any) {
      setError(err.response?.data?.message || "An error occurred during login");
      toast.error("Login Failed");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const token = Cookies.get("access_token");
    if (token) {
      router.push(callbackUrl);
      router.push("/");
    }
  }, []);

  const continueWithGoogle = async () => {
    try {
      setGoogleError(null);
      setGoogleLoading(true);
      const res = await axios.get(
        `${envConfig.baseApi}/auth/o/google-oauth2/?redirect_uri=${redirectUri}`
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
                href="/signup"
                className="text-blue-600 hover:underline ml-1 font-semibold"
              >
                Register here
              </Link>
            </p>
          </form>
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
                <span className="ml-2">
                  {googleLoading ? "Loading" : "Sign in with Google"}
                </span>
              </div>
              <div className="flex items-center">
                <HiArrowLongRight className="text-xl" />
              </div>
            </div>
          </button>
        </div>

        {error && <div className="text-center text-red-500">{error}</div>}
        {googleError && (
          <div className="text-center text-red-500">{googleError.message}</div>
        )}
      </div>
    </div>
  );
};

const Login = () => {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <LoginContent />
    </Suspense>
  );
};

export default Login;

// "use client";
// import React, { useEffect, useState } from "react";
// import { useRouter, useSearchParams } from "next/navigation";
// import axios from "axios";
// import { jwtDecode } from "jwt-decode";
// import Cookies from "js-cookie";
// import { toast } from "react-toastify";
// import Link from "next/link";
// import envConfig from "@/lib/env.config";
// import GoogleSvg from "../_components/Svg/GoogleSvg";
// import { HiArrowLongRight } from "react-icons/hi2";
// import { ApiBaseMysql } from "@/Helper/ApiBase";

// // Define types
// interface FormData {
//   email: string;
//   password: string;
// }

// const redirectUri = "http://localhost:3000/login/";
// axios.defaults.withCredentials = true;

// interface GoogleError {
//   message: string;
//   error: any;
// }

// const Login = () => {
//   const [formData, setFormData] = useState<FormData>({
//     email: "",
//     password: "",
//   });

//   const [rememberMe, setRememberMe] = useState(false);
//   const [showPassword, setShowPassword] = useState(false);
//   const [loading, setLoading] = useState<boolean>(false);
//   const [error, setError] = useState<string | null>(null);
//   const searchParams = useSearchParams();
//   const callbackUrl = searchParams.get("callbackUrl") || "/";
//   const [googleLoading, setGoogleLoading] = useState<boolean>(false);
//   const [googleError, setGoogleError] = useState<GoogleError | null>(null);
//   const router = useRouter();

//   // Handle input change for formData
//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   // Handle form submission
//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     setLoading(true);
//     try {
//       const response = await axios.post(
//         `${ApiBaseMysql}/auth/jwt/create/`,
//         formData
//       );
//       const { access } = response.data.data;
//       localStorage.setItem("accessToken", access);
//       Cookies.set("access_token", access);
//       const decodedToken: any = jwtDecode(access);
//       Cookies.set("user_id", decodedToken.user_id);
//       Cookies.set("email", decodedToken.email);
//       toast.success(`Login Successfully`);
//       router.push(callbackUrl);
//     } catch (err: any) {
//       setError(err.response?.data?.message || "An error occurred during login");
//       toast.error("Login Failed");
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     const token = Cookies.get("access_token");
//     if (token) {
//       router.push(callbackUrl);
//       router.push("/");
//     }
//   }, []);

//   const continueWithGoogle = async () => {
//     try {
//       setGoogleError(null);
//       setGoogleLoading(true);
//       const res = await axios.get(
//         `${envConfig.baseApi}/auth/o/google-oauth2/?redirect_uri=${redirectUri}`
//       );
//       window.location.replace(res.data.data.authorization_url);
//     } catch (err: any) {
//       setGoogleError({
//         message: "An error occurred while initiating Google OAuth",
//         error: err,
//       });
//       setGoogleLoading(false);
//     }
//   };

//   return (
//     <div className="bg-gray-50 font-sans min-h-screen flex flex-col items-center justify-center py-6 px-4">
//       <div className="max-w-md w-full">
//         <Link href="/">
//           <img
//             src="https://readymadeui.com/readymadeui.svg"
//             alt="logo"
//             className="w-40 mb-8 mx-auto block"
//           />
//         </Link>

//         <div className="p-8 rounded-2xl bg-white shadow">
//           <h2 className="text-gray-800 text-center text-2xl font-bold">
//             Sign in
//           </h2>
//           <form className="mt-8 space-y-4" onSubmit={handleSubmit}>
//             {/* Email Field */}
//             <div>
//               <label className="text-gray-800 text-sm mb-2 block">Email</label>
//               <input
//                 name="email"
//                 type="email"
//                 required
//                 value={formData.email}
//                 onChange={handleInputChange}
//                 className="w-full text-gray-800 text-sm border border-gray-300 px-4 py-3 rounded-md outline-blue-600"
//                 placeholder="Enter email"
//               />
//             </div>

//             {/* Password Field */}
//             <div>
//               <label className="text-gray-800 text-sm mb-2 block">
//                 Password
//               </label>
//               <div className="relative flex items-center">
//                 <input
//                   name="password"
//                   type={showPassword ? "text" : "password"}
//                   required
//                   value={formData.password}
//                   onChange={handleInputChange}
//                   className="w-full text-gray-800 text-sm border border-gray-300 px-4 py-3 rounded-md outline-blue-600"
//                   placeholder="Enter password"
//                 />
//                 <button
//                   type="button"
//                   onClick={() => setShowPassword(!showPassword)}
//                   className="absolute right-4 cursor-pointer"
//                 >
//                   {showPassword ? "🙈" : "👁"}
//                 </button>
//               </div>
//             </div>

//             {/* Remember Me + Forgot Password */}
//             <div className="flex flex-wrap items-center justify-between gap-4">
//               <div className="flex items-center">
//                 <input
//                   id="remember-me"
//                   name="remember-me"
//                   type="checkbox"
//                   checked={rememberMe}
//                   onChange={(e) => setRememberMe(e.target.checked)}
//                   className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
//                 />
//                 <label
//                   htmlFor="remember-me"
//                   className="ml-3 text-sm text-gray-800"
//                 >
//                   Remember me
//                 </label>
//               </div>
//               <Link
//                 href="/forgot-password"
//                 className="text-sm text-blue-600 hover:underline font-semibold"
//               >
//                 Forgot your password?
//               </Link>
//             </div>

//             {/* Submit Button */}
//             <button
//               type="submit"
//               className="w-full py-3 px-4 text-sm tracking-wide rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
//             >
//               {loading ? "Signing in..." : "Sign in"}
//             </button>

//             {/* Register Link */}
//             <p className="text-gray-800 text-sm mt-8 text-center">
//               Don't have an account?{" "}
//               <Link
//                 href="/signup"
//                 className="text-blue-600 hover:underline ml-1 font-semibold"
//               >
//                 Register here
//               </Link>
//             </p>
//           </form>
//         </div>

//         {/* Google Sign-in Button */}
//         <div className="text-center mt-4">
//           <button
//             onClick={continueWithGoogle}
//             className="group relative w-full justify-center py-2 px-4 text-sm font-medium rounded-md text-black bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 border border-gray-300 hover:border-gray-400 hover:shadow-md transition duration-300 ease-in-out block"
//           >
//             <div className="flex justify-between items-center w-full">
//               <div className="flex items-center">
//                 <GoogleSvg />
//                 <span className="ml-2">
//                   {googleLoading ? "Loading" : "Sign in with Google"}
//                 </span>
//               </div>
//               <div className="flex items-center">
//                 <HiArrowLongRight className="text-xl" />
//               </div>
//             </div>
//           </button>
//         </div>
//         {/* {loading || (googleLoading && <Loading />)} */}

//         {error && <div className="text-center text-red-500">{error}</div>}
//         {googleError && (
//           <div className="text-center text-red-500">{googleError.message}</div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Login;
