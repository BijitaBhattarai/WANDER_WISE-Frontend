import { Button } from "@/components/ui/button";
import { MoreVertical, Plus } from "lucide-react";
import React, { useEffect, useState } from "react";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import api from "@/api/axios";

const TripsPage = () => {
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    const fetchTrips = async () => {
      try {
        const res = await api.get("/trips");
        setTrips(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchTrips();
  }, []);
  const formatDate = (dateString) => {
    return new Date(dateString).toISOString().split("T")[0];
  };

  return (
    <section className="py-6 px-20">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Your Trips</h1>
        <a href="/trips/add">
          <Button>
            <Plus />
            Add Trip
          </Button>
        </a>
      </div>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ">
        {trips.map((trip) => (
          <Card key={trip._id} className="flex flex-col h-full">
            <CardHeader>
              <CardTitle>{trip.title}</CardTitle>
              <CardDescription>
                {formatDate(trip.startDate)}-{formatDate(trip.endDate)}
              </CardDescription>
              <CardAction>
                <Button variant="outline" size="icon">
                  <MoreVertical />
                </Button>
              </CardAction>
            </CardHeader>
            <CardContent className="flex- grow">
              <div className="flex items-center justify-between">
                <span>Budget:</span>
                <span className="text-xl font-bold text-primary">
                  Rs.{trip.budget.total}
                </span>
              </div>
              <div className="mt-2">
                <span className="font-bold mt-2">Destinations:</span>{" "}
                {trip.destinations.join(", ")}
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Trip Details</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default TripsPage;
