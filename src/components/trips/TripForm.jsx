"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useFieldArray, useForm } from "react-hook-form";
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
import { Plus } from "lucide-react";

const BudgetSchema = z.object({
  total: z.coerce.number().min(0, "Budget must be positive"),
  spent: z.coerce.number().default(0),
});

const TripSchema = z
  .object({
    username: z.string().min(2, {
      message: "title must be at least 2 characters.",
    }),
    description: z.string().optional(),
    startDate: z.coerce.date(),
    endDate: z.coerce.date(),
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

  const {
    fields: destinationFields,
    append: addDestination,
    remove: removeDestination,
  } = useFieldArray({
    control: form.control,
    name: "destinations",
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
        <Card>
          <CardHeader>
            <CardTitle>Trip Details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input type="string" placeholder="" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Input type="string" placeholder="" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="startDate"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Start Date</FormLabel>
                  <FormControl>
                    <Input type="date" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="endDate"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>End Date</FormLabel>
                  <FormControl>
                    <Input type="date" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* <FormField
              control={form.control}
              name="destinations"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Destinations</FormLabel>
                  <FormControl>
                    <Input type="string" placeholder="" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            /> */}
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Trip Destination</CardTitle>
            <CardDescription>
              Enter the places you want to visit
            </CardDescription>
            <CardAction>
              <Button
                type="button"
                variant="outline"
                onClick={() => {
                  addDestination("");
                }}
              >
                <Plus />
                Add
              </Button>
            </CardAction>
          </CardHeader>
          <CardContent className="space-y-4">
            {destinationFields.map((field, index) => {
              return (
                <div>
                  <FormField
                    control={form.control}
                    name={`destinations.${index}`}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Destination {index + 1}</FormLabel>
                        <FormControl>
                          <Input placeholder="Eiffel Tower" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              );
            })}
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Trip Budget</CardTitle>
            <CardDescription>Enter the budget</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <FormField
              control={form.control}
              name="budget.total"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Total budget</FormLabel>
                  <FormControl>
                    <Input type="number" placeholder="" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
        </Card>
        <Button type="submit">{tripInfo ? "Edit trip" : "Add trip"}</Button>
      </form>
    </Form>
  );
}
