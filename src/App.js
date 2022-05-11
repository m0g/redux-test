import "./App.css";
import List from "./Routes/Bikes/List";
import { Routes, Route, Link } from "react-router-dom";
import Show from "./Routes/Bikes/Show";
import Edit from "./Routes/Bikes/Edit";
import Create from "./Routes/Bikes/Create";

function App() {
  return (
    <div className="App">
      <ul>
        <li>
          <Link to="/">Go home</Link>
        </li>
        <li>
          <Link to="/bikes/new">Create new bike</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<List />} />
        <Route path="/bikes/new" element={<Create />} />
        <Route path="/bikes/:id" element={<Show />} />
        <Route path="/bikes/:id/edit" element={<Edit />} />
      </Routes>
    </div>
  );
}

export default App;
