import axios from 'axios'
import user_profile from '../assets/profilepage-profile.jpg'
import { useEffect, useState } from 'react'
import { appStore } from '../../store/store'
import * as helpers from '../../helper/helper.js'
import {FaUserAlt,FaShoppingCart,FaKey} from 'react-icons/fa'
import {RiEditBoxFill} from 'react-icons/ri'
import {BiLogOut} from 'react-icons/bi'
import {FiEdit} from 'react-icons/fi'
import Header from '../header/header.js'
import userprofile from '../assets/userprofile.jpeg'
import {BsBagHeartFill} from 'react-icons/bs'
import prof from '../assets/profile1.png'
import ProfileWidget from '../profileWidget/index.js'
import ProfileTabView from '../profiletabView'
import './index.css'

const profileTabs=[
   {id:1,Icon:<FaUserAlt/>,text:"Account Details"},
   {id:2,Icon:<FaShoppingCart/>,text:"My Orders"},
   {id:3,Icon:<BsBagHeartFill/>,text:"Wish List"},
   {id:4,Icon:<FaKey/>,text:"Reset Password"}
]

const Profile=()=>{
  console.log("tis is profile",<BiLogOut/>)
    const loggedUser=appStore((state)=>state.loggedUser)
   const [profile,setProfile]=useState()
   const[tab,setTab]=useState(1)
    useEffect(()=>{getUserInit()},[])

    const getUserInit=async()=>{
        const response= await helpers.getloggerUser(loggedUser)
        console.log(response.data.profile)
        setProfile(response.data)
      }
   
   const changeTab=(id)=>{
      setTab(id)
   }
   

      

   return(
<>
<Header/>
   <div className='profile-container'>
      <div className='left-container'>
         <div className='profile-image-container'>
            <label htmlFor='profile-image'><img  className='profile-page-image' src={user_profile}/></label>
            <input id="profile-image" className='profile-image-input' type="file"/>
            <FiEdit className='profile-edit-icon'/>
         </div>

         <p className='user-name-greet'>H!  Anjelah Nicole </p>
 
         {
           profileTabs.map((each)=> <ProfileWidget key={each.id} isActive={tab===each.id} changeTab={changeTab} each={each}>{each.Icon}</ProfileWidget>)
         }
        <div className='logout-widget profile-widget'>
          <BiLogOut className='logout-icon'/>
          <p >Logout</p>
        </div>
      </div>
      <ProfileTabView id={tab}/>
        
   </div>

   </>
   )
}


export default Profile