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
import { Input } from "@/components/ui/input";

const BudgetSchema = z.object({
  total: z.number(),
  spent: z.number().default(0),
});

const TripSchema = z
  .object({
    username: z.string().min(2, {
      message: "title must be at least 2 characters.",
    }),
    description: z.string().optional(),
    startDate: z.date(),
    endDate: z.date(),
    destinations: z
      .array(z.string().min(2, { message: "Must be at least two characters" }))
      .min(1, { message: " Destination must be selected" }),
    budget: BudgetSchema,
  })
  .refine((data) => data.startDate < data.endDate, {
    message: "End date must be after start date",
    path: ["endDate"],
  });

export default function TripForm(tripInfo) {
  const form = useForm({
    resolver: zodResolver(TripSchema),
    mode: "onChange", // validate while typing
    reValidateMode: "onChange",
    defaultValues: tripInfo || {
      title: "",
      description: "",
      startDate: new Date(),
      endDate: new Date(),
      destinations: [],
      budget: {
        total: 0,
        spent: 0,
      },
    },
  });
  const onAdd = (data) => {
    console.log(data);
  };
  const onEdit = (data) => {
    console.log(data);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(tripInfo ? onEdit : onAdd)}
        className="space-y-8"
      >
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input type="string" placeholder="shadcn" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">{tripInfo ? "Edit trip" : "Add trip"}</Button>
      </form>
    </Form>
  );
}
