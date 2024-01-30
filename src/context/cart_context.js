
import { createContext, useReducer ,useEffect, useState} from "react";
import { auth } from "../Firebase";
import {onAuthStateChanged } from "firebase/auth";

import cartReducer from "../reducers/cartReducer";




const CartContext=createContext()
const getItem=()=>{
  let localData=localStorage.getItem('Sareitem')
    

    if(localData==='[]'||localData===null){
    
    return []
    }
    else{
    
      return JSON.parse(localData)
 
    }
 }


 getItem()
const initialState = {
  cart:getItem(),
  total_item: (JSON.parse(localStorage.getItem('items'))===null?0:JSON.parse(localStorage.getItem('items'))),
 total_amount:(JSON.parse(localStorage.getItem('amount'))===null?0:JSON.parse(localStorage.getItem('amount'))),
  shipping_fee: 40000,
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  const [user,setuser]=useState({})
  const [toggle,settoggle]=useState(false)
  
 
  useEffect(()=>{
    localStorage.setItem('Sareitem',JSON.stringify(state.cart))
    localStorage.setItem('items',state.total_item)
    localStorage.setItem('amount',state.total_amount)

},[state.cart,state.total_item,state.total_amount])

  function Tog(){
    settoggle(!toggle)
  }


 useEffect(()=>{
    onAuthStateChanged(auth, (currentuser) => {
      try{
    
      setuser(currentuser);
      }catch(err){
        console.log(err.message)
      }
    });
  },[toggle])

  const addToCart =async (id, color, amount, product) => {
   dispatch({ type: "ADD_TO_CART", payload: { id, color, amount, product } });

   };

  const removeItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };

  const cartReset = () => {
    dispatch({ type: "RESET_CART" });
  };


 
 

  return (
    <CartContext.Provider value={{ ...state, addToCart, removeItem,user,Tog,cartReset }}>
      {children}
    </CartContext.Provider>
  );
};


export { CartProvider, CartContext };