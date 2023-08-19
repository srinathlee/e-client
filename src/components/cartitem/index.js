import {BsPlusSquare, BsDashSquare} from 'react-icons/bs'
import {appStore} from '../../store/store'
import{RxCrossCircled} from 'react-icons/rx'
import './index.css'

const CartItem=(props)=>{
    const {itemIncrement,itemDecrement,removeCartItem}=appStore((state)=>state)
    const {each}=props
    const{id,title,brand,image,quantity,imageUrl,price}=each
    const onDecrementQuantity = () => {
        itemDecrement(id)
       }
     
       const onIncrementQuantity = () => {
        itemIncrement(id)
       }

       const removeItem=()=>removeCartItem(id)
    
    return(
        <div className='cart-item'>
                <div className='item-description'>
                 <img className='item-image' src={imageUrl}/> 
                 <div className='item-details'>
                  <h1 className='item-name'>{title}</h1>
                  <p className='item-brand'>by {brand}</p>
                 </div>
                </div>
              
                <div className="quantity-container">
                  <button
                    type="button"
                    className="quantity-controller-button"
                    onClick={onDecrementQuantity}
                  >
                    <BsDashSquare className="quantity-controller-icon" />
                  </button>
                  <p className="quantity">{quantity}</p>
                  <button
                    type="button"
                    className="quantity-controller-button"
                    onClick={onIncrementQuantity}
                  >
                    <BsPlusSquare className="quantity-controller-icon" />
                  </button>
                </div>

                <div className='cart-price-delete'>
                   <p className='cart-item-price'>Rs {price}/-</p>
                   <button onClick={removeItem} className='cart-item-remove'><RxCrossCircled/></button>
                </div> 
              </div>
    )
}
export default CartItem