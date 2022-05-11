import { usePostBikeMutation } from "../../services/bike";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export default function Create() {
  const navigate = useNavigate();
  const [createBike, { isLoading }] = usePostBikeMutation();
  const { register, handleSubmit, watch, formState } = useForm();

  const onSubmit = async (data) => {
    await createBike(data);
    navigate("/");
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

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
