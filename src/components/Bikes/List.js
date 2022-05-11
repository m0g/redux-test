import React from "react";
import { Link } from "react-router-dom";
import { useGetBikesQuery } from "../../services/bike";

export default function List() {
  const { data, error, isLoading } = useGetBikesQuery();

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
          <td>{model}</td>
          <td>{make}</td>
          <td>
            <Link to={`/bikes/${id}/edit`}>Edit</Link>
            <button>Delete</button>
          </td>
        </tr>
      ))}
    </table>
  );
}
