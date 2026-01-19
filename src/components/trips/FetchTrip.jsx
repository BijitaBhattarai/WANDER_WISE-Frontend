import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "@/api/axios";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export default function TripsPage() {
  const [trips, setTrips] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTrips = async () => {
      const res = await api.get("/trips");
      setTrips(res.data);
    };
    fetchTrips();
  }, []);

  const deleteTrip = async (tripId) => {
    try {
      const confirmed = window.confirm(
        "Are you sure you want to delete this trip?",
      );
      if (!confirmed) return;

      await api.delete(`/trips/${tripId}`);
      toast.success("Trip deleted successfully");

      setTrips((prev) => prev.filter((trip) => trip._id !== tripId));
    } catch (error) {
      console.log(error);
      toast.error("Failed to delete trip!");
    }
  };

  return (
    <div className="grid grid-cols-3 mt-6 gap-6">
      {trips.map((trip) => (
        <div key={trip._id}>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-bold">{trip.title}</CardTitle>
              <CardDescription>
                {trip.description || "No description"}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <p>
                <strong>Start Date:</strong> {trip.startDate?.slice(0, 10)}
              </p>
              <p>
                <strong>End Date:</strong> {trip.endDate?.slice(0, 10)}
              </p>
              <p>
                <strong>Destinations:</strong> {trip.destinations?.join(", ")}
              </p>
              <p>
                <strong>Budget:</strong> Total: ${trip.budget?.total || 0} |
                Spent: ${trip.budget?.spent || 0}
              </p>
            </CardContent>
            <CardFooter className="flex gap-2">
              <Button onClick={() => navigate(`/trips/edit/${trip._id}`)}>
                Edit
              </Button>
              <Button
                onClick={() => deleteTrip(trip._id)}
                variant="destructive"
              >
                Delete
              </Button>
            </CardFooter>
          </Card>
        </div>
      ))}
    </div>
  );
}
