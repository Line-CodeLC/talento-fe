"use client";
import React from "react";
import { Calendar } from "@/components/ui/calendar";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

import { TimesheetSchema } from "@/app/admin/schema/TimesheetSchema";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";

function TimesheetForm() {
  const form = useForm<z.infer<typeof TimesheetSchema>>({
    defaultValues: {
      Date: new Date(),
      workingHours: 0,
    },
    resolver: zodResolver(TimesheetSchema),
  });

  const onSubmit = (data: z.infer<typeof TimesheetSchema>) => {
    console.log(data);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className=" flex flex-col gap-4 bg-white p-3 mt-5"
      >
        <div className="text-2xl font-semibold"> Fill Time Sheet</div>
        <FormField
          control={form.control}
          name="Date"
          render={({ field }) => (
            <FormItem className="flex flex-col col-span-8 gap-2">
              <FormLabel>When did the operations start?</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant={"outline"}
                    className={cn(
                      "justify-start text-left font-normal",
                      !field.value && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="w-4 h-4 mr-2" />
                    {field.value ? (
                      format(field.value, "PPP")
                    ) : (
                      <span>Pick a date</span>
                    )}
                  </Button>
                </PopoverTrigger>
                <PopoverContent
                  align="start"
                  className="w-auto p-0 bg-white border rounded-md border-slate-200"
                >
                  <Calendar
                    mode="single"
                    captionLayout="dropdown-buttons"
                    selected={field.value}
                    onSelect={field.onChange}
                    fromYear={1900}
                    toYear={new Date().getFullYear()}
                    disabled={(date) =>
                      date > new Date() || date < new Date("1900-01-01")
                    }
                  />
                </PopoverContent>
              </Popover>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="workingHours"
          render={({ field }) => (
            <FormItem className="flex flex-col col-span-8 gap-2">
              <FormLabel>How many hours did you work?</FormLabel>
              <Input
                type="number"
                placeholder="Enter hours"
                className="w-full"
                {...field}
              />
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="w-full flex justify-end items-end gap-5 mt-5">
          <Button type="submit" className="bg-[#3B82F6] text-white">
            Submit
          </Button>
        </div>
      </form>
    </Form>
  );
}

export default TimesheetForm;
