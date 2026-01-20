import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";

const TripNavigation = ({ trip }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Trip Navigation</CardTitle>
        <CardDescription>Manage trip related options.</CardDescription>
      </CardHeader>
      <CardContent>
        <a href={`/itineraries/${trip._id}`}>
          <Button variant="outline" className="w-full mb-4">
            Manage Itineraries
          </Button>
        </a>
        <a href={`/baggage/${trip._id}`}>
          <Button variant="outline" className="w-full">
            Manage Baggage
          </Button>
        </a>
      </CardContent>
    </Card>
  );
};

export default TripNavigation;
