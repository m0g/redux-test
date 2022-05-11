import React from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import List from "./components/Bikes/List";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Show from "./components/Bikes/Show";
import Edit from "./components/Bikes/Edit";
import Create from "./components/Bikes/Create";

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
