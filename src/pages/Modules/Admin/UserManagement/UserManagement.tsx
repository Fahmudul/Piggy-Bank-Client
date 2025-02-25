import users, { approvalQueuecolumns, columns, testData, userManagementColumn } from "@/Constants/global";
import Header from "@/components/Header";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/Ui/tabs";
import { DataTable } from "@/components/User/UserList";
import { useState } from "react";
const UserManagement = () => {
  const [active, setActive] = useState(false);
  return (
    <div className="p-4">
      <Header title="Account Administration" />
      <Tabs defaultValue="control" className="w-full my-4">
        <TabsList className="w-full bg-[#1E1E2D]">
          <TabsTrigger
            onClick={() => setActive(!active)}
            className="w-1/2 data-[state=active]:bg-[#161622] c-text-gray"
            value="control"
          >
            User Control
          </TabsTrigger>
          <TabsTrigger
            className="w-1/2 data-[state=active]:bg-[#161622] c-text-gray"
            value="queue"
            onClick={() => setActive(!active)}
          >
            Approval Queue
          </TabsTrigger>
        </TabsList>

        <TabsContent value="control">
          {" "}
          <DataTable data={users} columns={userManagementColumn} />
        </TabsContent>
        <TabsContent value="queue" className=" max-h-[480px] overflow-y-auto">
          halalo
          <DataTable data={testData} columns={approvalQueuecolumns} />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default UserManagement;
