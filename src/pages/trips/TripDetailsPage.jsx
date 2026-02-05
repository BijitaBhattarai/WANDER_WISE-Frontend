import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useApi from "@/hooks/useApi";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CalendarDays } from "lucide-react";
import { Button } from "@/components/ui/button";
import TripNavigation from "@/components/trips/TripNavigation";
import AddExpense from "@/components/trips/AddExpense";
import InviteCollaborator from "@/components/trips/InviteCollaborator";
import Loading from "@/components/common/Loading";

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
  if (error) return <div>Error loading trip</div>;

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "short", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const remainingBudget = trip.budget.total - trip.budget.spent;

  return (
    <section className="px-20 py-8 ">
      <div className="flex gap-6">
        <div className="w-2/3 ">
          <Card className="w-full ">
            <CardHeader>
              <CardTitle className="text-2xl">{trip.title}</CardTitle>
              <CardDescription className="flex items-center justify-between">
                <span className="text-gray-900 font-semibold">
                  {formatDate(trip.startDate)} - {formatDate(trip.endDate)}
                </span>

                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <CalendarDays className=" text-green-600" />
                    </Button>
                  </PopoverTrigger>

                  <PopoverContent className="w-auto p-0" align="end">
                    <Calendar
                      mode="range"
                      defaultMonth={new Date(trip.startDate)}
                      selected={{
                        from: new Date(trip.startDate),
                        to: new Date(trip.endDate),
                      }}
                      className="rounded-md border"
                    />
                  </PopoverContent>
                </Popover>
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-6">
              {/* Description */}
              {trip.description && (
                <div>
                  <h3 className="font-semibold">Description</h3>
                  <p>{trip.description}</p>
                </div>
              )}

              {/* Destinations */}
              <div>
                <span className="mt-2 font-semibold">Destinations</span>
                <div>
                  {trip.destinations.map((destination, index) => {
                    return <span key={index}> {destination}, &nbsp;</span>;
                  })}
                </div>
              </div>
              {/* Budget */}
              <div>
                <h3 className="font-semibold">Budget</h3>
                <div className="flex justify-between">
                  <span>Total:</span>
                  <span>Rs. {trip.budget.total}</span>
                </div>
                <div className="flex justify-between">
                  <span>Spent:</span>
                  <span>Rs. {trip.budget.spent}</span>
                </div>
                <div className="flex justify-between font-bold text-green-600">
                  <span>Remaining:</span>
                  <span>Rs. {remainingBudget}</span>
                </div>
              </div>

              {/* Expenses */}
              <div>
                <h3 className="font-semibold">Expenses</h3>
                {trip.budget.expenses.length === 0 ? (
                  <p>No expenses added</p>
                ) : (
                  <ul className="space-y-2">
                    {trip.budget.expenses.map((expense, index) => (
                      <li
                        key={index}
                        className="flex justify-between border-b pb-1"
                      >
                        <span>{expense.name}</span>
                        <span>Rs. {expense.amount}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              {/* collaborators */}
              <div>
                <h3 className="font-semibold">Collaborators</h3>
                {trip.collaborators?.length === 0 ? (
                  <p>No collaborators added yet</p>
                ) : (
                  <ul className="space-y-1">
                    {trip.collaborators.map((user) => (
                      <li key={user._id} className="flex items-center gap-2">
                        <span className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-sm">
                          {user.name?.[0] || "U"}
                        </span>
                        <span>{user.name}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="w-1/3 flex flex-col gap-4">
          <TripNavigation trip={trip} />
          <AddExpense trip={trip} setDependency={setDependency} />
          <InviteCollaborator trip={trip} setDependency={setDependency} />
        </div>
      </div>
    </section>
  );
};

export default TripDetailsPage;
