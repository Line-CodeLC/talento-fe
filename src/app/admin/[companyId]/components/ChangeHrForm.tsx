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

import { FC, useState } from "react";

import { changeHrSchema } from "../../schema/changeHrSchema";

interface ChangeNameHrProps {}
export const ChangeHrForm: FC<ChangeNameHrProps> = () => {
  const form = useForm<z.infer<typeof changeHrSchema>>({
    resolver: zodResolver(changeHrSchema),
    defaultValues: {
      name: "",
    },
  });
  function onSubmit(values: z.infer<typeof changeHrSchema>) {
    console.log(values);
  }

  return (
    <>
      <div className=" ">
        <div className="max-w-5xl mx-auto w-full ">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem className="grid grid-cols-2">
                    <div className="">
                      <FormLabel>HR Name</FormLabel>
                      <FormDescription>
                        Select HR Name for the company
                      </FormDescription>
                    </div>
                    <FormControl>
                      <Select
                        onValueChange={(e) => field.onChange(e)}
                        value={field.value}
                      >
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
              <div className="flex justify-end gap-5 mt-5">
                <Button className="bg-companyblue">Allocate </Button>
                <Button>Cancel </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </>
  );
};
