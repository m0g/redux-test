import { Link } from "react-router-dom";
import { useGetBikesQuery } from "../../services/bike";
import DeleteButton from "./DeleteButton";

export default function List() {
  const { data, isLoading } = useGetBikesQuery();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <table>
      <tr>
        <th>id</th>
        <th>model</th>
        <th>make</th>
        <th>actions</th>
      </tr>
      {data.map(({ id, model, make }) => (
        <tr>
          <td>{id}</td>
          <td>
            <Link to={`/bikes/${id}`}>{model}</Link>
          </td>
          <td>{make}</td>
          <td>
            <Link to={`/bikes/${id}/edit`}>Edit</Link>
            <DeleteButton id={id} model={model} make={make} />
          </td>
        </tr>
      ))}
    </table>
  );
}
