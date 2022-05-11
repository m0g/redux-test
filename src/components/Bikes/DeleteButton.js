import { useNavigate } from "react-router-dom";
import { useDeleteBikeMutation } from "../../services/bike";

export default function DeleteButton({ id, model, make }) {
  const [deleteBike] = useDeleteBikeMutation(id);
  const navigate = useNavigate();

  const handleClick = async () => {
    if (window.confirm(`Are you sure you want to delete ${model} ${make}?`)) {
      await deleteBike(id);
      navigate("/");
    }
  };

  return <button onClick={handleClick}>Delete</button>;
}
