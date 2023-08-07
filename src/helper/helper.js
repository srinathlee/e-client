import axios from 'axios'
import Cookies from 'js-cookie'
axios.defaults.baseURL="https://e-server-uoze.onrender.com"
// axios.defaults.baseURL="http://localhost:5080"


export const Register=async(details)=>{
    console.log("helper details",details)
  
    try{
        const result=await axios.post("/register",details)
            // return Promise.resolve(result)
            return result
         }
    catch(e){
        //    return Promise.reject(e.response)
             return e.response
    }

}

export const Login=async(details)=>{
    try{
    const result=await axios.post("/login",details)
    console.log(result)
    return result
    
    }
    catch(e){
        console.log(e)
        return e
    }
}

export const Products=async ()=>{

   try{
       const jwtToken=Cookies.get("jwtToken")
       const result =await axios.get("/products",{headers:{
        'Content-Type':"appliation/json",
        "Accept":"application/json",
        "Authorization":`Bearer ${jwtToken}`
      }})
      return result
     }

   catch(e){
      return e.response
     }
}

export const getProduct=async(id)=>{
    try{
        const jwtToken = Cookies.get('jwtToken')
        const head={headers:{"Content-Type":"application/json","Accept":"application/json","Authorization":`Bearer ${jwtToken}`}}
        const response= await axios.get(`/products/${id}`,head)
        return response
        }
        catch(e){
          console.log(e.response)
          return e.response
        }
}

export const getloggerUser=async(loggedUser)=>{
    try{
        const response = await axios.get("/logger",{params:{email:loggedUser}})
        return response
      }

     catch(e){
      return (e,"user defined error")
     }
}