import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import ExpenceDetails from "./components/ExpenceDetails";
import EXPENSES from "../ExpensesList";
import { useState } from "react";
import ExpenceList from "./components/ExpenceList";
import ExpenseFilter from "./components/ExpenseFilter";

interface expense {
  id: number;
  description: string;
  amount: number;
  category: string;
}

function App() {
  const [expenses, setExpenses] = useState(EXPENSES);
  const [ex, setEx] = useState(EXPENSES);
  const onDelete = (expense_: expense) => {
    setExpenses(
      expenses.filter((expense: expense) => expense.id !== expense_.id)
    );
    setEx(ex.filter((expense: expense) => expense.id !== expense_.id));
  };

  const handleSetExpenses = (ex: expense[]) => {
    setExpenses(ex);
  };

  const onSelectCategory = (selectedCategory: String) => {
    if (selectedCategory == "") {
      setEx(expenses);
    } else {
      let visibleExpenses = expenses;

      setEx(visibleExpenses.filter((e) => e.category === selectedCategory));
      console.log(expenses);
    }
  };

  return (
    <>
      <ExpenceDetails
        expenses={expenses}
        setExpenses={handleSetExpenses}
        onSelectCategory={onSelectCategory}
      ></ExpenceDetails>

      <div className="space-box"></div>

      <ExpenseFilter onSelectCategory={onSelectCategory}></ExpenseFilter>
      <ExpenceList expenses={ex} onDelete={onDelete}></ExpenceList>
    </>
  );
}

export default App;
