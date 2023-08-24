import './index.css'

const ProfileTabView=(props)=>{
    const {id}=props
     const accDetails=()=>{
        return(
            <p>account details</p>
        )
     }

     const orders=()=>{
        return(
            <p>orders details</p>
        )
     }

     const wishlist=()=>{
        return(
            <p>wishdetails details</p>
        )
     }

     const resetpass=()=>{
        return(
            <p>reset password</p>
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
           return wishlist()
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