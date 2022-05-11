import { Link, useParams } from "react-router-dom";
import { useGetBikeByIdQuery } from "../../services/bike";

export default function Show() {
  const { id } = useParams();
  const { data, isLoading } = useGetBikeByIdQuery(id);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>{data.model}</h1>
      <h2>{data.make}</h2>
    </div>
  );
}
