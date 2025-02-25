import { useAppSelector } from "@/Redux/hook";
import React from "react";
import { Navigate } from "react-router-dom";

const AgentRoute = ({ children }: { children: React.ReactNode }) => {
  const role = useAppSelector((state) => state.auth.role);
  console.log(role);
  if (role !== "agent") return <Navigate to="/me" />;
  return children;
};

export default AgentRoute;
