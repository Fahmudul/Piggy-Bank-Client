import { useAppSelector } from "@/Redux/hook";
import React from "react";
import { Navigate } from "react-router-dom";

const AdminRoute = ({ children }: { children: React.ReactNode }) => {
  const role = useAppSelector((state) => state.auth.role);
  console.log(role);
  if (role !== "admin") return <Navigate to="/me" />;
  return children;
};

export default AdminRoute;
