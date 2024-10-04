"use client";
import { PasswordSchema, SettingSchema } from "@/app/sales/schema/schema";
import { Button } from "@/components/ui/button";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  Form,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

function page() {
  const form = useForm<z.infer<typeof SettingSchema>>({
    resolver: zodResolver(SettingSchema),
    defaultValues: {
      name: "",
      email: "",
      phoneNumber: "",
    },
  });
  function onSubmit(values: z.infer<typeof SettingSchema>) {
    console.log(values);
  }
  const resetPasswordForm = useForm<z.infer<typeof PasswordSchema>>({
    resolver: zodResolver(PasswordSchema),
    defaultValues: {
      currentPassword: "",
      newPassword: "",
      confirmnewPassword: "",
    },
  });
  function onResetPasswordSubmit(values: z.infer<typeof SettingSchema>) {
    console.log(values);
  }
  return (
    <div className="h-screen">
      <div className="bg-white m-5 p-5 ">
        <div className="text-2xl font-semibold">Profile Picture</div>
        <div className="flex gap-5 items-center p-5">
          <div>
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Mangekyou_Sharingan_Sasuke_%28Eternal%29.svg/768px-Mangekyou_Sharingan_Sasuke_%28Eternal%29.svg.png"
              alt=""
              width={100}
              height={100}
            />
          </div>
          <div className="flex gap-5">
            <div className="text-blue-400 border cursor-pointer border-[#EFEEEB] rounded-lg flex items-center justify-center h-10 p-2 ">
              Upload
            </div>
            <div className=" border border-[#EFEEEB] cursor-pointer flex  rounded-lg  items-center justify-center h-10 p-2 ">
              Remove
            </div>
          </div>
        </div>
        <div className="text-2xl font-semibold">Basic Information</div>
        <div>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="grid grid-cols-2  mt-2 gap-4"
            >
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <div className=" justify-between  items-center">
                      <div>
                        <FormLabel>Name</FormLabel>
                      </div>
                      <FormControl>
                        <Input
                          placeholder="Enter your Name"
                          className="w-full"
                          {...field}
                        />
                      </FormControl>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <div className=" justify-between  items-center">
                      <div>
                        <FormLabel>Email</FormLabel>
                      </div>
                      <FormControl>
                        <Input
                          placeholder="Enter your Email"
                          className="w-full"
                          {...field}
                        />
                      </FormControl>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phoneNumber"
                render={({ field }) => (
                  <FormItem>
                    <div className=" justify-between  items-center">
                      <div>
                        <FormLabel> Phone Number </FormLabel>
                      </div>
                      <FormControl>
                        <Input
                          placeholder="Enter your Phone Number"
                          className="w-full"
                          {...field}
                        />
                      </FormControl>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </form>
          </Form>
        </div>

        <div className="text-2xl font-semibold  mt-5">Reset Password</div>
        <div>
          <Form {...resetPasswordForm}>
            <form
              onSubmit={form.handleSubmit(onResetPasswordSubmit)}
              className="flex flex-col mt-2 gap-5"
            >
              <FormField
                control={resetPasswordForm.control}
                name="currentPassword"
                render={({ field }) => (
                  <FormItem>
                    <div className=" justify-between  items-center">
                      <div>
                        <FormLabel>Current Password</FormLabel>
                      </div>
                      <FormControl>
                        <Input
                          placeholder="Enter your Current Password"
                          className="w-full"
                          {...field}
                        />
                      </FormControl>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={resetPasswordForm.control}
                name="newPassword"
                render={({ field }) => (
                  <FormItem>
                    <div className=" justify-between  items-center">
                      <div>
                        <FormLabel>New Password</FormLabel>
                      </div>
                      <FormControl>
                        <Input
                          placeholder="Enter New Password"
                          className="w-full"
                          {...field}
                        />
                      </FormControl>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={resetPasswordForm.control}
                name="confirmnewPassword"
                render={({ field }) => (
                  <FormItem>
                    <div className=" justify-between  items-center">
                      <div>
                        <FormLabel>Confirm New Password</FormLabel>
                      </div>
                      <FormControl>
                        <Input
                          placeholder="Confirm your New Password"
                          className="w-full"
                          {...field}
                        />
                      </FormControl>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex items-end justify-end">
                <Button className="bg-companyblue w-[200px] ">
                  Save Changes
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default page;
