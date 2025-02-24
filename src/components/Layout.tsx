import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className=" h-screen flex justify-center items-center overflow-hidden">
      <div className="relative hallo border-gray-800 dark:border-[#22222c] bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px]">
        <div className="h-[32px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -start-[17px] top-[72px] rounded-s-lg" />
        <div className="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -start-[17px] top-[124px] rounded-s-lg" />
        <div className="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -start-[17px] top-[178px] rounded-s-lg" />
        <div className="h-[64px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -end-[17px] top-[142px] rounded-e-lg" />
        <div className="rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-[#161622]">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
