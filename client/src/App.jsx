import { useState } from "react";
import "./App.css";
import Feed from "./pages/Feed/Feed";
import Home from "./pages/Home/Home";
import NavBar from './components/Navbar/Navbar'


import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthPage from './pages/Auth/authPage';
import UserManager from './context/UserContext';
import LeaderBoard from "./pages/leaderBoard/leaderBoard";
import SingleJob from "./pages/SingleJob/SingleJob";

function App() {
  return (
    <UserManager>
      <BrowserRouter>
      <NavBar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/feed" element={<Feed />} />
            <Route path='/auth' element={<AuthPage/>}/>
            <Route path='/leaderboard' element={<LeaderBoard/>}/>
            <Route path='/volunteerJobs/:volunteerJobsId' element={<SingleJob/>}/>

          </Routes>
        </main>
      </BrowserRouter>
    </UserManager>
  );
}

export default App;
