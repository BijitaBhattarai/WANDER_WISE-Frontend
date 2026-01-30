import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import useApi from "@/hooks/useApi";
import { formatDate } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import React from "react";

const ItinerariesPage = () => {
  const { loading, error, data } = useApi("/trips");
  if (loading) return <div>Loading...</div>;

  return (
    <section className="py-6 px-20">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Select trip to show Itineraries</h1>
      </div>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
        {data.length === 0 ? (
          <div>No trips found. Please add a trip.</div>
        ) : (
          data.map((trip) => {
            return (
              <Card key={trip._id}>
                <CardHeader>
                  <CardTitle>{trip.title}</CardTitle>
                  <CardDescription>
                    {formatDate(trip.startDate)}- {formatDate(trip.endDate)}
                  </CardDescription>
                  <CardAction>
                    <a href={`/itineraries/${trip._id}`}>
                      <Button>
                        Itineraries
                        <ArrowUpRight />
                      </Button>
                    </a>
                  </CardAction>
                </CardHeader>
              </Card>
            );
          })
        )}
      </div>
    </section>
  );
};

export default ItinerariesPage;
