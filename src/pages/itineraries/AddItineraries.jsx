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
import ItinerariesForm from "@/components/itineraries/ItinerariesForm";
import { useSearchParams } from "react-router-dom";

const AddItineraries = () => {
  const [searchParams] = useSearchParams();
  const thisDate = searchParams.get("date");
  return (
    <section>
      <Card className=" w-3/5 mx-auto my-8">
        <CardHeader>
          <CardTitle className="text-green-800 text-xl">
            Add your Itineraries
          </CardTitle>
          <CardDescription>
            Fill information of your Itineraries.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ItinerariesForm type="add" thisDate={thisDate} />
        </CardContent>
      </Card>
    </section>
  );
};

export default AddItineraries;
