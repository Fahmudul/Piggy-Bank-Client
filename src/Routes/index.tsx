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
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PubilcRoute";

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
        element: (
          <PublicRoute>
            <Login />
          </PublicRoute>
        ),
      },
      {
        path: "register",
        element: (
          <PublicRoute>
            <Register />
          </PublicRoute>
        ),
      },
      {
        path: "me",
        element: (
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        ),
        children: [
          {
            index: true,
            element: (
              <PrivateRoute>
                <Me />
              </PrivateRoute>
            ),
          },
          {
            path: "statistics",
            element: (
              <PrivateRoute>
                <Statistics />
              </PrivateRoute>
            ),
          },
          {
            path: "transactions",
            element: (
              <PrivateRoute>
                <Transactions />
              </PrivateRoute>
            ),
          },
          {
            path: "transactions/history",
            element: (
              <PrivateRoute>
                <TransactionHistory />
              </PrivateRoute>
            ),
          },
          {
            path: "send-money",
            element: (
              <PrivateRoute>
                <SendMoney />
              </PrivateRoute>
            ),
          },
          {
            path: "cash-in",
            element: (
              <PrivateRoute>
                <ReceiveMoney />
              </PrivateRoute>
            ),
          },
          {
            path: "cash-out",
            element: (
              <PrivateRoute>
                <CashOut />
              </PrivateRoute>
            ),
          },
          {
            path: "user-management",
            element: (
              <PrivateRoute>
                <UserManagement />
              </PrivateRoute>
            ),
          },
          {
            path: "settings",
            element: (
              <PrivateRoute>
                <Settings />
              </PrivateRoute>
            ),
          },
        ],
      },
    ],
  },
]);
export default router;
