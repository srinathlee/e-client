import {useState,useEffect} from 'react'
import { Link,useNavigate } from 'react-router-dom'
import * as helpers from '../../helper/helper.js'
import banner from '../assets/loginbg.png'
import profile from '../assets/registerprofile.png'
import AOS from 'aos'
import { ToastContainer,toast } from 'react-toastify'
import 'aos/dist/aos.css'
import {AiOutlineUser,AiOutlineMail} from 'react-icons/ai'
import {RiLockPasswordLine} from 'react-icons/ri'
import Cookies from 'js-cookie'
import './login.css'
import 'react-toastify/dist/ReactToastify.css';


const Login=()=>{
  const navigate=useNavigate()
    const[state,setState]=useState({
        email:"",
        password:"",
        errors:{}
    })

    useEffect(()=>{
      AOS.init({duration:1000})
      console.log(process.env.serverUrlloing)
  })

    const setData=(event)=>{
      setState((prevState)=>({...prevState,[event.target.name]:event.target.value}))
     }
     const onBlur=(e)=>{
        const {errors}=state
          if(e.target.value==""){
            setState((prevState)=>({...prevState,errors:{...prevState.errors,[e.target.name]:`*provide a valid ${e.target.name}`}}))
            toast.error(`enter a valid ${e.target.name}`)
  
          }
          else{
            const errs =state.errors
            delete errs[e.target.name]
            setState((prevState)=>({...prevState,errors:errs}))
          }
      }
      const onSubmit=async(event)=>{
        event.preventDefault()
        const {email,password,errors}=state
        if(email=="" || password=="")
        toast.error("complete form details")
        else {
        const details={email,password}
        const result=await helpers.Login(details)
        if(result.status===200){
          console.log("login jwt",result.data.jwt_token)
          Cookies.set("jwtToken",result.data.jwt_token)
          // ___________________________________________
          toast.success("loing successful")
          setTimeout(() => {
            navigate("/")
           }, 1000);

        }
        else{
          toast.error(result.response.data.error)
        }

         } 
      }

        const {email,password}=state
        return(
            <div className='login-bg-container'>
                <ToastContainer theme='black'/>
                <div className='login-card-container'>
                    <img data-aos="fade-right" className='login-banner' src={banner}/>

                    <form  onSubmit={onSubmit} data-aos="fade-left" className='login-form'>

                        <div className='login-logo-container'>
                         <label htmlFor="login-img"><img src={profile}/></label>
                          <input className='login-img-input' id="login-img" type="file" />
                        </div>
   
                        <div  className='login-widget'>
                          <AiOutlineMail className='login-widget-icon'/>
                          <input name="email" onChange={setData} onBlur={onBlur} className='login-input-box' type="text" placeholder='enter your email'/>
                        </div>
                        <div className='login-widget'>
                          <RiLockPasswordLine className='login-widget-icon'/>
                          <input name="password"  onChange={setData} onBlur={onBlur}  className='login-input-box' type="password" placeholder='enter your password'/>
                        </div>
                        <button className='login-register-btn'>Login</button>
                        <p className='login-haveacc-para'>Dosen`t have an account ?<Link  to="/register"><span className='login-prime'> SignUp</span></Link></p>

                    </form>

                </div>
            </div>
         
        )
    }
export default Login