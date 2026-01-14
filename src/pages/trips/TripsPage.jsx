import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";

const TripsPage = () => {
  const navigate = useNavigate();

  const handleAddTrip = () => {
    navigate("/trips/add"); // navigate to add trip page
  };

  return (
    <section className="py-6 px-20">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Your Trips</h1>
        <Button onClick={handleAddTrip}>
          <Plus />
          Add Trip
        </Button>
      </div>
    </section>
  );
};

export default TripsPage;
