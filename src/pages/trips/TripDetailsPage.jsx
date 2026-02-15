import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useApi from "@/hooks/useApi";
import TripNavigation from "@/components/trips/TripNavigation";
import AddExpense from "@/components/trips/AddExpense";
import InviteCollaborator from "@/components/trips/InviteCollaborator";
import Loading from "@/components/common/Loading";
import TripInfo from "@/components/trips/TripInfo.jsx";

const TripDetailsPage = () => {
  const { id } = useParams();
  const [dependency, setDependency] = useState(0);

  const {
    loading,
    data: trip,
    error,
  } = useApi(`/trips/${id}`, {}, [dependency]);
  console.log(trip);

  if (loading) return <Loading />;

  return (
    <section className="py-8 px-20 flex gap-4">
      {/* trip information */}
      <div className="w-2/3">
        <TripInfo trip={trip} />
      </div>

      <div className="w-1/3 space-y-4">
        <div className="space-y-4 sticky top-4">
          <TripNavigation trip={trip} />
          <AddExpense trip={trip} setDependency={setDependency} />
          <InviteCollaborator trip={trip} setDependency={setDependency} />
        </div>
      </div>
    </section>
  );
};

export default TripDetailsPage;
