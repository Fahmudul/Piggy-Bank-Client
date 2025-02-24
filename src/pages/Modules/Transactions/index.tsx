import { months } from "@/Constants/global";
import { BellRing, ChevronLeft, CircleDollarSign } from "lucide-react";
import { Link } from "react-router-dom";

const Transactions = () => {
  return (
    <div className="p-4">
      {/* Header */}
      <div className="flex justify-between items-center">
        <Link
          to="/me"
          className="bg-[#1e1e2d] p-1 w-8 h-8 rounded-full flex items-center justify-center"
        >
          <ChevronLeft />
        </Link>
        <span>Transactions</span>
        <span className="bg-[#1e1e2d] w-8 h-8 rounded-full flex items-center justify-center">
          <BellRing className="p-1" />
        </span>
      </div>
      {/* Transactions */}
      <div className="w-full mt-11">
        <p className="text-center font-semibold c-text-gray">Current Balance</p>
        <p className="text-center text-xl mt-2 font-semibold text-white">
          $1000.00
        </p>
        {/* Statristics Graph */}

        {/* Monthly filter */}
        <div className="flex justify-between mt-5 mb-8 items-center">
          {months.map((month, index) => (
            <div key={index}>
              <p
                className={`text-center text-[#A2A2A7] text-xs mt-2 font-semibold  ${
                  month == "Apr"
                    ? "bg-[#0066ff] text-white px-2 py-1 rounded-md"
                    : "bg-transparent"
                }`}
              >
                {month}
              </p>
            </div>
          ))}
        </div>
        {/* Transaction History */}
        <div className="">
          <div className="flex justify-between">
            <p>Transaction</p>
            <button>See All</button>
          </div>
          <div className="mt-4  max-h-[310px] overflow-y-auto">
            {Array(30)
              .fill(0)
              .map((_, index) => (
                <div
                  className="mb-2 mr-3 flex items-center justify-between"
                  key={index}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#1E1E2D] rounded-xl flex items-center justify-center">
                      <CircleDollarSign />
                    </div>
                    <div>
                      <div className="font-medium">Money Transfer</div>
                      <div className="text-xs text-gray-400">Transaction</div>
                    </div>
                  </div>
                  <div>- $5.99</div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transactions;
