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
} from "@/components/ui/dropdown-menu"


function Header() {
  return (
    <div className="flex justify-between items-center px-20 py-5 font-medium">
      <div>
        <Image src="/logo.png" alt="logo" width={90} height={44} />
      </div>
      <div className="flex gap-8 items-center text-[15px]">
        <h2>Home</h2>
        <h2 className="flex gap-1 items-center">
          Categories{" "}
          <DropdownMenu>
            <DropdownMenuTrigger><ChevronDown className="w-5 h-5" /></DropdownMenuTrigger>
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
        <h2>Blogs</h2>
        <h2 className="flex gap-1 items-center">
          English <ChevronDown className="w-5 h-5" />
        </h2>
        <h2 className="flex gap-1 items-center">
          USD(US$) <ChevronDown className="w-5 h-5" />
        </h2>
        <Image src="/shopping-cart.png" width={20} height={20} />
        <h2>
          <Heart className="w-5 h-5" />
        </h2>
        <h2 className="flex gap-1 items-center">
          Log In <ChevronDown className="w-5 h-5" />
        </h2>
        <Button className="px-5 py-2">Sign Up</Button>
      </div>
    </div>
  );
}

export default Header;
