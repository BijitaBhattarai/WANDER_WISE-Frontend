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
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { MailPlus, PlusIcon, Trash2 } from "lucide-react";
import api from "@/api/axios";

const formSchema = z.object({
  collaboratorEmails: z
    .array(
      z.email({
        message: "Invalid email address.",
      }),
    )
    .min(1, {
      message: "Atleast one email is required.",
    }),
});

export default function InviteCollaborator({ trip, setDependency }) {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      collaboratorEmails: [""],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "collaboratorEmails",
  });

  const onSubmit = async (data) => {
    try {
      const response = await api.post(`/trips/${trip._id}/invite`, data);
      if (response.status === 200) {
        toast.success("Invitations sent successfully");
        form.reset();
      } else {
        toast.error("Failed to send invitations. please try again.");
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to send invitations. please try again.");
    }
    console.log(data);
  };
  return (
    <section>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <Card>
            <CardHeader className="flex flex-col ">
              <CardTitle>
                <span>Invite Collaborator</span>
              </CardTitle>
              <CardDescription>
                Enter email of your collaborator
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-3">
              {fields.map((field, index) => {
                return (
                  <div key={field.id} className="flex items-center gap-2">
                    <FormField
                      control={form.control}
                      name={`collaboratorEmails.${index}`}
                      render={({ field }) => (
                        <FormItem className="w-full">
                          <FormControl>
                            <Input
                              className="bg-gray-100"
                              placeholder=""
                              {...field}
                              type={"email"}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button
                      type="button"
                      variant="outline"
                      size="icon"
                      onClick={() => {
                        remove(index);
                      }}
                    >
                      <Trash2 className="text-red-500" />
                    </Button>
                  </div>
                );
              })}
            </CardContent>
            <CardFooter className="grid grid-cols-2 gap-4">
              <Button
                className="w-full bg-yellow-600 hover:bg-yellow-500"
                type="button"
                onClick={() => {
                  append("");
                }}
              >
                <PlusIcon />
                Add Email
              </Button>
              <Button
                className="w-full bg-green-700 hover:bg-green-600"
                type="submit"
              >
                <MailPlus />
                Invite
              </Button>
            </CardFooter>
          </Card>
        </form>
      </Form>
    </section>
  );
}
