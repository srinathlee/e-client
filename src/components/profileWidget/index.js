import {FaUserAlt,FaShoppingCart,FaKey} from 'react-icons/fa'
import {RiEditBoxFill} from 'react-icons/ri'
import {BiLogOut} from 'react-icons/bi'
import {FiEdit} from 'react-icons/fi'
import './index.css'



const ProfileWidget=(props)=>{
  const {each,isActive,changeTab,children}=props
  const {id,text,Icon}=each
  const selected=isActive?"selected":""
  const wedgetClick=()=>{
    changeTab(id)
  }

    return(
        <div onClick={wedgetClick} className={`profile-widget ${selected}`}>
          {children}
          <p className='widget-text'>{each.text}</p>
        </div>
       )
}
export default ProfileWidget