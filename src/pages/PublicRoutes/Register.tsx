import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import {
  Mail,
  Phone,
  Lock,
  Eye,
  ChevronLeft,
  EyeClosed,
  CreditCard,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { Input } from "@/components/Ui/input";
import { Button } from "@/components/Ui/Button";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/Ui/select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/Ui/form";
import { toast } from "sonner";
import { useRegisterMutation } from "@/Redux/Features/authApi";

const Register = () => {
  const form = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const [register] = useRegisterMutation(undefined);
  const navigate = useNavigate();
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const modifiedData = { ...data, role: data.role ? data.role : "user" };
    // console.log(modifiedData);
    const toastId = toast.loading("Registering...");
    try {
      const response = await register(modifiedData);
      console.log(response);
      if (response?.data?.success) {
        toast.success(response?.data?.message, { id: toastId });
        // console.log(decodedData);
        navigate("/login");
      } else {
        if (response.error) {
          toast.error(response?.error?.data?.message, { id: toastId });
        }
      }
    } catch (error) {
      console.log(error);
    }
    form.reset();
  };

  return (
    <div className="h-[650px] w-[315px] bg-[#161622] p-4 overflow-y-auto">
      <div className="w-full">
        <button className="mb-4 flex items-center justify-center w-8 h-8 rounded-full bg-[#1e1e2d]">
          <ChevronLeft className="w-5 h-5 text-gray-400" />
        </button>

        <h1 className="text-xl font-semibold text-white mb-4">Sign Up</h1>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-xs text-gray-400">
                    Full Name
                  </FormLabel>
                  <div className="relative">
                    <FormControl>
                      <Input
                        {...field}
                        className="bg-gray-900 border-gray-800 text-white pl-8 h-9 text-sm"
                        placeholder="Enter your full name"
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
              name="phone"
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

            <FormField
              control={form.control}
              name="NID"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-xs text-gray-400">
                    NID Number
                  </FormLabel>
                  <div className="relative">
                    <FormControl>
                      <Input
                        {...field}
                        className="bg-gray-900 border-gray-800 text-white pl-8 h-9 text-sm"
                        placeholder="Enter NID number"
                        value={field.value || ""}
                      />
                    </FormControl>
                    <CreditCard className="w-4 h-4 text-gray-400 absolute left-2 top-1/2 -translate-y-1/2" />
                  </div>
                  <FormMessage className="text-xs text-red-500" />
                </FormItem>
              )}
            />

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
              name="role"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-xs text-gray-400">
                    Account Type
                  </FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue="user"
                    value={field.value || "user"}
                  >
                    <SelectTrigger className="bg-gray-900 border-gray-800 text-white h-9 text-sm">
                      <SelectValue placeholder="Select account type" />
                    </SelectTrigger>
                    <SelectContent className="bg-[#161622] border-gray-800 text-white">
                      <SelectItem value="user">User</SelectItem>
                      <SelectItem value="agent">Agent</SelectItem>
                    </SelectContent>
                  </Select>
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
                    Enter 5 digit pin
                  </FormLabel>
                  <div className="relative">
                    <FormControl>
                      <Input
                        {...field}
                        className="bg-gray-900 border-gray-800 text-white pl-8 pr-8 h-9 text-sm"
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter password"
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
              Sign Up
            </Button>
          </form>
        </Form>

        <p className="text-gray-400 text-center text-xs mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-500">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
