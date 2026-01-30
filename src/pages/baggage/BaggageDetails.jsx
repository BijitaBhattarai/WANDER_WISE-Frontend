import api from "@/api/axios";
import BaggageDialog from "@/components/baggage/BaggageDialog";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import useApi from "@/hooks/useApi";
import { Edit, Edit2, Plus, Trash2 } from "lucide-react";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "sonner";

const BaggageDetails = () => {
  const [type, setType] = useState("add");
  const [selectedBaggage, setSelectedBaggage] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [dependency, setDependency] = useState(0);

  const { id } = useParams();
  const { data, error, loading } = useApi(`/${id}/baggages`, {}, [dependency]);
  const onCheckedChange = async (baggage) => {
    const data = {
      ...baggage,
      completed: !baggage.completed,
    };
    try {
      const response = await api.patch(`/${id}/baggages/${baggage._id}`, data);
      console.log(response);
      if (response.data?._id) {
        toast.success("Baggage Packed!");
        setDependency((prev) => prev + 1);
      } else {
        toast.error("Some error occured.");
      }
    } catch (error) {
      console.log(error);
      toast.error("Some error occured.");
    }
  };

  const onEdit = async (baggage) => {
    setType("edit");
    setSelectedBaggage(baggage);
    setIsOpen(true);
  };
  const onDelete = async (baggage) => {
    try {
      const response = await api.delete(`/${id}/baggages/${baggage._id}`);
      console.log(response);
      if (response.status == 200) {
        toast.success("Baggage Deleted!");
        setDependency((prev) => prev + 1);
      } else {
        toast.error("Some error occured.");
      }
    } catch (error) {
      console.log(error);
      toast.error("Some error occured.");
    }
  };
  if (loading) return <div>loading</div>;
  return (
    <section className="py-8 px-20">
      {/* heading */}
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Your Baggages</h1>

        <BaggageDialog
          type={type}
          selectedBaggage={selectedBaggage}
          tripId={id}
          setDependency={setDependency}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
      </div>

      {/* trips content */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        {data.length === 0 ? (
          <div>No baggages found. Please add a baggage.</div>
        ) : (
          data.map((baggage) => {
            return (
              <Card className="hover:shadow-md duration-300" key={baggage._id}>
                <CardContent className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Checkbox
                      onCheckedChange={() => onCheckedChange(baggage)}
                      checked={baggage.completed}
                      className={"h-6 w-6 shadow-md"}
                    />
                    <span className="text-lg font-semibold">
                      {baggage.name}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => onEdit(baggage)}
                      className=" text-red-600 hover:bg-red-600 hover:text-white"
                    >
                      <Edit2 className="text-blue-600" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => onDelete(baggage)}
                      className=" text-red-600 hover:bg-red-600 hover:text-white"
                    >
                      <Trash2 />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })
        )}
      </div>
    </section>
  );
};

export default BaggageDetails;
