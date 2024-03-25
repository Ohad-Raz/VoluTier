import { useState } from 'react'
import './App.css'
import Feed from './pages/Feed/Feed'

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    
<Router>
  <div>
    <Routes>
{/* <Route path="/" element={<Home />} /> */}
          <Route path="/feed" element={<Feed />} /> 
          </Routes>
            </div>
</Router>
 
  )
}

export default App
