import { useAppSelector } from "@/Redux/hook";
import React from "react";
import { Navigate } from "react-router-dom";

const PublicRoute = ({ children }: { children: React.ReactNode }) => {
  const token = useAppSelector((state) => state.auth.token);
  const pathName = window.location.pathname;
  if (token && (pathName === "/login" || pathName === "/register"))
    return <Navigate to="/me" />;
  return children;
};

export default PublicRoute;
