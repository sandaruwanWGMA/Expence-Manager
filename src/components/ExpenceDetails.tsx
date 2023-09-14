import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

interface expense {
  id: number;
  description: string;
  amount: number;
  category: string;
}

interface Props {
  expenses: expense[];
  setExpenses: (exList: expense[]) => void;
}

function ExpenceDetails({ expenses, setExpenses }: Props) {
  const schema = z.object({
    description: z
      .string()
      .min(3, { message: "Description should have at least 3 characters" }),
    amount: z
      .number({ invalid_type_error: "Amount is required" })
      .min(1, { message: "Amount should be more than 1" }),
    categories: z.enum(["Gloceries", "Utilities", "Entertainment"], {
      errorMap: () => ({ message: "Category is required." }),
    }),
  });

  type formData = z.infer<typeof schema>;

  const { register, handleSubmit, formState, reset } = useForm<formData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: formData) => {
    reset();
    setExpenses([
      ...expenses,
      {
        id: expenses.length,
        description: data.description,
        amount: data.amount,
        category: data.categories,
      },
    ]);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Description
        </label>
        <input
          {...register("description")}
          id="description"
          className="form-control"
        ></input>
        {formState.errors.description && (
          <p className="text-danger">{formState.errors.description.message}</p>
        )}
      </div>

      <div className="mb-3">
        <label htmlFor="amount" className="form-label">
          Amount
        </label>
        <input
          {...register("amount", { valueAsNumber: true })}
          id="amount"
          type="number"
          className="form-control"
        ></input>
        {formState.errors.amount && (
          <p className="text-danger">{formState.errors.amount.message}</p>
        )}
      </div>

      <div className="mb-3">
        <label className="form-label l-c" htmlFor="categories">
          Categories
        </label>
        <select
          className="form-control custom-select s-c"
          id="categories"
          defaultValue={"DV"}
          {...register("categories")}
        >
          <option value="DV"></option>
          <option value="Gloceries">Gloceries</option>
          <option value="Utilities">Utilities</option>
          <option value="Entertainment">Entertainment</option>
        </select>
        {formState.errors.categories && (
          <p className="text-danger">{formState.errors.categories.message}</p>
        )}
      </div>
      <button className="btn btn-primary" type="submit">
        submit
      </button>
    </form>
  );
}

export default ExpenceDetails;
