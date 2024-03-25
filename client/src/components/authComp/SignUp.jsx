import React, { useContext,useState,useEffect } from 'react'
import { getObjHandleForm } from '../utils/general'
import { UserContext } from '../contexts/UserManager'
import Select from 'react-select';


export default function SignUp() {
    const {SignUpFunc} =useContext(UserContext);
    const [ErrorMsg, setErrorMsg] = useState("")

    async function  sendFormObj(e){
        const newFormObj= getObjHandleForm(e)
        console.log(newFormObj)
        if (newFormObj.password!=newFormObj.passwordRep){
            setErrorMsg("passwords don't match")
        }
        else{
            setErrorMsg('Signing Up...')
            setErrorMsg(await SignUpFunc(newFormObj))
        }
    }
    const selectOptions = [
        { value: 'Employee', label: 'Employee' },
        { value: 'Company', label: 'Company' },
        { value: 'Volunteer', label: 'Volunteer Place' },
    ];
    const [SelectOpt, SetSelectOpt] = useState(selectOptions[0])
    const handleSelectChange=(selectOptions)=>{
        SetSelectOpt(selectOptions)
    }






    return (
        <form onSubmit={sendFormObj} className='entryForm'>
            <Select
            value={SelectOpt}
            name='select'
            onChange={handleSelectChange}
            options={selectOptions}
            placeholder="Select an option"
            />
            <label htmlFor="name">
                Name:
            </label>
            <input type="text" name="name" />

            <label htmlFor="email">
                Email:
            </label>
            <input type="email" name="email" />

            <label htmlFor="password">
                Password: 
            </label>
            <input type="password" name="password" />
            
            <label htmlFor="passwordRep">
                Repeat Password:
            </label>
            <input type="password" name="passwordRep" />
            
            <p className='errMsg' style={{color:"red",display:ErrorMsg?"block":'none'}}>{ErrorMsg}</p>
            <button disabled={ErrorMsg=='Signing Up...'}>Sign Up</button>
        </form>
    )
}
