import {useState,useEffect} from 'react'
import {Link,useNavigate} from 'react-router-dom'
import banner from '../assets/reg3.png'
import profile from '../assets/registerprofile.png'
import AOS from 'aos'
import {AiOutlineUser,AiOutlineMail} from 'react-icons/ai'
import {RiLockPasswordLine} from 'react-icons/ri'
import {ToastContainer,toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import * as helpers from '../../helper/helper.js'
import 'aos/dist/aos.css'
import './register.css'




const Register=()=>{
    const navigate=useNavigate()
    const [state,setState]=useState({
        name:"",
        email:"",
        password:"",
        conpassword:"",
        profile:"",
        primemember:false,
        errors:{}

    })

    useEffect(()=>{
        AOS.init({duration:1000})
    })

    const setData=(event)=>{
       setState((prevState)=>({...prevState,[event.target.name]:event.target.value}))
    }
    const setPrime=(event)=>{
       setState((prevState)=>({...prevState,[event.target.name]:event.target.checked}))
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
      const {name,email,password,conpassword,errors,primemember}=state
      console.log(name,email,password,conpassword,errors)
      if(name==="" || email==="" || password==="")
      toast.error("complete form details")
      else if(password!==conpassword)
      toast.error("password should match")
      else {
      const details={name,email,password,primemember,profile:"s"}
      const result= await helpers.Register(details)
      if(result.status==200){
        toast.success("user registered successfully")
       setTimeout(() => {
        navigate("/login")
       }, 1000);
      }
      else if(result.status==403){
        toast.error("user already exist")
      }
      else{
        toast.error("error while fetching")

      }
    //   toast.promise(result, {
    //     pending: 'Loading',
    //     success: 'Got the data',
    //     error:"user already exist",
    //  })
     
   
     } 
    }



      const {name,email,password,conpassword,errors}=state
   
        return(
            <div className='register-bg-container'>
               <ToastContainer/>
                <div className='register-card-container'>
                    <img alt="img" data-aos="fade-right" className='register-banner' src={banner}/>

                    <form onSubmit={onSubmit} data-aos="fade-left" className='register-form'>

                        <div className='logo-container'>
                         <label htmlFor="register-img"><img alt="profile" src={profile}/></label>
                          <input className='register-img-input' id="register-img" type="file" />
                        </div>
                        <div className='outer-widget'>
                        <div className='widget'>
                         
                          <i className="fa-regular fa-user widget-icon"></i>
                          <input onBlur={onBlur} value={name} onChange={setData} name="name" className='input-box' type="text" placeholder='Enter your name'/>
                        </div>
                        {/* {errors.name && <p className='error'>{errors.name}</p>} */}
                        </div>

                        <div className='outer-widget'>
                        <div  className='widget'>
                      
                          <i className="fa-regular fa-envelope widget-icon"></i>
                          <input onBlur={onBlur}  value={email} onChange={setData}  name="email"  className="input-box" type="text" placeholder='Enter your email'/>
                        </div>
                        {/* {errors.email && <p className='error'>{errors.email}</p>} */}
                        </div>
                        
                         <div className='outer-widget'>
                        <div className='widget'>
                          <i className="fa-solid fa-key widget-icon password'"></i>
                          <input onBlur={onBlur}  value={password} onChange={setData}  name="password"  className='input-box' type="password" placeholder='Enter your password'/>
                          </div>
                          {/* {errors.password && <p className='error'>{errors.password}</p>} */}
                        </div>

                        <div className='outer-widget'>
                        <div  className='widget'>
                          <i className="fa-solid fa-key widget-icon password'"></i>
                          <input  onBlur={onBlur}  value={conpassword}  onChange={setData} name="conpassword"  className='input-box' type="password" placeholder='Conform password'/>
                          </div>
                          {/* {errors.conpassword && <p className='error'>{errors.conpassword}</p>} */}
                        </div>
                        <div  className='prime-box'>
                          <input name="primemember" onClick={setPrime}  className='primebox' type="checkbox" />
                          <p className='haveacc-para'>Add <span className='prime'>prime</span> membership</p>

                        </div>
                        <button className='register-btn'>Register</button>
                        <p className='haveacc-para'>Already have an account ?<Link className='link'  to="/login"><span>SignIn</span></Link></p>

                    </form>

                </div>

            </div>
         
        )
    }

export default Register