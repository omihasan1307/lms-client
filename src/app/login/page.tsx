"use client";

import React, { useEffect, useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import axios from "axios";
import Cookies from "js-cookie";
import { toast } from "react-toastify";
import Link from "next/link";
import { baseApi } from "@/Helper/ApiBase";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/Helper/authContext";

// axios.defaults.withCredentials = true;

const LoginContent = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    role: "user",
  });

  const { login } = useAuth();

  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);

  const router = useRouter();
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/";

  useEffect(() => {
    if (Cookies.get("access_token")) {
      router.push(callbackUrl);
    }
  }, [callbackUrl, router]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRoleChange = (role: "user" | "admin") => {
    setFormData((prev) => ({ ...prev, role }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await axios.post(`${baseApi}/users/login`, formData);
      const { token, user } = res.data.data;

      const userInfo = {
        id: user.id,
        name: user.username,
        email: user.email,
        role: user.role,
      };

      login(token, userInfo);

      toast.success("Login Successfully");
      router.push(callbackUrl);
    } catch (err: any) {
      toast.error(err.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-blue-100 flex items-center justify-center px-4">
      <div className="bg-white w-full max-w-md rounded-3xl shadow-xl p-8">
        {/* Role Selector */}
        <div className="mb-6">
          <h2 className="text-xl font-bold text-center text-gray-800 mb-4">
            Login As
          </h2>
          <RadioGroup
            defaultValue="user"
            onValueChange={handleRoleChange}
            className="flex justify-center gap-6"
          >
            {["user", "admin"].map((role) => (
              <div key={role} className="flex items-center space-x-2">
                <RadioGroupItem value={role} id={role} />
                <Label htmlFor={role} className="text-gray-700 capitalize">
                  {role}
                </Label>
              </div>
            ))}
          </RadioGroup>
        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Username */}
          <div>
            <label className="text-sm text-gray-600 mb-1 block">Username</label>
            <input
              name="username"
              type="text"
              value={formData.username}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 rounded-md border border-gray-300 text-sm outline-blue-500"
              placeholder="Enter your username"
            />
          </div>

          {/* Password */}
          <div>
            <label className="text-sm text-gray-600 mb-1 block">Password</label>
            <div className="relative">
              <input
                name="password"
                type={showPassword ? "text" : "password"}
                value={formData.password}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 rounded-md border border-gray-300 text-sm outline-blue-500"
                placeholder="Enter your password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-3 text-lg"
              >
                {showPassword ? "🙈" : "👁"}
              </button>
            </div>
          </div>

          {/* Remember + Forgot */}
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="form-checkbox h-4 w-4 text-blue-600"
              />
              <span className="text-gray-700">Remember me</span>
            </label>
            <Link
              href="/forgot-password"
              className="text-blue-600 hover:underline"
            >
              Forgot password?
            </Link>
          </div>

          {/* Submit */}
          <Button className="w-full py-2" type="submit">
            {loading ? "Signing in..." : "Sign In"}
          </Button>

          {/* Register */}
          <p className="text-center text-sm text-gray-600 mt-4">
            Don’t have an account?{" "}
            <Link
              href="/signup"
              className="text-blue-600 hover:underline font-medium"
            >
              Register
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

const LoginPage = () => (
  <Suspense fallback={<p>Loading...</p>}>
    <LoginContent />
  </Suspense>
);

export default LoginPage;
