"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

// Define menu items for user role
const userMenuItems = [
  {
    label: "course List",
    href: "/profile/wishlist",
  },
  {
    icon: "/logout.png",
    label: "Log Out",
    href: "/",
    action: "logout",
  },
];

// Define menu items for admin role
const adminMenuItems = [
  {
    label: "Home",
    href: "/profile",
  },
  {
    label: "Manage Courses",
    href: "/profile/admin/course",
  },
  {
    label: "Manage Module",
    href: "/profile/admin/module",
  },
  {
    label: "Manage Lecture",
    href: "/profile/admin/lectures",
  },
  {
    icon: "/logout.png",
    label: "Log Out",
    href: "/",
    action: "logout",
  },
];

const Sidebar = ({ data, logOutUser }: any) => {
  const pathname = usePathname();
  const role = data?.role || "user";
  const menuItems = role === "admin" ? adminMenuItems : userMenuItems;

  const handleMenuClick = (item: any) => {
    if (item.action === "logout") {
      localStorage.removeItem("accessToken");
      logOutUser();
    }
  };

  return (
    <aside className="bg-gray-100 p-3 rounded-sm shadow-lg bg-[#010A1508]">
      <div className="flex flex-col items-center text-center mb-4 bg-white py-6 rounded-lg">
        <img
          src="https://via.placeholder.com/110"
          alt="Customer Avatar"
          className="w-20 h-20 rounded-full mb-2"
        />
        <h2 className="text-xl font-bold">Customer Name</h2>
        <p className="text-gray-700 text-[14px]">Customer Address</p>
      </div>
      <nav className="space-y-1 text-[16px] text-black">
        {menuItems.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            onClick={(e) => {
              if (item.action === "logout") {
                e.preventDefault();
                handleMenuClick(item);
              }
            }}
            className={`flex items-center font-medium p-3 rounded-lg ${
              pathname === item.href ? "bg-white" : ""
            }`}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
