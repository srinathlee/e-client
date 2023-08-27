import {create} from 'zustand'

export const appStore=create((set)=>({
    wishList:[],
    cart:[{

        "brand"
: 
"LEVIS",
"id"
: 
5,
"imageUrl"
: 
"https://assets.ccbp.in/frontend/react-js/ecommerce/clothes-jeans-pants.png",
"price"
: 
1469,
"quantity"
: 
4,
"title"
: 
"Slim Fit Jeans"
    }],
    loggedUser:"q@gmail.com",
    getUser:(userMail)=>set({loggedUser:userMail}),
    addCartItem:(item)=>set((state)=>({cart:[...state.cart,item]})),
    removeCartItem:(id)=>set((state)=>({cart:state.cart.filter((ele)=>ele.id!==id)})),
    itemIncrement:(id=>set((state)=>({cart:state.cart.map((e)=>e.id===id?{...e,quantity:e.quantity+1}:e)}))),
    itemDecrement:(id=>set((state)=>({cart:state.cart.map((e)=>e.id===id?{...e,quantity:e.quantity-1}:e)}))),
    removeAllItems:()=>set((state)=>({cart:[]})),
    addWishItem:(item)=>set((state)=>({wishList:[...state.wishList,item]})),
    removeWishItem:(id)=>set((state)=>({wishList:state.wishList.filter((ele)=>ele.id!==id)}))
}))