import {Component} from 'react'
import {Link} from 'react-router-dom'
import banner from '../assets/reg3.png'
import profile from '../assets/registerprofile.png'
import AOS from 'aos'
import {AiOutlineUser,AiOutlineMail} from 'react-icons/ai'
import {ToastContainer,toast} from 'react-toastify'
import {RiLockPasswordLine} from 'react-icons/ri'
import * as helpers from '../../helper/helper.js'
import 'react-toastify/dist/ReactToastify.css';
import 'aos/dist/aos.css'
import './register.css'

// import dotenv from 'dotenv'
// dotenv.config()


class Register extends Component{
    
    state={
        name:"",
        email:"",
        password:"",
        conpassword:"",
        profile:"",
        primemember:false,
        errors:{}

    }

    componentDidMount(){
        AOS.init({duration:1000})
    }
    setData=(event)=>{
       this.setState((prevState)=>({...prevState,[event.target.name]:event.target.value}))
    }
    setPrime=(event)=>{
       this.setState((prevState)=>({...prevState,[event.target.name]:event.target.checked}))
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
      // const {history}=this.props
      console.log(this.props)
      console.log(this.props.history)
      event.preventDefault()
      
      const {name,email,password,conpassword,errors,primemember}=this.state
      if(name=="" || email=="" || password=="")
      toast.error("complete form details")
      else if(password!=conpassword)
      toast.error("password should match")
      else {
      const details={name,email,password,primemember,profile:"s"}
      // toast("wait a moment",{position: "top-center",
      // autoClose: 2000})
      const result=  helpers.Register(details)
      // if(result.status==200){
      //   toast.success("user registered successfully")
      // }
      // else if(result.status==403){
      //   toast.error("user already exist",{position: "top-right",
      //   autoClose: 5000})
      // }
      // else{
      //   toast.error("error while fetching")

      // }
      toast.promise(result, {
        pending: 'Loading',
        success: 'Got the data',
        error:"user already exist",
     })
     
     result.then((a)=>{
      // this.props.navigate('/login')
      console.log("submited")
     })


       } 
    }


    render(){
      const {name,email,password,conpassword,errors}=this.state
   
        return(
            <div className='register-bg-container'>
              <ToastContainer theme='red'/>
                <div className='register-card-container'>
                    <img data-aos="fade-right" className='register-banner' src={banner}/>

                    <form onSubmit={this.onSubmit} data-aos="fade-left" className='register-form'>

                        <div className='logo-container'>
                         <label htmlFor="register-img"><img src={profile}/></label>
                          <input className='register-img-input' id="register-img" type="file" />
                        </div>
                        <div className='outer-widget'>
                        <div className='widget'>
                         
                          <i className="fa-regular fa-user widget-icon"></i>
                          <input onBlur={this.onBlur} value={name} onChange={this.setData} name="name" className='input-box' type="text" placeholder='Enter your name'/>
                        </div>
                        {/* {errors.name && <p className='error'>{errors.name}</p>} */}
                        </div>

                        <div className='outer-widget'>
                        <div  className='widget'>
                      
                          <i className="fa-regular fa-envelope widget-icon"></i>
                          <input onBlur={this.onBlur}  value={email} onChange={this.setData}  name="email"  className="input-box" type="text" placeholder='Enter your email'/>
                        </div>
                        {/* {errors.email && <p className='error'>{errors.email}</p>} */}
                        </div>
                        
                         <div className='outer-widget'>
                        <div className='widget'>
                          <i className="fa-solid fa-key widget-icon password'"></i>
                          <input onBlur={this.onBlur}  value={password} onChange={this.setData}  name="password"  className='input-box' type="password" placeholder='Enter your password'/>
                          </div>
                          {/* {errors.password && <p className='error'>{errors.password}</p>} */}
                        </div>

                        <div className='outer-widget'>
                        <div  className='widget'>
                          <i className="fa-solid fa-key widget-icon password'"></i>
                          <input  onBlur={this.onBlur}  value={conpassword}  onChange={this.setData} name="conpassword"  className='input-box' type="password" placeholder='Conform password'/>
                          </div>
                          {/* {errors.conpassword && <p className='error'>{errors.conpassword}</p>} */}
                        </div>
                        <div  className='prime-box'>
                          <input name="primemember" onClick={this.setPrime}  className='primebox' type="checkbox" />
                          <p className='haveacc-para'>Add <span className='prime'>prime</span> membership</p>

                        </div>
                        <button className='register-btn'>Register</button>
                        <p className='haveacc-para'>Already have an account ?<Link className='link'  to="/login"><span>SignIn</span></Link></p>

                    </form>

                </div>
            </div>
         
        )
    }
}
export default Register