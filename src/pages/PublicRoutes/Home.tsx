import { Link } from "react-router-dom";
import Logo from "../../components/Ui/Logo";

const Home = () => {
  return (
    <div className="w-full relative h-full flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center items-center ">
        <Logo height={80} width={80} />
        <h1 className="text-4xl font-semibold mt-1">PIGGYBANK</h1>
      </div>
      <Link
        className="absolute bottom-10 text-white bg-[#0066FF] py-3 px-6 rounded-lg font-semibold text-base"
        to="/login"
      >
        Get Started
      </Link>
    </div>
  );
};

export default Home;
