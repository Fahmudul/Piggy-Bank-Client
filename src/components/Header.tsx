import { useLogoutMutation } from "@/Redux/Features/authApi";
import { logout } from "@/Redux/Features/authSlice";
import { useAppDispatch, useAppSelector } from "@/Redux/hook";
import { ChevronLeft } from "lucide-react";
import { ElementType } from "react";
import { Link } from "react-router-dom";
interface HeaderProps {
  title: string;
  Icon?: ElementType;
  logOutBtn?: boolean;
}

const Header = ({ title, Icon, logOutBtn }: HeaderProps) => {
  const dispatch = useAppDispatch();
  const [logOut] = useLogoutMutation(undefined);
  const email = useAppSelector((state) => state.auth.email);
  // const navigate = useNavigate();
  return (
    <div className="flex justify-between items-center">
      <Link
        to="/me"
        className="bg-[#1e1e2d] p-1 w-8 h-8 rounded-full flex items-center justify-center"
      >
        <ChevronLeft />
      </Link>
      <span className="font-semibold">{title}</span>
      {Icon ? (
        logOutBtn ? (
          <>
            <span
              onClick={async () => {
                dispatch(logout());
                await logOut({ email });
                // navigate("/login");
              }}
              className="bg-[#1e1e2d] cursor-pointer w-8 h-8 rounded-full flex items-center justify-center"
            >
              <Icon />
            </span>
          </>
        ) : (
          <>
            <span className="bg-[#1e1e2d] cursor-pointer w-8 h-8 rounded-full flex items-center justify-center">
              <Icon />
            </span>
          </>
        )
      ) : (
        <>
          <span className="w-8 h-8"></span>
        </>
      )}
    </div>
  );
};

export default Header;
