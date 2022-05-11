import { useGetBikeByIdQuery, usePatchBikeMutation } from "../../services/bike";
import { useNavigate, useParams } from "react-router-dom";
import Form from "../../components/Bikes/Form";

export default function Edit() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { data, isLoading } = useGetBikeByIdQuery(id);
  const [editBike] = usePatchBikeMutation();

  const onSubmit = async (data) => {
    await editBike(data);
    navigate("/");
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>Edit {data.model}</h1>
      <Form onSubmit={onSubmit} defaultValues={data} />
    </div>
  );
}
