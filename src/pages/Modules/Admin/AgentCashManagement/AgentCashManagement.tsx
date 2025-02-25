import users, { cashManagementColumn } from "@/Constants/global";
import Header from "@/components/Header";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/Ui/tabs";
import { DataTable } from "@/components/User/UserList";
import { useState } from "react";
const AgentCashManagement = () => {
  const [active, setActive] = useState(false);
  return (
    <div className="p-4">
      <Header title="Agent Cash Management" />
      <Tabs defaultValue="cash-in" className="w-full my-4">
        <TabsList className="w-full bg-[#1E1E2D]">
          <TabsTrigger
            onClick={() => setActive(!active)}
            className="w-1/2 data-[state=active]:bg-[#161622] c-text-gray"
            value="cash-in"
          >
            Cash In
          </TabsTrigger>
          <TabsTrigger
            className="w-1/2 data-[state=active]:bg-[#161622] c-text-gray"
            value="cash-out"
            onClick={() => setActive(!active)}
          >
            Cash Out
          </TabsTrigger>
        </TabsList>

        <TabsContent value="cash-in">
          <DataTable data={users} columns={cashManagementColumn} />
        </TabsContent>
        <TabsContent
          value="cash-out"
          className=" max-h-[480px] overflow-y-auto"
        >
          <DataTable data={users} columns={cashManagementColumn} />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AgentCashManagement;
