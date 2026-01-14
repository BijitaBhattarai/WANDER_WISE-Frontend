import TripForm from "@/components/trips/TripForm";
import React from "react";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const AddTripPage = () => {
  return (
    <section>
      <Card className=" w-3/5 mx-auto my-8">
        <CardHeader>
          <CardTitle className="text-green-800 text-xl">
            Add your trip
          </CardTitle>
          <CardDescription>Fill information of your trip.</CardDescription>
        </CardHeader>
        <CardContent>
          <TripForm />
        </CardContent>
      </Card>
    </section>
  );
};

export default AddTripPage;
