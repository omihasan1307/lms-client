

"use client";
import { Button } from "@/components/ui/button";
import { ChevronDown, Heart } from "lucide-react";
import Image from "next/image";
import React from "react";

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

  // const token = localStorage.getItem("accessToken");

  // console.log("token", token);
  console.log("user", user);

  const handleLogout = () => {
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
        {isAuthenticated ? (
          <DropdownMenu>
            <DropdownMenuTrigger>
              <div className="flex gap-1 items-center cursor-pointer">
                ssssssssssssssss
                {/* <User className="w-5 h-5" />  */}
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
                <div className="flex items-center gap-2">
                  {/* <LogOut className="w-4 h-4" />  */}
                  Logout
                </div>
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

        {/* <h2 className="flex gap-1 items-center">
          Log In <ChevronDown className="w-5 h-5" />
        </h2>
        <Button className="px-5 py-2">Sign Up</Button> */}
      </div>
    </div>
  );
}

export default Header;
