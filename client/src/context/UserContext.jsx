import React, { useState,useEffect, createContext } from 'react'
import {getOptions, optionsWithToken, pageBaseUrl, postOptions } from '../utils/general'
export const UserContext= createContext({})


export default function UserManager({children}) {

    const SignUpFunc= async(signUpObj)=>{
      console.log(signUpObj)
      console.log(`${pageBaseUrl}${signUpObj.select}/register`)
    //   try {
    //     const response= await fetch(`${pageBaseUrl}users/register`,{...postOptions,body:JSON.stringify({email,password,fullname})})
    //     const data=await response.json()
    //     if(data.message){
    //       return data.message
    //     }
    //     setUserObj({...data.user,id:data.user._id})
    //     setUserToken(data.token)
    //   } catch (error) {
    //    console.log(error)
    //    return "error"
    //   }
    //   return "success"

        
    }

    const LoginFunc=async(loginObj)=>{
      console.log(loginObj)
    //   try {
    //     const response= await fetch(`${pageBaseUrl}users/login`,{...postOptions,body:JSON.stringify({email,password})})
    //     const data=await response.json()
    //     if(data.message){
    //       return data.message
    //     }
    //     setUserObj({...data.user,id:data.user._id})
    //     setUserToken(data.token)
    //   } catch (error) {
    //    console.log(error) 
    //    return "error"
    //   }
      return "success"
        
    }

    const getUser=async ()=>{
      try {
        const response= await fetch(`${pageBaseUrl}users/login`,optionsWithToken(getOptions,UserToken))
        const data=await response.json()
        if(data.message)console.log(data.message)
        if(data.user)setUserObj({...data.user,id:data.user._id});
      } catch (error) {
        console.log(error)
      }
    }
    
    // const logOut=()=>{
    //     signOut(auth).then(() => {
    //       setUserObj({email:'',id:'',error:''})
    //     }).catch((error) => {
    //       console.log(error)
    //     })
    // };

    const[UserObj,setUserObj]=useState({id:''})
    const [UserToken,setUserToken]=useState('')

    useEffect(()=>{
      if(UserToken==''){
        setUserToken(localStorage.getItem('volun_token')??'')
      }
      else{
        localStorage.setItem('volun_token',UserToken)
        if(!UserObj.id){
          getUser()
        }
      }

    },[UserToken])


    useEffect(()=>{
      console.log(UserObj)
      console.log(UserToken)
    },[UserToken,UserObj])


    const val={SignUpFunc,LoginFunc,UserObj,UserToken,UserID:UserObj.id,setUserObj}

  
    return (
        <UserContext.Provider value={val}>
            {children}
        </UserContext.Provider>
    )
}