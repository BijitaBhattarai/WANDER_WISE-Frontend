import TripForm from "@/components/trips/TripForm";
import { useParams } from "react-router-dom";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import useApi from "@/hooks/useApi";
import ItinerariesForm from "@/components/itineraries/ItinerariesForm";

const EditItineraries = () => {
  const { tripId, itineraryId } = useParams();

  const { loading, data, error } = useApi(
    `/${tripId}/itineraries/${itineraryId}`,
  );

  if (loading) return <div>Loading...</div>;

  const formattedData = {
    ...data,
    date: date?.date.split("T")[0],
  };
  console.log(formattedData);

  return (
    <section>
      <Card className="w-3/5 mx-auto my-8">
        <CardHeader>
          <CardTitle className="text-blue-800 text-xl">
            Edit your Itinerary
          </CardTitle>
          <CardDescription>
            Update the information of your Itinerary.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ItinerariesForm type="edit" itineraryInfo={formattedData} />
        </CardContent>
      </Card>
    </section>
  );
};

export default EditItineraries;
