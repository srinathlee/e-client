import {create} from 'zustand'

export const appStore=create((set)=>({
    cart:[],
    loggedUser:"q@gmail.com",
    getUser:(userMail)=>set({loggedUser:userMail})
    // addCartItem:(item)=>(cart.push(item))
}))