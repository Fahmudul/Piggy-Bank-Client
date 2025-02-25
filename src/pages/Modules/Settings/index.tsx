import Header from "@/components/Header";
import LogOutSvg from "@/components/Ui/LogOutSvg";

const Settings = () => {
  return (
    <div className="p-4">
      <Header title="Settings" Icon={LogOutSvg} logOutBtn={true} />
    </div>
  );
};

export default Settings;
