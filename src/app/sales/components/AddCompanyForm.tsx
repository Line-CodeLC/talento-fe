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
import { addCompanySchema } from "../schema/schema";
import Cropper, { ReactCropperElement } from "react-cropper";
import Stepper from "@/components/ui/stepper";
import { FC, useState } from "react";
import { useRef } from "react";
import { useDropzone } from "react-dropzone";
import { DocumentUpload } from "@/components/ui/document-upload";

interface AddCompanyFormProps {}
export const AddCompanyForm: FC<AddCompanyFormProps> = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const cropperRef = useRef<ReactCropperElement>(null);
  const logoDropzone = useDropzone();
  const [fullSizeURL, setFullSizeURL] = useState<string | null>(null);
  const form = useForm<z.infer<typeof addCompanySchema>>({
    resolver: zodResolver(addCompanySchema),
    defaultValues: {
      name: "",
      email: "",
      phoneNumber: 0,
      address: "",
      commission: 0,
      agreement: "",
      payRate: 0,
      billRate: 0,
      service: "",
    },
  });
  function onSubmit(values: z.infer<typeof addCompanySchema>) {
    console.log(values);
  }

  return (
    <>
      <Stepper currentStep={currentStep} length={3} />
      <div className="flex items-center justify-center min-h-screen">  
      <div className="mt-10 ">
        <div className=" mx-auto w-full ">
          <div className="font-medium text-2xl mb-10 ">
            Fill in the details to add a company
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
                  <FormField
                    control={form.control}
                    name="service"
                    render={({ field }) => (
                      <FormItem className="col-span-1">
                        <FormLabel>Type</FormLabel>
                        <Select
                          onValueChange={(e) => {
                            const equipmentTypesWithDate = [
                              "truck",
                              "dump truck",
                              "super bus",
                              "bus",
                            ];

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
                    name="payRate"
                    render={({ field }) => (
                      <FormItem>
                        <div className=" justify-between  items-center">
                          <div>
                            <FormLabel>Pay Rate</FormLabel>
                            <FormDescription>Enter Pay Rate</FormDescription>
                          </div>
                          <FormControl>
                            <Input
                              placeholder="pay rate"
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
                    name="billRate"
                    render={({ field }) => (
                      <FormItem>
                        <div className=" justify-between  items-center">
                          <div>
                            <FormLabel>Bill Rate</FormLabel>
                            <FormDescription>
                              Enter your bill rate
                            </FormDescription>
                          </div>
                          <FormControl>
                            <Input
                              placeholder="Bill Rate"
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
                    name="commission"
                    render={({ field }) => (
                      <FormItem>
                        <div className=" justify-between  items-center">
                          <div>
                            <FormLabel>Commission</FormLabel>
                            <FormDescription>
                              Enter your Commission
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
              {currentStep == 3 && (
                <>
                  <DocumentUpload dropzone={logoDropzone} fileTypes={[]} />
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
      </div>
    </>
  );
};
