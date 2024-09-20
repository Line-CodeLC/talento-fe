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
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Input } from "@/components/ui/input";

import Stepper from "@/components/ui/stepper";
import { FC, useState } from "react";

import { useDropzone } from "react-dropzone";

import { EditCompanySchema } from "../schema/editCompanySchema";

interface EditCompanyFormProps {}
export const EditCompanyForm: FC<EditCompanyFormProps> = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const form = useForm<z.infer<typeof EditCompanySchema>>({
    resolver: zodResolver(EditCompanySchema),
    defaultValues: {
      name: "",
      email: "",
      phoneNumber: 0,
      address: "",
      hrAllocated: "",
      salesPersonAllocated: "",
    },
  });
  function onSubmit(values: z.infer<typeof EditCompanySchema>) {
    console.log(values);
  }

  return (
    <>
      <Stepper currentStep={currentStep} length={2} />
      <div className="mt-10 ">
        <div className="max-w-5xl mx-auto w-full ">
          <div className="font-medium text-2xl mb-10 ">
            Fill in the details to Edit your company
          </div>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              {currentStep == 1 && (
                <>
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <div className=" justify-between  items-center">
                          <div>
                            <FormLabel>Name</FormLabel>
                            <FormDescription>
                              Enter your company Name
                            </FormDescription>
                          </div>
                          <FormControl>
                            <Input
                              placeholder="Name"
                              className="w-[300px]"
                              {...field}
                            />
                          </FormControl>
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />{" "}
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <div className=" justify-between  items-center">
                          <div>
                            <FormLabel>Email</FormLabel>
                            <FormDescription>
                              Enter your company Email
                            </FormDescription>
                          </div>
                          <FormControl>
                            <Input
                              placeholder="Email"
                              className="w-[300px]"
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
                            <FormLabel>phone Number</FormLabel>
                            <FormDescription>
                              Enter your Company phone Number
                            </FormDescription>
                          </div>
                          <FormControl>
                            <Input
                              placeholder="Phone Number"
                              className="w-[300px]"
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
                    name="address"
                    render={({ field }) => (
                      <FormItem>
                        <div className=" justify-between  items-center">
                          <div>
                            <FormLabel>Address</FormLabel>
                            <FormDescription>
                              Enter your company Name
                            </FormDescription>
                          </div>
                          <FormControl>
                            <Input
                              placeholder="Address"
                              className="w-[300px]"
                              {...field}
                            />
                          </FormControl>
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </>
              )}
              {currentStep == 2 && (
                <>
                  <div>Other Details</div>
                  <FormField
                    control={form.control}
                    name="hrAllocated"
                    render={({ field }) => (
                      <FormItem className="col-span-1">
                        <FormLabel>HR Allocated</FormLabel>
                        <FormDescription>
                          Select the HR for the company
                        </FormDescription>
                        <Select
                          onValueChange={(e) => {
                            field.onChange(e);
                          }}
                          value={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select Type" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent defaultValue={field.value}>
                            <SelectItem value="service 1">service 1</SelectItem>
                            <SelectItem value="service 2">service 2</SelectItem>
                            <SelectItem value="Service 3">Service 3</SelectItem>

                            <SelectItem value="Service 4">Service 4</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="salesPersonAllocated"
                    render={({ field }) => (
                      <FormItem className="col-span-1">
                        <FormLabel>SalesPerson Allocated</FormLabel>
                        <FormDescription>
                          Select the SalesPerson for the company
                        </FormDescription>
                        <Select
                          onValueChange={(e) => {
                            field.onChange(e);
                          }}
                          value={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select Type" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent defaultValue={field.value}>
                            <SelectItem value="service 1">service 1</SelectItem>
                            <SelectItem value="service 2">service 2</SelectItem>
                            <SelectItem value="Service 3">Service 3</SelectItem>

                            <SelectItem value="Service 4">Service 4</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </>
              )}

              <div className="flex gap-3">
                {currentStep < 3 && (
                  <Button onClick={() => setCurrentStep((prev) => prev + 1)}>
                    {" "}
                    Next
                  </Button>
                )}
                {currentStep > 1 && (
                  <>
                    {" "}
                    <Button onClick={() => setCurrentStep((prev) => prev - 1)}>
                      {" "}
                      Back
                    </Button>
                    {currentStep == 3 && <Button type="submit">Submit</Button>}
                  </>
                )}
              </div>
            </form>
          </Form>
        </div>
      </div>
    </>
  );
};
