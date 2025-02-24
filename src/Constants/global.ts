import { BarChart2, DollarSign, Home, Settings } from "lucide-react";

export const routes = [
  {
    name: "Home",
    path: "/",
    icon: Home,
  },
  {
    name: "Statistics",
    path: "/statistics",
    icon: BarChart2,
  },
  {
    name: "Transaction",
    path: "/transactions",
    icon: DollarSign,
  },
  {
    name: "Settings",
    path: "/settings",
    icon: Settings,
  },
];

export const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];
