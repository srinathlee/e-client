import axios from 'axios'
import { useEffect, useState } from 'react'
import { appStore } from '../../store/store'
import * as helpers from '../../helper/helper.js'
import prof from '../assets/profile1.png'
import './index.css'

const Profile=()=>{
    const loggedUser=appStore((state)=>state.loggedUser)
   const [profile,setProfile]=useState()
    useEffect(()=>{getUserInit()},[])

    const getUserInit=async()=>{
        const response= await helpers.getloggerUser(loggedUser)
        console.log(response.data.profile)
        setProfile(response.data)
      }

   return(
   <div className='profile-container'>
    <div className='profile-card'>
    <div ><img  className='image-container'src={profile?.profile||prof}/></div>
    <h1>{profile?.name}</h1>
    <h1>{profile?.email}</h1>
   </div>
   </div>

   )
}


export default Profile