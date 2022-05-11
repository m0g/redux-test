import { usePostBikeMutation } from "../../services/bike";
import { useNavigate } from "react-router-dom";
import Form from "./Form";

export default function Create() {
  const navigate = useNavigate();
  const [createBike, { isLoading }] = usePostBikeMutation();

  const onSubmit = async (data) => {
    await createBike(data);
    navigate("/");
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>Create a new bike</h1>
      <Form onSubmit={onSubmit} />
    </div>
  );
}
