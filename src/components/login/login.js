import {useState,useEffect} from 'react'
import { Link,useNavigate } from 'react-router-dom'
import * as helpers from '../../helper/helper.js'
import banner from '../assets/loginbg.png'
import profile from '../assets/registerprofile.png'
import AOS from 'aos'
import { ToastContainer,toast } from 'react-toastify'
import 'aos/dist/aos.css'
import {AiOutlineMail} from 'react-icons/ai'
import {RiLockPasswordLine} from 'react-icons/ri'
import Cookies from 'js-cookie'
import { appStore } from '../../store/store.js'
import './login.css'
import 'react-toastify/dist/ReactToastify.css';


const Login=()=>{
  const getUser=appStore((state)=>state.getUser)
  const loggedUser=appStore((state)=>state.loggedUser)
  const navigate=useNavigate()
    const[state,setState]=useState({
        email:"",
        password:"",
        errors:{}
    })

    useEffect(()=>{
      AOS.init({duration:1000})
  })

    const setData=(event)=>{
      setState((prevState)=>({...prevState,[event.target.name]:event.target.value}))
     }
     const onBlur=(e)=>{
        const {errors}=state
          if(e.target.value===""){
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
        const id = toast.loading("Please wait...")
        const {email,password,errors}=state
        if(email==="" || password==="")
        toast.update(id, { render: "Complete form details", type: "error", isLoading: false , autoClose:2000});

        else {
        const details={email,password}
        const result=await helpers.Login(details)
        if(result.status===200){
          getUser(email)
          console.log(email,"zustand______",loggedUser)
          Cookies.set("jwtToken",result.data.jwt_token)
          // ___________________________________________
          // toast.success("Loing successful")
        toast.update(id, { render: "Login successful", type: "success", isLoading: false,autoClose:2000 });

          setTimeout(() => {
            navigate("/")
           }, 1000);

        }
        else{
          // toast.error(result.response.data.error)
        toast.update(id, { render: `${result.response.data.error}`, type: "error", isLoading: false, autoClose:2000 });

        }

         } 
      }

        const {email,password}=state
        return(
            <div className='login-bg-container'>
                <ToastContainer />
                <div className='login-card-container'>
                    <img alt="banner-img" data-aos="fade-right" className='login-banner' src={banner}/>

                    <form  onSubmit={onSubmit} data-aos="fade-left" className='login-form'>

                        <div className='login-logo-container'>
                         <label htmlFor="login-img"><img alt="prifile" src={profile}/></label>
                          <input className='login-img-input' id="login-img" type="file" />
                        </div>
   
                        <div  className='login-widget'>
                          <AiOutlineMail className='login-widget-icon'/>
                          <input name="email" onChange={setData} onBlur={onBlur} className='login-input-box' type="email" placeholder='Enter your email'/>
                        </div>
                        <div className='login-widget'>
                          <RiLockPasswordLine className='login-widget-icon'/>
                          <input name="password"  onChange={setData} onBlur={onBlur}  className='login-input-box' type="password" placeholder='Enter your password'/>
                        </div>
                        <button className='login-register-btn'>Login</button>
                        <p className='login-haveacc-para'>Dosen`t have an account ?<Link  to="/register"><span className='login-prime'> SignUp</span></Link></p>

                    </form>

                </div>
            </div>
         
        )
    }
export default Login