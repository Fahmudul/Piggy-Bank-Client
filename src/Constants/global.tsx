import { ColumnDef } from "@tanstack/react-table";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/Ui/tooltip";
import {
  ShieldCheck,
  BarChart2,
  Check,
  DollarSign,
  Home,
  Settings,
  ShieldBan,
  X,
} from "lucide-react";

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

export type Payment = {
  id: string;
  amount: number;
  status: "pending" | "processing" | "success" | "failed";
  email: string;
};

export const cashManagementColumn: ColumnDef<Payment>[] = [
  {
    accessorKey: "mobilePhone",
    header: "Mobile No",
  },

  {
    accessorKey: "transactionAmount",
    header: "Amount",
  },
  {
    accessorKey: "action",
    header: "Action",
    cell: ({ row }) => (
      <div className="capitalize flex items-center gap-2">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <button>
                <ShieldCheck className="w-4 h-4 text-[#1db954] cursor-pointer" />
              </button>
            </TooltipTrigger>
            <TooltipContent>Accept</TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              {" "}
              <button>
                <ShieldBan className="w-4 h-4 text-[#e53e3e] cursor-pointer" />
              </button>
            </TooltipTrigger>
            <TooltipContent>Reject</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    ),
  },
];
export const userManagementColumn: ColumnDef<Payment>[] = [
  {
    accessorKey: "mobilePhone",
    header: "Mobile No",
  },

  {
    accessorKey: "role",
    header: "Role",
  },
  {
    accessorKey: "action",
    header: "Action",
    cell: ({ row }) => (
      <div className="capitalize flex items-center gap-2">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <button>
                <ShieldCheck className="w-4 h-4 text-[#1db954] cursor-pointer" />
              </button>
            </TooltipTrigger>
            <TooltipContent>Unblock</TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              {" "}
              <button>
                <ShieldBan className="w-4 h-4 text-[#e53e3e] cursor-pointer" />
              </button>
            </TooltipTrigger>
            <TooltipContent>Block</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    ),
  },
];
export const approvalQueuecolumns: ColumnDef<Payment>[] = [
  {
    accessorKey: "mobileNumber",
    header: "Email",
  },
  {
    accessorKey: "requestType",
    header: "Request type",
  },
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    accessorKey: "action",
    header: "Action",
    cell: ({ row }) => (
      <div className="capitalize flex items-center gap-2">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <button title="Approve">
                <Check
                  xlinkTitle="Approve"
                  className="w-4 h-4 text-[#1db954] cursor-pointer"
                />
              </button>
            </TooltipTrigger>
            <TooltipContent>Accept</TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              {" "}
              <button title="Reject">
                <X className="w-4 h-4 text-[#e53e3e] cursor-pointer" />
              </button>
            </TooltipTrigger>
            <TooltipContent>Reject</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    ),
  },
];
export const testData = [
  {
    mobileNumber: "01712345678",
    requestType: "Account Opening",
    status: "Pending",
  },
  {
    mobileNumber: "01898765432",
    requestType: "Card Activation",
    status: "Approved",
  },
  {
    mobileNumber: "01911223344",
    requestType: "Loan Request",
    status: "Rejected",
  },
  {
    mobileNumber: "01655667788",
    requestType: "Account Closing",
    status: "Pending",
  },
  {
    mobileNumber: "01399887766",
    requestType: "Password Reset",
    status: "Approved",
  },
  {
    mobileNumber: "01477665544",
    requestType: "Card Replacement",
    status: "Rejected",
  },
  {
    mobileNumber: "01533445566",
    requestType: "Transaction Dispute",
    status: "Pending",
  },
  {
    mobileNumber: "01766554433",
    requestType: "Address Update",
    status: "Approved",
  },
  {
    mobileNumber: "01822334455",
    requestType: "Email Update",
    status: "Rejected",
  },
  {
    mobileNumber: "01988776655",
    requestType: "Cheque Book Request",
    status: "Pending",
  },
];

export const users = [
  { mobilePhone: "+8801712345678", role: "Admin" },
  { mobilePhone: "+8801723456789", role: "User" },
  { mobilePhone: "+8801734567890", role: "Manager" },
  { mobilePhone: "+8801745678901", role: "Support" },
  { mobilePhone: "+8801756789012", role: "User" },
  { mobilePhone: "+8801767890123", role: "Admin" },
  { mobilePhone: "+8801778901234", role: "Moderator" },
  { mobilePhone: "+8801789012345", role: "User" },
  { mobilePhone: "+8801790123456", role: "Manager" },
  { mobilePhone: "+8801701234567", role: "Support" },
];
export default users;
