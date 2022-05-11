import { usePostBikeMutation } from "../../services/bike";
import { useNavigate } from "react-router-dom";
import Form from "../../components/Bikes/Form";

export default function Create() {
  const navigate = useNavigate();
  const [createBike] = usePostBikeMutation();

  const onSubmit = async (data) => {
    await createBike(data);
    navigate("/");
  };

  return (
    <div>
      <h1>Create a new bike</h1>
      <Form onSubmit={onSubmit} />
    </div>
  );
}
