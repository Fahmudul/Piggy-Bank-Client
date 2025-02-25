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
import { Textarea } from "@/components/Ui/textarea";
import { Mail, Phone, NotebookText } from "lucide-react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
const ReceiveMoney = () => {
  const form = useForm();
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    console.log(data);
  };
  return (
    <div className="p-4 space-y-3 relative h-[590px] flex flex-col">
      <Header title="Cash In" />
      {/* Card */}
      <Form {...form}>
        <form className="space-y-3" onSubmit={form.handleSubmit(onSubmit)}>
          <div className=" my-3  h-[250px] space-y-3">
            <FormField
              name="mobile-number"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="c-text-gray">Agent Number</FormLabel>
                  <div className="flex gap-2 items-center px-1 text-[#9CB1D1] border-b border-[#A2A2A7] w-full">
                    <p className="flex items-center gap-1">
                      <Phone className="w-4 h-4" />
                    </p>
                    <FormControl>
                      <Input
                        {...field}
                        className="focus:outline-none focus:ring-0 focus-visible:ring-0 focus-visible:border-transparent border-none"
                      />
                    </FormControl>
                  </div>
                </FormItem>
              )}
            />
            <FormField
              name="email"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="c-text-gray">Email (Me)</FormLabel>
                  <div className="flex gap-2 items-center px-1 text-[#9CB1D1] border-b border-[#A2A2A7] w-full">
                    <p className="flex items-center gap-1">
                      <Mail className="w-4 h-4" />
                    </p>
                    <FormControl>
                      <Input
                        {...field}
                        className="focus:outline-none focus:ring-0 focus-visible:ring-0 focus-visible:border-transparent border-none"
                      />
                    </FormControl>
                  </div>
                </FormItem>
              )}
            />
            <FormField
              name="description"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="c-text-gray">
                    Description (Optional)
                  </FormLabel>
                  <div className="flex gap-2 items-start mt-2 px-1 text-[#9CB1D1] border-b border-[#A2A2A7] w-full">
                    <p className="flex items-center gap-1">
                      <NotebookText className="w-4 h-4" />
                    </p>
                    <FormControl>
                      <Textarea
                        rows={10}
                        cols={10}
                        {...field}
                        className=" focus:outline-none focus:ring-0 focus-visible:ring-0 focus-visible:border-transparent border-none"
                      />
                    </FormControl>
                  </div>
                </FormItem>
              )}
            />
          </div>
          <div className="h-[105px] p-3 rounded-2xl w-full bg-[#1E1E2D] ">
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
                      />
                    </FormControl>
                  </div>
                </FormItem>
              )}
            />
          </div>
        </form>
      </Form>
      <div className="flex-1 flex items-end">
        <Button type="submit" className="w-full bg-[#0066FF] ">
          Request Money
        </Button>
      </div>
    </div>
  );
};

export default ReceiveMoney;
