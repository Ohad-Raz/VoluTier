import { useState } from 'react'
import './App.css'
import Feed from './pages/Feed/Feed'

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AuthPage from './pages/Auth/authPage';
import UserManager from './context/UserContext';

function App() {
  return (
  <UserManager>
    <Router>
      <div>
        <Routes>
          
    {/* <Route path="/" element={<Home />} /> */}
          <Route path="/feed" element={<Feed />} />
          <Route path='/auth' element={<AuthPage/>}/>
        </Routes>
      </div>
    </Router>
  </UserManager>
    

  )
}

export default App
