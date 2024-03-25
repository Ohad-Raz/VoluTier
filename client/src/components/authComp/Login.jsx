import React,{useContext, useEffect, useState} from 'react'
import Select from 'react-select';
import { getObjHandleForm } from '../../utils/general';
import { UserContext } from '../../context/UserContext';

export default function Login() {

    const {LoginFunc,UserID,Token} =useContext(UserContext);
    const tokenExpired=Token&&(!UserID)
    const [ErrorMsg, setErrorMsg] = useState(tokenExpired?"login session expired":"")

    async function sendFormObj(e){
        const newFormObj= getObjHandleForm(e)
        console.log({...newFormObj,role:SelectOpt.value})
        setErrorMsg('Logging In...')
        setErrorMsg(await LoginFunc(newFormObj))
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
            <label htmlFor="username">
                User name:
            </label>
            <input type="text" name="username" />

            <label htmlFor="password">
                Password: 
            </label>
            <input type="password" name="password" />
            <p style={{color:"red",display:ErrorMsg?"block":'none'}}>{ErrorMsg}</p>
            <button disabled={ErrorMsg=='Logging In...'}>Login In</button>
        </form>
    )
}
