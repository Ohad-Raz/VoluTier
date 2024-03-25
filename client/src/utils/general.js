export const getObjHandleForm=(e)=>{
    e.preventDefault()
    const formData=new FormData( e.target)
    const formObj= Object.fromEntries(formData)
    return formObj
}

export const postOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    mode:'cors'
  };
export const pageBaseUrl="http://localhost:4200/api/v1/";

export const getOptions = {
  method: 'Get',
  headers: { 'Content-Type': 'application/json' },
  mode:'cors'
};

export const optionsWithToken=(anyOption,tokenStr)=>{
  const getOptionsCopy={...anyOption}
  getOptionsCopy.headers.Authorization=`Bearer ${tokenStr}`
  return getOptionsCopy
}