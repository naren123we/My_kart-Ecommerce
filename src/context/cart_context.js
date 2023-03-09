
import { createContext, useReducer ,useEffect} from "react";


import cartReducer from "../reducers/cartReducer";

const CartContext = createContext();
  const getItem=()=>{
   let localData=localStorage.getItem('Sareitem')
    
     if(localData==='[]'){
     
      return []
     }
     else{
     
      return JSON.parse(localData)
  
     }
  }

const initialState = {
  cart:getItem(),
  total_item: JSON.parse(localStorage.getItem('items')),
  total_amount: JSON.parse(localStorage.getItem('amount')),
  shipping_fee: 40000,
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  useEffect(()=>{
      localStorage.setItem('Sareitem',JSON.stringify(state.cart))
      localStorage.setItem('items',state.total_item)
      localStorage.setItem('amount',state.total_amount)
  
  },[state.cart,state.total_item,state.total_amount])

  const addToCart = (id, color, amount, product) => {
    dispatch({ type: "ADD_TO_CART", payload: { id, color, amount, product } });
  };

  const removeItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };

  return (
    <CartContext.Provider value={{ ...state, addToCart, removeItem }}>
      {children}
    </CartContext.Provider>
  );
};


export { CartProvider, CartContext };