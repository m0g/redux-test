import { useForm } from "react-hook-form";

export default function Form({ onSubmit, defaultValues }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues,
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <p>
        <input placeholder="Model" {...register("model", { required: true })} />
        {errors.model && <span>Field required</span>}
      </p>
      <p>
        <input placeholder="Make" {...register("make", { required: true })} />
        {errors.make && <span>Field required</span>}
      </p>

      <input type="submit" />
    </form>
  );
}
