
import {appStore} from '../../store/store'
import{RxCrossCircled} from 'react-icons/rx'
import './index.css'
import { Link } from 'react-router-dom'

const Wishitem=(props)=>{
    const {removeWishItem}=appStore((state)=>state)
    const {each}=props
    const{id,title,brand,image,quantity,imageUrl,price}=each


       const removeItem=()=>removeWishItem(id)
    
    return(
      <Link className='wish-link' to={`/productDetail/${id}`}>
        <div className='cart-item wish-item'>
              <img className='item-image wish-image' src={imageUrl}/> 
                <div className='cart-item-description'> 
                 <div className='item-details'>
                  <h1 className='item-name wish-name'>{title}</h1>
                  <p className='item-brand wish-title'>by {brand}</p>
                 </div>
                 <div className='cart-price-delete'>
                   <p className='cart-item-price'>Rs {price}/-</p>
                   <button onClick={removeItem} className='cart-item-remove'><RxCrossCircled/></button>
                 </div> 
                </div>
                <button onClick={removeItem} className='cart-item-remove-small'><RxCrossCircled/></button>
              </div>
              </Link>
    )
}
export default Wishitem