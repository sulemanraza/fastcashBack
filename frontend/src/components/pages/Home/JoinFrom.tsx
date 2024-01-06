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

const JoinFrom = () => {
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
    <Card className="p-5 w-full lg:w-9/12 h-auto min-h-[350px]  lg:max-w-fit  flex flex-col justify-between">
      <h2 className="text-xl text-gray-800 font-semibold text-center mb-3">
        Sign up for free
      </h2>
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
          <Select>
            <SelectTrigger className="w-full text-gray-600 border-l-0 border-t-0 border-r-0 rounded-none outline-none">
              <SelectValue placeholder="Where did you hear about us?" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="friend_email">Tell a Friend Email</SelectItem>
              <SelectItem value="search_engine">Search Engine</SelectItem>
              <SelectItem value="online_article">Online Article</SelectItem>
              <SelectItem value="twitter">Twitter</SelectItem>
              <SelectItem value="facebook">Facebook</SelectItem>
              <SelectItem value="news">News Shows</SelectItem>
              <SelectItem value="online_forum">Online Forum</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>

          <Button
            className="w-full bg-[#ed1c5c]  font-semibold text-lg"
            type="submit"
          >
            Join Free
          </Button>
        </form>
      </Form>

      <div className="text-center max-w-[320px]">
        <Link
          href="/login"
          className="hover:text-blue-500 text-xs font-semibold text-gray-700"
        >
          Already have an account? Login
        </Link>
        <p className="p-1 text-gray-500 text-center text-xs ">
          By joining you agree to our terms & conditions and privacy policy
        </p>
      </div>
    </Card>
  );
};

export default JoinFrom;
