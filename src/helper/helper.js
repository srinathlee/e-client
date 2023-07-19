import axios from 'axios'
import Cookies from 'js-cookie'
axios.defaults.baseURL="https://e-server-uoze.onrender.com"


export const Register=async(details)=>{
    // console.log(process.env.SERVER_URL)
  
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
      const result =await axios.get("/",{headers:{
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