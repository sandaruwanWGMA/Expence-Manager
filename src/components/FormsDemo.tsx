import "../styles/ExpenceDetails.css";
import { FieldValues, useForm } from "react-hook-form";

function FormsDemo() {
  interface formData {
    name: String;
    age: number;
  }

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<formData>();

  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          {...register("name", { required: true, minLength: 3 })}
          id="name"
          type="text"
          placeholder=""
          className="form-control"
        ></input>
        {errors.name?.type === "required" && (
          <p className="text-danger">Username is required</p>
        )}
        {errors.name?.type === "minLength" && (
          <p className="text-danger">Username requires at least 3 characters</p>
        )}
      </div>

      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input
          {...register("age", { required: true })}
          id="age"
          type="number"
          placeholder=""
          className="form-control"
        ></input>
        {errors.age?.type === "required" && (
          <p className="text-danger">Age is required</p>
        )}
      </div>

      <button disabled={!isValid} type="submit" className="btn btn-primary">
        submit
      </button>
    </form>
  );
}

export default FormsDemo;
