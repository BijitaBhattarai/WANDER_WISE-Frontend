import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useFieldArray, useForm } from "react-hook-form";
import * as z from "zod";

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
import { Plus, Trash2 } from "lucide-react";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import api from "@/api/axios";

const activitySchema = z.object({
  name: z.string().min(3, "must be atleast 3 characters"),
  time: z.string().min(3, "must be atleast 3 characters"),

  notes: z
    .array(z.string().min(3, "must be atleast 3 characters"))
    .min(1, "Atleast one note is required"),
});
const itinerariesSchema = z.object({
  title: z.string().min(3, "must be at least 3 characters."),
  description: z.string().optional(),
  date: z.string(),
  activities: z
    .array(activitySchema)
    .min(1, "Atleast one activity is required"),
});

const ItinerariesForm = ({ type, itineraryInfo }) => {
  const form = useForm({
    resolver: zodResolver(itinerariesSchema),
    defaultValues:
      type === "edit"
        ? itineraryInfo
        : {
            title: "",
            description: "",
            date: new Date().toISOString().split("T")[0],
            activities: [
              {
                name: "",
                time: "",
                notes: [""],
              },
            ],
          },
  });

  const {
    fields: activityFields,
    append: appendActivity,
    remove: removeActivity,
  } = useFieldArray({
    control: form.control,
    name: "activities.notes",
  });

  const {
    fields: notesFields,
    append: appendNote,
    remove: removeNote,
  } = useFieldArray({
    control: form.control,
    name: "activities",
  });

  function onSubmit(data) {
    // Do something with the form values.
    console.log(data);
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <Card>
          <CardHeader>
            <CardTitle>Itinerary Details</CardTitle>
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
              name="date"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Date</FormLabel>
                  <FormControl>
                    <Input type="date" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
        </Card>

        <div className="flex items-center justify-between ">
          <h3>Activities</h3>
          <Button
            type="button"
            variant="outline"
            onClick={() => {
              appendActivity({
                name: "",
                time: "",
                notes: [""],
              });
            }}
          >
            <Plus /> Add Activity
          </Button>
        </div>

        {activityFields.map((activity, index) => {
          return (
            <Card key={activity.id}>
              <CardHeader>
                <CardTitle>Activity{index + 1}</CardTitle>
                <CardAction>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => {
                      appendNote("");
                    }}
                  >
                    <Plus /> Add Note
                  </Button>
                </CardAction>
              </CardHeader>
              <CardContent>
                <FormField
                  control={form.control}
                  name={`activities.${index}.name`}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Activity name</FormLabel>
                      <FormControl>
                        <Input type="string" placeholder="" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name={`activities.${index}.time`}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Activity Time</FormLabel>
                      <FormControl>
                        <Input type="string" placeholder="At noon" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {notesFields.map((note, noteIndex) => {
                  return (
                    <div key={note.id} className="flex w-full gap-2 items-end">
                      <FormField
                        control={form.control}
                        name={`activities.${index}.notes.${noteIndex}`}
                        render={({ field }) => (
                          <FormItem className="w-full">
                            <FormControl>
                              <Input
                                placeholder="Don't forget to carry passport"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <Button
                        type="button"
                        size="icon"
                        variant="outline"
                        onClick={() => {
                          removeNote(noteIndex);
                        }}
                      >
                        <Trash2 className="text-red-600" />
                      </Button>
                    </div>
                  );
                })}
              </CardContent>
            </Card>
          );
        })}
      </form>
    </Form>
  );
};

export default ItinerariesForm;
