import React from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import List from "./components/Bikes/List";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Show from "./components/Bikes/Show";
import Edit from "./components/Bikes/Edit";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<List />} />
        <Route path="/bikes/:id" element={<Show />} />
        <Route path="/bikes/:id/edit" element={<Edit />} />
      </Routes>
    </div>
  );
}

export default App;
