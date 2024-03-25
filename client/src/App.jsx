import { useState } from "react";
import "./App.css";
import Feed from "./pages/Feed/Feed";
import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar/Navbar";


import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AuthPage from './pages/Auth/authPage';
import UserManager from './context/UserContext';

function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Feed" element={<Feed />} />
          <Route path='/auth' element={<AuthPage/>}/>
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
