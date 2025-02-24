import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { Mail, Phone, Lock, Eye, ArrowLeft, EyeClosed } from "lucide-react";
import { Input } from "../components/Ui/input";
import { Button } from "../components/Ui/Button";
import { Link } from "react-router-dom";
import { useState } from "react";
const Login = () => {
  const { register, handleSubmit } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    console.log(data);
  };
  return (
    <div className="min-h-screen bg-[#161622] p-4">
      <div className="max-w-md mx-auto">
        <Link
          to="/"
          className="mb-6 flex items-center justify-center w-10 h-10 rounded-full bg-[#1e1e2d]"
        >
          <ArrowLeft className="w-6 h-6 text-gray-400" />
        </Link>

        <h1 className="text-2xl font-semibold text-white mb-8">Sign In</h1>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label className="text-sm text-gray-400 block mb-2">
              Phone Number
            </label>
            <div className="relative">
              <Input
                {...register("phone", { required: true })}
                className="bg-gray-900 border-gray-800 text-white pl-10"
                placeholder="Enter phone number"
                type="tel"
              />
              <Phone className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
            </div>
          </div>

          <div>
            <label className="text-sm text-gray-400 block mb-2">
              Email Address
            </label>
            <div className="relative">
              <Input
                {...register("email", {
                  required: true,
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                })}
                className="bg-gray-900 border-gray-800 text-white pl-10"
                type="email"
                placeholder="Enter email address"
              />
              <Mail className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
            </div>
          </div>

          <div className="relative">
            <Input
              {...register("password", { required: true, minLength: 6 })}
              className="bg-gray-900 border-gray-800 text-white pl-10 pr-10"
              type={showPassword ? "text" : "password"}
              placeholder="Enter password"
            />
            <Lock className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
            {showPassword ? (
              <Eye
                className="w-5 h-5 text-gray-400 absolute right-3 top-1/2 -translate-y-1/2"
                onClick={() => setShowPassword(!showPassword)}
              />
            ) : (
              <EyeClosed
                className="w-5 h-5 text-gray-400 absolute right-3 top-1/2 -translate-y-1/2"
                onClick={() => setShowPassword(!showPassword)}
              />
            )}
          </div>

          <Button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg"
          >
            Sign Up
          </Button>
        </form>

        <p className="text-gray-400 text-center mt-6">
          Dont have an account?{" "}
          <Link to="/register" className="text-blue-500">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
