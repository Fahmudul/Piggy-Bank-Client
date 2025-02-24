import { routes } from "@/Constants/global";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="h-[650px] w-full bg-[#161622] text-white relative overflow-hidden">
      <Outlet />
      {/* Bottom Navigation */}
      <div className="absolute w-full bottom-0 left-0 right-0 bg-[#1E1E2D] py-2 px-4">
        <div className="flex justify-between items-center">
          {routes.map((route, index) => (
            <NavLink
              to={`/me${route.path}`}
              key={index}
              className="flex flex-col items-center gap-1"
            >
              <route.icon className="w-5 h-5 text-gray-400" />
              <p className="text-[10px] text-gray-400">{route.name}</p>
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
