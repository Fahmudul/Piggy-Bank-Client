import Header from "@/components/Header";
import TransactionCard from "@/components/TransactionCard";
import { History } from "lucide-react";

const TransactionHistory = () => {
  return (
    <div className="p-4">
      <Header title="Transaction History" Icon={History} />
      <div className="mt-4 max-h-[520px] h-full overflow-y-auto">
        {Array(30)
          .fill(0)
          .map((_, index) => (
            <TransactionCard key={index} />
          ))}
      </div>
    </div>
  );
};

export default TransactionHistory;
