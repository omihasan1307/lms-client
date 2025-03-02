"use client";
import { Button } from "@/components/ui/button";
import { ChevronDown, Heart } from "lucide-react";
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
import { Icon } from "@iconify/react/dist/iconify.js";

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
    <div className="flex justify-between items-center px-20 py-5 font-medium">
      <Link href="/">
        <Image src="/logo.png" alt="logo" width={90} height={44} />
      </Link>
      <div className="flex gap-8 items-center text-[15px]">
        <Link href="/">Home</Link>
        <h2 className="flex gap-1 items-center">
          Categories{" "}
          <DropdownMenu>
            <DropdownMenuTrigger>
              <ChevronDown className="w-5 h-5" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem> Billing</DropdownMenuItem>
              <DropdownMenuItem>Team</DropdownMenuItem>
              <DropdownMenuItem>Subscription</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </h2>
        <Link href="/products">Products</Link>
        <Link href="/blog">Blogs</Link>
        <h2 className="flex gap-1 items-center">
          English <ChevronDown className="w-5 h-5" />
        </h2>
        <h2 className="flex gap-1 items-center">
          USD(US$) <ChevronDown className="w-5 h-5" />
        </h2>
        <Image
          src="/shopping-cart.png"
          width={20}
          height={20}
          alt="shoppingcart logo"
        />
        <h2>
          <Heart className="w-5 h-5" />
        </h2>

        {/* Conditional Rendering for Login/Logout */}
        {token ? (
          <DropdownMenu>
            <DropdownMenuTrigger>
              <div className="flex gap-1 items-center cursor-pointer">
                <Icon icon="line-md:account" className="w-5 h-5" />

                <ChevronDown className="w-5 h-5" />
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Link href="/profile">Profile</Link>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={handleLogout}>
                <div className="flex items-center gap-2">Logout</div>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <div className="flex gap-4">
            <Link href="/login">
              <Button variant="ghost">Log In</Button>
            </Link>
            <Link href="/signup">
              <Button className="px-5 py-2">Sign Up</Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
