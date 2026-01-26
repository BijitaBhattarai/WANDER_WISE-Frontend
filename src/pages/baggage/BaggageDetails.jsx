import BaggageDialog from "@/components/baggage/BaggageDialog";
import { Button } from "@/components/ui/button";
import useApi from "@/hooks/useApi";
import { Plus } from "lucide-react";
import React, { useState } from "react";
import { useParams } from "react-router-dom";

const BaggageDetails = () => {
  const [type, setType] = useState("add");
  const [selectedBaggage, setSelectedBaggage] = useState(null);
  const { id } = useParams();
  const { loading, error, data } = useApi(`/${id}/baggages`);

  if (loading) return <div>Loading...</div>;

  return (
    <section className="py-6 px-20">
      {/* heading */}
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Your Baggages</h1>
        <BaggageDialog
          type={type}
          selectedBaggage={selectedBaggage}
          tripId={id}
        />
      </div>

      {/* trips content */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ">
        {data.length === 0 ? (
          <div>No baggages found. Please add a baggage.</div>
        ) : (
          data.map((baggage) => {
            return (
              <div key={baggage._id}>
                <h2>{baggage.name}</h2>
              </div>
            );
          })
        )}
      </div>
    </section>
  );
};

export default BaggageDetails;
