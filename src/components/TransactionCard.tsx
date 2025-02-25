import { CircleDollarSign } from "lucide-react";
import React from "react";

const TransactionCard = () => {
  return (
    <div className="mb-2 mr-3 flex items-center justify-between">
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
  );
};

export default TransactionCard;
