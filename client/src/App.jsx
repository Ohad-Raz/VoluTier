import { useState } from "react";
import "./App.css";
import Feed from "./pages/Feed/Feed";
import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar/Navbar";

import { BrowserRouter, Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Feed" element={<Feed />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
