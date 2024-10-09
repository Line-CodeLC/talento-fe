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

import { FC } from "react";
import { requestDocSchema } from "@/app/admin/schema/changeHrSchema";

interface DocumentTypeProps {}
export const QuoteForm: FC<DocumentTypeProps> = () => {
  const form = useForm<z.infer<typeof requestDocSchema>>({
    resolver: zodResolver(requestDocSchema),
    defaultValues: {
      document: "",
      documentType: "",
    },
  });
  function onSubmit(values: z.infer<typeof requestDocSchema>) {
    console.log(values);
  }

  return (
    <div className=" ">
      <div className="text-center text-2xl font-semibold mb-10">
        Quote Candidate
      </div>
      <div className="max-w-5xl mx-auto w-full ">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="font-semibold mb-5">Candidate Details</div>
            <FormField
              control={form.control}
              name="document"
              render={({ field }) => (
                <FormItem className="grid grid-cols-2">
                  <div className="">
                    <FormLabel className="font-semibold">
                      Select Candidate
                    </FormLabel>
                    <FormDescription>Enter candidate name</FormDescription>
                  </div>
                  <FormControl>
                    <Select
                      onValueChange={(e) => field.onChange(e)}
                      value={field.value}
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select Document" />
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
              name="documentType"
              render={({ field }) => (
                <FormItem className="grid grid-cols-2">
                  <div className="">
                    <FormLabel className="font-semibold">
                      Write Message
                    </FormLabel>
                    <FormDescription>Enter message</FormDescription>
                  </div>
                  <FormControl>
                    <Select
                      onValueChange={(e) => field.onChange(e)}
                      value={field.value}
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select Document Type" />
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
            <div className="flex justify-end gap-5 mt-5">
              <Button>Cancel </Button>
              <Button className="bg-companyblue">Next </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};
