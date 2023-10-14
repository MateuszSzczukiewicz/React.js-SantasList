import React from "react";
import "./App.css";
import { GiftsView } from "./views/GiftsView";
import { Routes, Route } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { NotFoundView } from "./views/NotFoundView";
import { SingleGiftView } from "./views/SingleGiftView";
import { ChildView } from "./views/ChildView";

export const App = () => (
  <>
    <Header />
    <div className="App">
      <Routes>
        <Route path="/gift" element={<GiftsView />}></Route>
        <Route path="/gift/:idOfGift" element={<SingleGiftView />}></Route>
        <Route path="/child" element={<ChildView />}></Route>
        <Route path="*" element={<NotFoundView />}></Route>
      </Routes>
    </div>
  </>
);
