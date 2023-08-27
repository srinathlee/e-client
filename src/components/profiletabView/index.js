import {FiEdit} from 'react-icons/fi'
import user_profile from '../assets/profilepage-profile.jpg'
import './index.css'
import { appStore } from '../../store/store'
import Wishitem from '../wishItem/index.js'
import emptyimg from '../assets/empth-wish-png.png'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const ProfileTabView=(props)=>{
  const {wishList}=appStore((state)=>state)

    const {id,user_data}=props
    console.log(user_data?.name)
    const [editData,setEditData]=useState({name:user_data?.name||"",email:user_data?.email||"",profile:user_data?.profile||""}) 
    console.log(editData)

    const convertBase64=(file)  =>{
        return new Promise((resolve,reject)=>{
         const filereader=new FileReader()
         filereader.readAsDataURL(file)
         filereader.onload=()=>{
             resolve(filereader.result)
         }
         filereader.onerror=(e)=>{
             reject(e)
         }
        })
     
     }
  
    const editUserName=(event)=>{
        setEditData((prevdata)=>({...prevdata,name:event.target.value}))
        // console.log(event.target.value)
     }

    const edituserProfile=async(event)=>{
        const file=event.target.files[0]
        const convertedFile= await convertBase64(file)
        console.log(convertedFile)
        setEditData((prevdata)=>({...prevdata,profile:convertedFile}))
        console.log(editData)
    }

     const accDetails=()=>{
        return(
            <div className='account-details-bg-container'>
              <div className='account-item-detail-container'>
                <div className='account-profile-bg'>
                <label htmlFor='profile-image'><img className='account-profile-imag' src={editData?.profile||user_profile}/></label>
                <input id="profile-image" className='profile-image-input' type="file"/>
                <FiEdit className='profile-edit-icon'/>

                </div>
                <form className='edit-user-form'>

                <div className='account-widget'>
                <label htmlFor='acc-label' className='acc-label'>User Name</label>
                <input id="acc-label" onChange={editUserName} className='account-detail-item' type="text" value={editData?.name||"defalut"}/>
                </div>

                <div className='account-widget'>
                <label htmlFor='acc-label' className='acc-label'>User Mail</label>
                <input id="acc-label" onChange={editUserName} className='account-detail-item' type="text" value={editData?.name||"defalut"}/>
                </div>

                <div className='account-prime-widget'>
               {
                true? 
                <div className='account-noprime-widget'>
                <label htmlFor='acc-label' className='prime-acc-label'>Get PrimeMembership</label>
                 <input id="acc-label" onChange={editUserName} className='account-prime-item' type="checkbox" value={editData?.name||"defalut"}/>
                </div>
                :
                 <p>PrimeMembership expires in ******* days</p>
               }
                </div>

                <button className='save-acc-button'>Save</button>  

                </form>

              </div>

            </div>
        )
     }

     const orders=()=>{
        return(
            <p>orders details</p>
        )
     }

     const wishlistComp=()=>{
        const wishLen=wishList.length
        return(
            <div className='wishlist-comp-container'>
                {
                    wishLen===0?
                    <div className='empty-wishliwt-container'>
                     <img className='empty-wish-img' src={emptyimg}/>
                     <p className='empty-wish-para'>Your WISHLIST is empty </p>
                   <Link to="/products">  <button className='shop-now-button'>Shop Now</button></Link>
                    </div>
                    :
                    wishList.map((each)=> <Wishitem each={each}/>)
                   
                }
            </div>
        )
     }

     const resetpass=()=>{
        return(
         
            <div className='reset-password-bg'>
                 <form className='reset-password-form'>
                   
                       <div className='verify-widget'>
                       <label htmlFor='verify-label' className='acc-label'>Verify OTP</label>
                        <input className='verify-otp' placeholder='Enter Otp to verify' type="text"/>
                       </div>
                        <button className='opt-verify-btn'>Verify</button>
                        <button className='opt-verify-btn'>Re-Send-OTP</button>
                 </form>
            </div>
        )
     }
   const SwitchTabView=()=>{

     switch(id){
        case 1:
            return accDetails()
            break;
        case 2:
            return orders()
            break;
        case 3:
           return wishlistComp()
            break;
        case 4:
           return resetpass()
            break;
     }    
}



    return(
        <div className='right-container'>

         {SwitchTabView()}

        </div>
    )
}
export default ProfileTabView