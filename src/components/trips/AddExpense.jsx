import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { toast } from "sonner";
import api from "@/api/axios";

const AddExpense = ({ trip, setDependency }) => {
  const onSubmit = async () => {
    try {
      const expenseName = document.getElementById("expense-name");
      const expenseAmount = document.getElementById("expense-amount");
      if (expenseName.value == "" || expenseAmount.value == "") {
        toast.error("Please fill all the fields.");
        return;
      }
      const expenseData = {
        name: expenseName.value,
        amount: Number(expenseAmount.value),
      };
      const response = await api.post(
        `/trips/expenses/${trip._id}`,
        expenseData,
      );
      console.log(response);
      if (response.status === 200) {
        toast.success(response.data?.message);
        setDependency((prev) => prev + 1);
        expenseName.value = " ";
        expenseAmount.value = " ";
      } else {
        toast.error("Failed to add expense. Please try again");
      }
    } catch (error) {
      console.log(error);
      toast.error("Failed to add expense. Please try again");
    }
  };
  return (
    <Card>
      <CardHeader>
        <CardTitle>Add Expense</CardTitle>
        <CardDescription>Add your expense amount.</CardDescription>
      </CardHeader>
      <CardContent>
        <Input
          id="expense-name"
          type="text"
          placeholder="Train Ticket"
          className="mb-4"
        />
        <Input
          id="expense-amount"
          type="number"
          placeholder="100"
          className="mb-4"
        />

        <Button onClick={onSubmit} className="w-full">
          Add Expense
        </Button>
      </CardContent>
    </Card>
  );
};

export default AddExpense;
