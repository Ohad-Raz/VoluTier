import React, { useContext, useEffect, useState } from 'react'
import SignUp from '../../components/authComp/SignUp'
import Login from '../../components/authComp/Login'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../../context/UserContext'


function AuthPage() {
  const {UserID}=useContext(UserContext)
  const [SignToggle, setSignToggle] = useState(false)
  const toggleSignMethod=()=>{setSignToggle(!SignToggle)}
  const nav=useNavigate()
  

  // useEffect(()=>{if(UserID){nav('/profile')}},[UserID])
  return (
    <div id='registerPage'>
      {SignToggle?<SignUp/>:<Login/>}
      <button onClick={toggleSignMethod}>{SignToggle?"Have an account already?":"Don't have an account?"}</button>
    </div>
  )
}

export default AuthPage