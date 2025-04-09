"use client";
import MainLayout from "@/layout/MainLayout";
import Sidebar from "./_components/Sidebar";
import { useAuth } from "@/Helper/authContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { user, isAuthenticated, logout } = useAuth();

  return (
    <MainLayout>
      <div className="flex flex-col md:flex-row  gap-5 px-4 md:px-20 mt-8 mb-12">
        {/* left */}
        <div className="w-full md:w-1/5 mb-5 md:mb-0">
          <Sidebar data={user} logOutUser={logout} />
        </div>

        {/* right */}
        <div className="w-full md:w-4/5">{children}</div>
      </div>
    </MainLayout>
  );
}
