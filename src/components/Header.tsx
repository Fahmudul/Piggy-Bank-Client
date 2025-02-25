import { ChevronLeft } from "lucide-react";
import { ElementType } from "react";
import { Link } from "react-router-dom";
interface HeaderProps {
  title: string;
  Icon?: ElementType; // ✅ Optional component reference
}

const Header = ({ title, Icon }: HeaderProps) => {
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
        <span className="bg-[#1e1e2d] w-8 h-8 rounded-full flex items-center justify-center">
          <Icon />
        </span>
      ) : (
        <>
          <span className="w-8 h-8"></span>
        </>
      )}
    </div>
  );
};

export default Header;
