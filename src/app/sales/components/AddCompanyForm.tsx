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
import { ReactCropperElement } from "react-cropper";
import { FC, useState } from "react";
import { useRef } from "react";
import { useDropzone } from "react-dropzone";
import { DocumentUpload } from "@/components/ui/document-upload";
import { Progress } from "@/components/ui/progress";

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
      <Progress value={(currentStep / 3) * 100} className="mb-4" />
      <div className=" ">
        <div className="max-w-5xl mx-auto w-full ">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              {currentStep == 1 && (
                <>
                  <div className="font-medium text-2xl mb-10 ">
                    Basic Details
                  </div>
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <div className="flex justify-between items-center">
                          <div>
                            <FormLabel>Name</FormLabel>
                            <FormDescription>
                              Enter your company name
                            </FormDescription>
                          </div>
                          <FormControl>
                            <Input
                              placeholder="Name"
                              className="w-[300px] text-start"
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
                        <div className="flex justify-between items-center">
                          <div>
                            <FormLabel>Email</FormLabel>
                            <FormDescription>
                              Enter your company email
                            </FormDescription>
                          </div>
                          <FormControl>
                            <Input
                              placeholder="Email"
                              className="w-[300px] text-start"
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
                        <div className="flex justify-between items-center">
                          <div>
                            <FormLabel>Phone Number</FormLabel>
                            <FormDescription>
                              Enter your Company phone Number
                            </FormDescription>
                          </div>
                          <FormControl>
                            <Input
                              placeholder="Phone Number"
                              className="w-[300px] text-start"
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
                        <div className="flex justify-between items-center">
                          <div>
                            <FormLabel>Address</FormLabel>
                            <FormDescription>
                              Enter your company Address
                            </FormDescription>
                          </div>
                          <FormControl>
                            <Input
                              placeholder="Address"
                              className="w-[300px] text-start"
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
                <div className="font-medium text-2xl mb-10">Service Details</div>
<FormField
  control={form.control}
  name="service"
  render={({ field }) => (
    <FormItem className="col-span-1">
      <FormLabel>Type</FormLabel>
      <FormControl>
        <Select onValueChange={(e) => field.onChange(e)} value={field.value}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select Type" />
          </SelectTrigger>
          <SelectContent defaultValue={field.value}>
            <SelectItem value="service 1">Service 1</SelectItem>
            <SelectItem value="service 2">Service 2</SelectItem>
            <SelectItem value="service 3">Service 3</SelectItem>
            <SelectItem value="service 4">Service 4</SelectItem>
          </SelectContent>
        </Select>
      </FormControl>
      <FormMessage />
    </FormItem>
  )}
/>
                  <FormField
                    control={form.control}
                    name="payRate"
                    render={({ field }) => (
                      <FormItem>
                        <div className="flex justify-between items-start">
                          <div>
                            <FormLabel>Pay Rate</FormLabel>
                            <FormDescription>Enter Pay Rate</FormDescription>
                          </div>
                          <FormControl>
                            <Input
                              placeholder="Pay rate"
                              className="w-[300px] text-start"
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
                        <div className="flex justify-between items-center">
                          <div>
                            <FormLabel>Bill Rate</FormLabel>
                            <FormDescription>Enter Bill Rate</FormDescription>
                          </div>
                          <FormControl>
                            <Input
                              placeholder="Bill rate"
                              className="w-[300px] text-start"
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
                        <div className="flex justify-between items-start">
                          <div>
                            <FormLabel>Commission</FormLabel>
                            <FormDescription>Enter Commission</FormDescription>
                          </div>
                          <FormControl>
                            <Input
                              placeholder="Commission"
                              className="w-[300px] text-start"
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
                  <div className="font-medium text-2xl mb-10 ">Agreement</div>
                  <DocumentUpload dropzone={logoDropzone} fileTypes={[]} />
                </>
              )}
              <div className="flex justify-between">
                {currentStep > 1 && (
                  <>
                    <Button onClick={() => setCurrentStep((prev) => prev - 1)}>
                      Back
                    </Button>
                    {currentStep == 3 && <Button type="submit">Submit</Button>}
                  </>
                )}
                {currentStep < 3 && (
                  <Button onClick={() => setCurrentStep((prev) => prev + 1)}>
                    Next
                  </Button>
                )}
              </div>
            </form>
          </Form>
        </div>
      </div>
    </>
  );
};
