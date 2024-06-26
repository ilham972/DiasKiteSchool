"use client";

import React, { useState } from "react";
// import { login, signup } from "@/app/auth/_actions/login";

import { useRouter } from "next/navigation";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
  Form,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { toast } from "sonner";
import { createClient } from "@/utils/supabase/client";
import { Provider } from "@supabase/supabase-js";
import { Button } from "@/components/ui/button";

// const formSchema = z
//   .object({
//     email: z
//       .string()
//       .min(1, "Email is required")
//       .email("Invalid email address"),
//     password: z.string().min(6, "Password must be at least 6 characters long"),
//     confirmPassword: z
//       .string()
//       .min(6, "Confirm Password must be at least 6 characters long"),
//   })
//   .refine((data) => data.password === data.confirmPassword, {
//     message: "Passwords do not match",
//     path: ["confirmPassword"], // This ensures the error message is linked to the confirmPassword field
//   });

export function AuthModal() {
  // const [isSigningUp, setIsSigningUp] = useState(false);
  // const [loading, setLoading] = useState(false);

  // const form = useForm<z.infer<typeof formSchema>>({
  //   resolver: zodResolver(formSchema),
  //   defaultValues: {
  //     email: "",
  //     password: "",
  //     confirmPassword: "",
  //   },
  // });
  async function googleAuth() {
    const supabase = createClient();
    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${location.origin}/auth/callback`,
      },
    });
  }

  // const onSubmit = async (values: z.infer<typeof formSchema>) => {
  //   setLoading(true);

  //   try {
  //     if (isSigningUp) {
  //       toast("Please wait...", {
  //         position: "top-center",
  //       });
  //       await signup(values);
  //       toast("Sign up link sent! Go confirm your email", {
  //         position: "top-center",
  //       });
  //     } else {
  //       toast("Please wait...", { position: "top-center" });
  //       await login(values);
  //       toast.success("Logged in successfully", {
  //         position: "top-center",
  //       });
  //     }
  //   } catch (error) {
  //     toast.error("Something went wrong", { position: "top-center" });
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="secondary"
          className="sm:flex sm:px-4 px-3 bg-green-90 hover:bg-green-50 rounded-[1000px] text-xs md:text-sm lg:text-[16px] md:font-[380] lg:font-[400]  lg:px-8 lg:py-6 sm:py-[23px] "
        >
          Login
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Well Come My Friend</DialogTitle>
          <DialogDescription>Join us and enjoy your holiday</DialogDescription>
        </DialogHeader>
        {/* <div className="bg-white/90  p-8 rounded-xl sm:shadow-md sm:max-w-sm sm:mx-auto pt-10 lg:w-full w-full mx-9">
          <h1 className="text-xl md:text-2xl font-bold mb-2">
            {isSigningUp ? "Create an account" : "Sign in"}
          </h1>
          <p className="mb-8 text-gray-800  text-sm lg:text-md ">
            {isSigningUp
              ? "Join us and enjoy your holiday."
              : "Welcome back! Please login to your account."}
          </p>
          <div className="flex mb-6">
            <Button
              className="flex-1 mr-2"
              variant={isSigningUp ? "outline" : "ghost"}
              onClick={() => setIsSigningUp(true)}
            >
              Sign up
            </Button>
            <Button
              className="flex-1 "
              variant={isSigningUp ? "ghost" : "outline"}
              onClick={() => setIsSigningUp(false)}
            >
              Sign in
            </Button>
          </div>
          <Form {...form}>
            <form
              className="flex flex-col space-y-4 mb-6"
              onSubmit={form.handleSubmit(onSubmit)}
            >
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    {/* <FormLabel>Name</FormLabel> */}
        {/* <FormControl>
                      <Input
                        disabled={loading}
                        placeholder="E-Mail"
                        {...field}
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
                    {/* <FormLabel>Password</FormLabel> */}
        {/* <FormControl>
                      <Input
                        disabled={loading}
                        placeholder="Password"
                        type="password"
                        {...field}
                      />
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
                    <FormControl>
                      <Input
                        disabled={loading}
                        placeholder="Confirm Password"
                        type="password"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {isSigningUp ? (
                <Button
                  disabled={loading}
                  type="submit"
                  className="w-full mb-4"
                >
                  Sign up
                </Button>
              ) : (
                <Button
                  disabled={loading}
                  type="submit"
                  className="w-full mb-4"
                >
                  Login
                </Button> */}
        {/* )} */}
        {/* </form>
          </Form> */}
        {/* 
          // <div className="flex items-center justify-between mb-6">
          //   <hr className="w-full" />
          //   <span className="px-4 text-xs">OR</span>
          //   <hr className="w-full" />
          // </div> */}
        {/* <div className="flex justify-between">
          <Button className="flex-1 mr-2" variant="outline">
            
          </Button>
          <Button className="flex-1 mx-2" variant="outline">
        
          </Button>
          <Button className="flex-1 ml-2" variant="outline">
   
          </Button>
        </div>
        <p className="text-center mt-6 text-sm">
          By creating an account, you agree to our
          <a className="text-blue-600" href="#">
            {" "}
            Terms of Service
          </a>{" "}
          and our
          <a className="text-blue-600" href="#">
            {" "}
            Privacy Policy
          </a>
          .
        </p> */}
        {/* </div> */}
        <DialogFooter>
          <Button
            onClick={async () => {
              await googleAuth();
            }}
          >
            sign in with google
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
