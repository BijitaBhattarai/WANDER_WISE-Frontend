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
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { registerUser } from "@/api/auth";
import useAuth from "@/hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { Eye, EyeOff } from "lucide-react";
import { useEffect, useState } from "react";

const formSchema = z
  .object({
    name: z
      .string()
      .min(2, { message: "Username must be at least 2 characters." })
      .regex(/^[A-Za-z\s]+$/, {
        message: "Username must contain only letters",
      }),

    email: z.string().min(2, {
      message: "Email must be valid.",
    }),
    password: z.string().min(8, {
      message: "password must be at least 8 characters.",
    }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Password doesn't match",
    path: ["confirmPassword"],
  });

export default function Register() {
  const { login, token } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      navigate("/dashboard");
    }
  }, [token]);

  const form = useForm({
    resolver: zodResolver(formSchema),
    mode: "onChange", // validate while typing
    reValidateMode: "onChange",
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });
  const [showPassword, setShowPassword] = useState(false);
  // const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const onSubmit = async (data) => {
    console.log(data);
    const { name, email, password } = data;
    try {
      const response = await registerUser({ name, email, password });
      console.log(response);
      if (response.token) {
        login(response.user, response.token);
        navigate("/dashboard");
      } else {
        toast.error("Registration failed.Please try again");
      }
    } catch (error) {
      console.log(error);
      toast.error("Registration failed.Please try again");
    }
  };
  return (
    <section className="h-dvh flex items-center justify-center">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <Card className="w-100">
            <CardHeader>
              <CardTitle className="relative text-center text-2xl">
                <span>Sign Up</span>
                <img
                  className="absolute top-0 right-0 w-12 h-12"
                  src="public/logo.png"
                  alt=""
                />
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-3">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input
                        className="bg-gray-100"
                        placeholder=""
                        {...field}
                        type={"name"}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
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
                      <div className="relative">
                        <Input
                          {...field}
                          type={showPassword ? "text" : "password"}
                          className="bg-gray-100 pr-10"
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                        >
                          {showPassword ? (
                            <EyeOff size={16} />
                          ) : (
                            <Eye size={16} />
                          )}
                        </button>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>confirmPassword</FormLabel>
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
                className="w-full bg-green-600  hover:bg-green-500"
                type="submit"
              >
                Submit
              </Button>
              <p className="text-xs text-gray-500 mt-4">
                Already have an account?{" "}
                <a
                  className="text-blue-600 hover:underline ml-0.5"
                  href="/signin"
                >
                  Signin
                </a>
              </p>
            </CardFooter>
          </Card>
        </form>
      </Form>
    </section>
  );
}
