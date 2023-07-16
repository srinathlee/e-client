import axios from 'axios'
const serverUrl="https://e-server-uoze.onrender.com/register"
const localUrl="http://localhost:5080/register"

export const Register=async(details)=>{
    // console.log(process.env.SERVER_URL)
  
    try{
        const result=await axios.post(localUrl,details)
        // return Promise.resolve(result)
        // if(result.response.status==200){
        // console.log("status 200")
            return Promise.resolve(result)
        // }
        // else{
        //     console.log("status 403")
        // return Promise.reject(result)
        // }
    }

    catch(e){
        
           return Promise.reject(e.response)
    }

}

export const Login=async()=>{
    // console.log(process.env.SERVER_URL)
}