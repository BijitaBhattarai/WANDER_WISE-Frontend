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

const EditTripPage = () => {
  const { id } = useParams();
  const { loading, data, error } = useApi(`/trips/${id}`);
  if (loading) return <div>Loading...</div>;

  const formattedData = {
    ...data,
    startDate: data?.startDate.split("T")[0],
    endDate: data?.endDate.split("T")[0],
  };
  console.log(formattedData);

  return (
    <section>
      <Card className="w-3/5 mx-auto my-8">
        <CardHeader>
          <CardTitle className="text-blue-800 text-xl">
            Edit your trip
          </CardTitle>
          <CardDescription>
            Update the information of your trip.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <TripForm tripInfo={formattedData} />
        </CardContent>
      </Card>
    </section>
  );
};

export default EditTripPage;
