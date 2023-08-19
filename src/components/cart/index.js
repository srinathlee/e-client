import {appStore} from '../../store/store'
import Header from '../header/header.js'
import CartItem from '../cartitem/index.js'
import './index.css'

const Cart=()=>{
 const {cart,removeAllItems}=appStore((state)=>state)
console.log(cart)
 
 const removeAllCart=()=>removeAllItems()


  let totalCost=0;
  cart.map((each)=>totalCost+=(each.price)*each.quantity)
  console.log(totalCost)




    return (
        <>
        <Header/>
        <div className='cart-bg-container'>
          <div className='cart-main-bg'>

            <div className='cart-header'>
            <h1 className='cart-main-heading'>My Cart</h1>
            <button onClick={removeAllCart} className='cart-clear-btn'>Clear All Items</button>
            </div>

            <div className='cart-body'>
              {
                cart.map((each)=><CartItem key={each.id} each={each}/>)
              }
              {/* <CartItem/> */}
            </div>

            <div className='cart-footer'>
            <p className='total-amount'>
            Total Bill  = <span className='cost'>{totalCost}</span>/-              
            </p>
            </div>

          </div>
        </div>
        </>
        
    )
}

export default Cart