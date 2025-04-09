"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import Link from "next/link";
import { toast } from "react-toastify";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { baseApi } from "@/Helper/ApiBase";

interface FormData {
  username: string;
  password: string;
  role: "user" | "admin";
}

const Signup = () => {
  const [formData, setFormData] = useState<FormData>({
    username: "",
    password: "",
    role: "user",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRoleChange = (value: "user" | "admin") => {
    setFormData((prev) => ({ ...prev, role: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post(
        `${baseApi}/users/create-user`,
        formData,
        { withCredentials: true }
      );

      console.log(response, "rrr");

      if (response.status === 201) {
        toast.success("Sign up successful!");
        router.push("/login");
      }
    } catch (err: any) {
      const message =
        err?.response?.data?.message ||
        err?.response?.data?.details?.username?.[0] ||
        "An error occurred during registration";
      toast.error(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-blue-100 flex items-center justify-center px-4">
      <div className="bg-white w-full max-w-md rounded-3xl shadow-xl p-8">
        <h2 className="text-xl font-bold text-center text-gray-800 mb-6">
          Sign Up As
        </h2>

        <RadioGroup
          defaultValue="user"
          onValueChange={handleRoleChange}
          className="flex justify-center gap-6 mb-6"
        >
          {["user", "admin"].map((role) => (
            <div key={role} className="flex items-center space-x-2">
              <RadioGroupItem value={role} id={role} />
              <Label htmlFor={role} className="capitalize text-gray-700">
                {role}
              </Label>
            </div>
          ))}
        </RadioGroup>

        <form onSubmit={handleSubmit} className="space-y-5">
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

          <Button type="submit" className="w-full py-2">
            {loading ? "Signing up..." : "Sign Up"}
          </Button>

          <p className="text-center text-sm text-gray-600 mt-4">
            Already have an account?{" "}
            <Link
              href="/login"
              className="text-blue-600 hover:underline font-medium"
            >
              Sign In
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
