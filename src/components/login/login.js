import {Component} from 'react'
import { Link } from 'react-router-dom'
import banner from '../assets/reg3.png'
import profile from '../assets/registerprofile.png'
import AOS from 'aos'
import { ToastContainer,toast } from 'react-toastify'
import 'aos/dist/aos.css'
import {AiOutlineUser,AiOutlineMail} from 'react-icons/ai'
import {RiLockPasswordLine} from 'react-icons/ri'
import './login.css'

class Login extends Component{
    state={
        email:"",
        password:"",
        errors:{}
    }

    componentDidMount(){
        AOS.init({duration:1000})
    }
    setData=(event)=>{
        this.setState((prevState)=>({...prevState,[event.target.name]:event.target.value}))
     }
     onBlur=(e)=>{
        const {errors}=this.state
          if(e.target.value==""){
            this.setState((prevState)=>({...prevState,errors:{...prevState.errors,[e.target.name]:`*provide a valid ${e.target.name}`}}))
            toast.error(`enter a valid ${e.target.name}`)
  
          }
          else{
            const errs =this.state.errors
            delete errs[e.target.name]
            this.setState((prevState)=>({...prevState,errors:errs}))
          }
      }
      onSubmit=async(event)=>{
        event.preventDefault()
        
        const {email,password,errors}=this.state
        if(email=="" || password=="")
        toast.error("complete form details")
        else {
        const details={email,password}
        // const result= await helpers.Register(details)
        // console.log(result)
        // console.log(result.response)
        // console.log(result.status)
        toast.success("subbmited")
         } 
      }

    render(){
        return(
            <div className='login-bg-container'>
                <ToastContainer/>
                <div className='login-card-container'>
                    <img data-aos="fade-right" className='login-banner' src={banner}/>

                    <form  onSubmit={this.onSubmit} data-aos="fade-left" className='login-form'>

                        <div className='login-logo-container'>
                         <label htmlFor="login-img"><img src={profile}/></label>
                          <input className='login-img-input' id="login-img" type="file" />
                        </div>
   
                        <div  className='login-widget'>
                          <AiOutlineMail className='login-widget-icon'/>
                          <input name="email" onChange={this.setData} onBlur={this.onBlur} className='login-input-box' type="text" placeholder='enter your email'/>
                        </div>
                        <div className='login-widget'>
                          <RiLockPasswordLine className='login-widget-icon'/>
                          <input name="password"  onChange={this.setData} onBlur={this.onBlur}  className='login-input-box' type="password" placeholder='enter your password'/>
                        </div>
                        <button className='login-register-btn'>Login</button>
                        <p className='login-haveacc-para'>Dosen`t have an account ?<Link to="/register"><span className='login-prime'>SignIn</span></Link></p>

                    </form>

                </div>
            </div>
         
        )
    }
}
export default Login