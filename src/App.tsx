import React from "react";
import "./App.css";
import { GiftsView } from "./views/GiftsView";
import { Routes, Route } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { NotFoundView } from "./views/NotFoundView";

function App() {
  return (
    <>
      <Header />
      <div className="App">
        <Routes>
          <Route path="/gift" element={<GiftsView />}></Route>
          <Route path="*" element={<NotFoundView />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
