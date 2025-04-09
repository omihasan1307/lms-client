"use client";
import { useAuth } from "@/Helper/authContext";
import React from "react";
import AdminPage from "./admin/page";
import UserProfile from "./UserProfile";

const ProfilePage = () => {
  const { user } = useAuth();
  const role = user?.role || "user";

  return <div>{role === "admin" ? <AdminPage /> : <UserProfile />}</div>;
};

export default ProfilePage;
