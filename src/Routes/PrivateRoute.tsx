import { useAppSelector } from "@/Redux/hook";
import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
  const token = useAppSelector((state) => state.auth.token);
  const role = useAppSelector((state) => state.auth.role);
  
  if (!token) return <Navigate to="/login" />;
  return children;
};

export default PrivateRoute;
