"use client";
import { Card } from "../../ui/card";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "../../ui/input";
import { Button } from "../../ui/button";
import Link from "next/link";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../ui/select";

const FormSchema = z.object({
  email: z.string().email().min(2, {
    message: "email field is required",
  }),
  password: z.string().min(8, {
    message: "password field is required",
  }),
});

const LoginForm = ({ title }: any) => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: z.infer<typeof FormSchema>) => {
    console.log(data);
  };
  return (
    <Card className="p-5 w-full  h-auto min-h-auto space-y-4 lg:max-w-fit  flex flex-col justify-between">
      {title && (
        <h2 className="text-xl text-gray-800 font-semibold text-center mb-3">
          {title ?? "Members login"}
        </h2>
      )}
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field, formState: {} }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="******" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            className="w-full bg-[#ed1c5c]  font-semibold text-lg"
            type="submit"
          >
            Login
          </Button>
        </form>
      </Form>

      <div className="text-center max-w-[320px]">
        <Link
          href="/passwordreset"
          className="hover:text-blue-500 text-xs font-semibold text-gray-700"
        >
          Forgot your password?
        </Link>
        <p className="p-1 text-gray-500 text-center text-xs ">
          By joining you agree to our terms & conditions and privacy policy
        </p>
      </div>
    </Card>
  );
};

export default LoginForm;
