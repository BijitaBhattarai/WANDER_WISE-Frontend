"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import useAuth from "@/hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { loginUser } from "@/api/auth";
import { toast } from "sonner";

const formSchema = z.object({
  email: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  password: z.string().min(8, {
    message: "password must be at least 8 characters.",
  }),
});

export default function Signin() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const onSubmit = async (data) => {
    console.log(data);

    try {
      const response = await loginUser(data);
      console.log(response);
      if (response.token) {
        login(response.user, response.token);
        navigate("/dashboard");
      } else {
        toast.error("Login failed.Please try again");
      }
    } catch (error) {
      console.log(error);
      toast.error("Login failed.Please try again");
    }
  };
  return (
    <section className="h-dvh flex items-center justify-center">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <Card className="w-100">
            <CardHeader>
              <CardTitle className="text-center text-2xl">Sign In</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-3">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        className="bg-gray-100"
                        placeholder=""
                        {...field}
                        type={"email"}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input
                        className="bg-gray-100"
                        placeholder=""
                        {...field}
                        type={"password"}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>
            <CardFooter className="flex flex-col gap-4">
              <Button
                className="w-full bg-green-600 hover:bg-green-500"
                type="submit"
              >
                Submit
              </Button>
              <p className="text-xs text-gray-500 mt-4">
                Don't have an account?{" "}
                <a
                  className="text-blue-600 hover:underline ml-0.5"
                  href="/register"
                >
                  Register.
                </a>
              </p>
            </CardFooter>
          </Card>
        </form>
      </Form>
    </section>
  );
}
