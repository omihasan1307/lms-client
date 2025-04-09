"use client";
import { Button } from "@/components/ui/button";
import { ChevronDown, Heart, ShoppingBag } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { useAuth } from "@/Helper/authContext";

function Header() {
  const { user, isAuthenticated, logout } = useAuth();
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setToken(localStorage.getItem("accessToken"));
    }
  }, [token]);

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    setToken("");
    logout();
  };

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-100 shadow-sm">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image
                src="/lms-logo.png"
                alt="logo"
                width={120}
                height={48}
                className=""
                priority
              />
            </Link>
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/course"
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium text-sm"
            >
              Courses
            </Link>
          </nav>

          {/* User Actions */}
          <div className="flex items-center space-x-4">
            <Link
              href="/cart"
              className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200 relative"
            >
              <ShoppingBag className="w-5 h-5 text-gray-700" />
              <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                0
              </span>
            </Link>

            {token ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className="flex items-center gap-1 hover:bg-gray-100"
                  >
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                      {user?.name?.charAt(0) || "U"}
                    </div>
                    <ChevronDown className="w-4 h-4 text-gray-500" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="end">
                  <DropdownMenuLabel className="font-normal">
                    <div className="flex flex-col space-y-1">
                      <p className="text-sm font-medium leading-none">
                        {user?.name || "User"}
                      </p>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link href="/profile" className="w-full cursor-pointer">
                      Profile
                    </Link>
                  </DropdownMenuItem>

                  <DropdownMenuSeparator />
                  <DropdownMenuItem
                    onClick={handleLogout}
                    className="text-red-600 focus:text-red-600 focus:bg-red-50 cursor-pointer"
                  >
                    Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <div className="flex items-center space-x-3">
                <Link href="/login">
                  <Button
                    variant="ghost"
                    className="text-gray-700 hover:text-blue-600"
                  >
                    Log In
                  </Button>
                </Link>
                <Link href="/signup">
                  <Button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 shadow-sm">
                    Sign Up
                  </Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
