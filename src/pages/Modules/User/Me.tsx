import VisaCard from "@/components/VisaCard";
import { ArrowDown, ArrowUp, Cloud, Coins, Search } from "lucide-react";
import { Link } from "react-router-dom";

const Me = () => {
  return (
    <div className=" h-[650px] w-full bg-[#161622] text-white relative overflow-hidden">
      {/* Header */}
      <div className="p-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gray-400" />
          <div>
            <div className="text-gray-400 text-xs">Welcome back,</div>
            <div className="font-semibold">Tanya Myroniuk</div>
          </div>
        </div>
        <span className="bg-[#1e1e2d] w-8 h-8 rounded-full flex items-center justify-center">
          <Search className="w-4 h-4 text-gray-400" />
        </span>
      </div>

      {/* Card Section */}
      <div className="ml-2 mr-2 flex justify-center items-center">
        <VisaCard />
      </div>

      {/* Quick Actions */}
      <div className="px-8 py-4 flex justify-between">
        <Link to="/me/send-money" className="flex flex-col items-center gap-1">
          <div className="w-10 h-10 bg-[#1E1E2D] rounded-full flex items-center justify-center">
            <ArrowUp className="w-5 h-5" />
          </div>
          <div className="text-xs text-center">
            Sent
          </div>
        </Link>
        <Link to="/me/cash-in" className="flex flex-col items-center gap-1">
          <div className="w-10 h-10 bg-[#1E1E2D] rounded-full flex items-center justify-center">
            <ArrowDown className="w-5 h-5" />
          </div>
          <div className="text-xs">Receive</div>
        </Link>
        <Link to="/me/cash-out" className="flex flex-col items-center gap-1">
          <div className="w-10 h-10 bg-[#1E1E2D] rounded-full flex items-center justify-center">
            <Coins className="w-5 h-5 text-blue-500" />
          </div>
          <div className="text-xs text-blue-500">Cash Out</div>
        </Link>
        <Link to="/me/topup" className="flex flex-col items-center gap-1">
          <div className="w-10 h-10 bg-[#1E1E2D] rounded-full flex items-center justify-center">
            <Cloud className="w-5 h-5" />
          </div>
          <div className="text-xs">Topup</div>
        </Link>
      </div>

      {/* Transactions */}
      <div className="px-4">
        <div className="flex justify-between items-center mb-4">
          <div className="font-semibold">Transaction</div>
          <button className="text-blue-500 text-sm">Sell All</button>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#1E1E2D] rounded-xl flex items-center justify-center">
                <img
                  src="/api/placeholder/20/20"
                  alt="Apple"
                  className="rounded"
                />
              </div>
              <div>
                <div className="font-medium">Apple Store</div>
                <div className="text-xs text-gray-400">Entertainment</div>
              </div>
            </div>
            <div>- $5.99</div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#1E1E2D] rounded-xl flex items-center justify-center">
                <img
                  src="/api/placeholder/20/20"
                  alt="Spotify"
                  className="rounded"
                />
              </div>
              <div>
                <div className="font-medium">Spotify</div>
                <div className="text-xs text-gray-400">Music</div>
              </div>
            </div>
            <div>- $12.99</div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#1E1E2D] rounded-xl flex items-center justify-center">
                <ArrowDown className="w-5 h-5" />
              </div>
              <div>
                <div className="font-medium">Money Transfer</div>
                <div className="text-xs text-gray-400">Transaction</div>
              </div>
            </div>
            <div className="text-blue-500">$300</div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#1E1E2D] rounded-xl flex items-center justify-center">
                <img
                  src="/api/placeholder/20/20"
                  alt="Grocery"
                  className="rounded"
                />
              </div>
              <div>
                <div className="font-medium">Grocery</div>
                <div className="text-xs text-gray-400">Shopping</div>
              </div>
            </div>
            <div>- $88</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Me;
