import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import ExpenceDetails from "./components/ExpenceDetails";
import EXPENSES from "../ExpensesList";
import { useState } from "react";
import ExpenceList from "./components/ExpenceList";

function App() {
  interface expense {
    id: number;
    description: string;
    amount: number;
    category: string;
  }

  const [expenses, setExpenses] = useState(EXPENSES);
  const onDelete = (id: number) => {
    setExpenses(expenses.filter((expense: expense) => expense.id !== id));
  };

  const handleSetExpenses = (ex: expense[]) => {
    console.log("done");
    setExpenses(ex);
    console.log(expenses);
  };

  return (
    <>
      <ExpenceDetails
        expenses={expenses}
        setExpenses={handleSetExpenses}
      ></ExpenceDetails>
      <ExpenceList expenses={expenses} onDelete={onDelete}></ExpenceList>
    </>
  );
}

export default App;
