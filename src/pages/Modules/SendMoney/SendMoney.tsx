import { useSendMoneyMutation } from "@/Redux/Features/Transaction/Transaction.api";
import Header from "@/components/Header";
import { Button } from "@/components/Ui/Button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/Ui/form";
import { Input } from "@/components/Ui/input";
import VisaCard from "@/components/VisaCard";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";

const SendMoney = () => {
  const form = useForm();
  const [sendMoney] = useSendMoneyMutation(undefined);
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    console.log(data);
    const toastId = toast.loading("Sending money...");
    try {
      const modifiedData = {
        ...data,
        amount: parseFloat(data.amount),
        transactionType: "Send Money",
      };
      console.log(modifiedData);
      const response = await sendMoney(modifiedData);
      console.log(response);
      if (response?.data?.success) {
        toast.success(response?.data?.message, { id: toastId });
      } else {
        toast.error("Failed to send money", { id: toastId });
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="p-4 space-y-3 relative h-[590px] flex flex-col">
      <Header title="Send Money" />
      {/* Card */}
      <div className=" my-3 flex justify-center items-center">
        <VisaCard />
      </div>
      {/* Send Money Receivers section*/}
      {/* <div className="h-[130px] p-3 rounded-2xl w-full bg-[#1E1E2D]">
        <p className="mb-3">Send to</p>
        <div className="flex justify-between text-sm">
          {Array(5)
            .fill(0)
            .map((_, index) => (
              <span key={index}>
                <span className="border-[#0066FF]  w-10 h-10 rounded-full border flex items-center justify-center">
                  <Plus className="text-[#0066FF]" />
                </span>
                <p className="text-center mt-1">Add</p>
              </span>
            ))}
        </div>
      </div> */}
      <div className="   w-full ">
        <Form {...form}>
          <form
            className="flex flex-col  h-[300px] justify-between"
            onSubmit={form.handleSubmit(onSubmit)}
          >
            <div className="h-[185px] bg-[#1E1E2D] p-3 rounded-2xl space-y-3">
              <FormField
                name="receiever"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="c-text-gray">
                      Enter mobile no
                    </FormLabel>
                    <div className="flex gap-2 items-center text-[#9CB1D1] border rounded-lg px-3 mt-2">
                      <p className="flex items-center gap-1">+88</p>
                      <FormControl>
                        <Input
                          {...field}
                          className="focus:outline-none focus:ring-0 focus-visible:ring-0 focus-visible:border-transparent border-none"
                          value={field.value || ""}
                        />
                      </FormControl>
                    </div>
                  </FormItem>
                )}
              />
              <FormField
                name="amount"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="c-text-gray">Enter amount</FormLabel>
                    <div className="flex gap-1 items-center text-[#9CB1D1] border rounded-lg px-3 mt-2">
                      <p className="flex items-center  font-bold">USD</p>
                      <FormControl>
                        <Input
                          {...field}
                          className="focus:outline-none focus:ring-0 focus-visible:ring-0 focus-visible:border-transparent border-none"
                          value={field.value || ""}
                        />
                      </FormControl>
                    </div>
                  </FormItem>
                )}
              />
            </div>
            <div className=" flex items-end">
              <Button type="submit" className="w-full bg-[#0066FF] ">
                Send Money
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default SendMoney;
