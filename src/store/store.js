import {create} from 'zustand'

export const appStore=create((set)=>({
    cart:[],
    loggedUser:"q@gmail.com",
    getUser:(userMail)=>set({loggedUser:userMail}),
    addCartItem:(item)=>set((state)=>({cart:[...state.cart,item]})),
    removeCartItem:(id)=>set((state)=>({cart:state.cart.filter((ele)=>ele.id!==id)})),
    itemIncrement:(id=>set((state)=>({cart:state.cart.map((e)=>e.id===id?{...e,quantity:e.quantity+1}:e)}))),
    itemDecrement:(id=>set((state)=>({cart:state.cart.map((e)=>e.id===id?{...e,quantity:e.quantity-1}:e)}))),
    removeAllItems:()=>set((state)=>({cart:[]}))
}))