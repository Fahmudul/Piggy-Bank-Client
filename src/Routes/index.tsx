import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/PublicRoutes/Home";
import Login from "@/pages/PublicRoutes/Login";
import Register from "@/pages/PublicRoutes/Register";
import Dashboard from "@/pages/Modules/User/Dashboard";
import Me from "@/pages/Modules/User/Me";
import Statistics from "@/pages/Modules/Statistics";
import Transactions from "@/pages/Modules/Transactions";
import Settings from "@/pages/Modules/Settings";
import TransactionHistory from "@/pages/Modules/Transactions/TransactionHistory";
import SendMoney from "@/pages/Modules/SendMoney/SendMoney";
import ReceiveMoney from "@/pages/Modules/ReceiveMoney/ReceiveMoney";
import UserManagement from "@/pages/Modules/Admin/UserManagement/UserManagement";
import CashOut from "@/pages/Modules/CashOut/CashOut";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <h1>404</h1>,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "me",
        element: <Dashboard />,
        children: [
          {
            index: true,
            element: <Me />,
          },
          {
            path: "statistics",
            element: <Statistics />,
          },
          {
            path: "transactions",
            element: <Transactions />,
          },
          {
            path: "transactions/history",
            element: <TransactionHistory />,
          },
          {
            path: "send-money",
            element: <SendMoney />,
          },
          {
            path: "cash-in",
            element: <ReceiveMoney />,
          },
          {
            path: "cash-out",
            element: <CashOut />,
          },
          {
            path: "user-management",
            element: <UserManagement />,
          },
          {
            path: "settings",
            element: <Settings />,
          },
        ],
      },
    ],
  },
]);
export default router;
