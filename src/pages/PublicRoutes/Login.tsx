import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import { Mail, Phone, Lock, Eye, ChevronLeft, EyeClosed } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { Input } from "@/components/Ui/input";
import { Button } from "@/components/Ui/Button";
import { useState } from "react";
import { jwtDecode } from "jwt-decode";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/Ui/form";
import { useLoginMutation } from "@/Redux/Features/authApi";
import { toast } from "sonner";
import { useAppDispatch } from "@/Redux/hook";
import { IUserState, setUser } from "@/Redux/Features/authSlice";

const Login = () => {
  const form = useForm();
  const [login] = useLoginMutation(undefined);
  const dispatch = useAppDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    // console.log(data);
    const toastId = toast.loading("Logging in...");
    const modifiedData: { email?: string; pin: string; phone?: string } = {
      pin: "",
    };
    modifiedData.pin = data.pin;
    if (data.mobileNumber) {
      modifiedData.phone = data.mobileNumber;
    } else {
      modifiedData.email = data.email;
    }
    try {
      const response = await login(modifiedData);
      console.log(response);
      if (response?.data?.success) {
        toast.success("Login successful", { id: toastId });
        const decodedData = jwtDecode(response.data.data) as IUserState;
        // console.log(decodedData);
        dispatch(setUser({ ...decodedData, token: response.data.data }));
        navigate("/me");
      } else {
        if (response.error) {
          toast.error(response?.error?.data?.message, { id: toastId });
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="h-[650px] w-[315px] bg-[#161622] p-4 overflow-y-auto">
      <div className="w-full">
        <Link
          to="/"
          className="mb-4 flex items-center justify-center w-8 h-8 rounded-full bg-[#1e1e2d]"
        >
          <ChevronLeft className="w-5 h-5 text-gray-400" />
        </Link>

        <h1 className="text-xl font-semibold text-white mb-4">Sign Up</h1>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="mobileNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-xs text-gray-400">
                    Mobile Number
                  </FormLabel>
                  <div className="relative">
                    <FormControl>
                      <Input
                        {...field}
                        className="bg-gray-900 border-gray-800 text-white pl-8 h-9 text-sm"
                        type="tel"
                        placeholder="Enter mobile number"
                        value={field.value || ""}
                      />
                    </FormControl>
                    <Phone className="w-4 h-4 text-gray-400 absolute left-2 top-1/2 -translate-y-1/2" />
                  </div>
                  <FormMessage className="text-xs text-red-500" />
                </FormItem>
              )}
            />

            <div className="separator">
              <span className="line"></span>
              <span className="or-text">Or</span>
              <span className="line"></span>
            </div>

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-xs text-gray-400">
                    Email Address
                  </FormLabel>
                  <div className="relative">
                    <FormControl>
                      <Input
                        {...field}
                        className="bg-gray-900 border-gray-800 text-white pl-8 h-9 text-sm"
                        type="email"
                        placeholder="Enter email address"
                        value={field.value || ""}
                      />
                    </FormControl>
                    <Mail className="w-4 h-4 text-gray-400 absolute left-2 top-1/2 -translate-y-1/2" />
                  </div>
                  <FormMessage className="text-xs text-red-500" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="pin"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-xs text-gray-400">
                    Password
                  </FormLabel>
                  <div className="relative">
                    <FormControl>
                      <Input
                        {...field}
                        className="bg-gray-900 border-gray-800 text-white pl-8 pr-8 h-9 text-sm"
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter 5 digit pin"
                        value={field.value || ""}
                      />
                    </FormControl>
                    <Lock className="w-4 h-4 text-gray-400 absolute left-2 top-1/2 -translate-y-1/2" />
                    <div
                      className="absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <Eye className="w-4 h-4 text-gray-400" />
                      ) : (
                        <EyeClosed className="w-4 h-4 text-gray-400" />
                      )}
                    </div>
                  </div>
                  <FormMessage className="text-xs text-red-500" />
                </FormItem>
              )}
            />

            <Button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-1 h-9 rounded-lg text-sm"
            >
              Sign In
            </Button>
          </form>
        </Form>

        <p className="text-gray-400 text-center text-xs mt-4">
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
