import { useForm } from "react-hook-form";

export default function Form({ onSubmit, defaultValues }) {
  const { register, handleSubmit, watch, formState } = useForm({
    defaultValues,
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <p>
        <input placeholder="Model" {...register("model")} />
      </p>
      <p>
        <input placeholder="Make" {...register("make")} />
      </p>

      <input type="submit" />
    </form>
  );
}
