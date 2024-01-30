const cartReducer = (state, action) => {
    if (action.type === "ADD_TO_CART") {
      let { id, color, amount, product } = action.payload;
    
      let cartProduct;
      
  
      cartProduct = {
        id: id + color,
        name: product.name,
        color,
        amount,
        image: product.image[0],
        price: product.price,
        max: product.stock, 
      };
  
      return {
        ...state,
        cart: [...state.cart, cartProduct],
        total_amount:state.total_amount+product.price*amount,
        total_item:state.total_item+amount
      };
    
    }
  
    if (action.type === "REMOVE_ITEM") {
      let updatedCart = state.cart.filter(
        (curItem) => curItem.id !== action.payload
      );
     let price=0;
     let updateItem=0;
      updatedCart.forEach(elm => {
        price=price+elm.price*elm.amount
        updateItem=updateItem+elm.amount
      });

      


      return ({
        ...state,
        cart: updatedCart,
        total_amount:price,
        total_item:updateItem
      }
      
      );
    }

    if(action.type === "RESET_CART"){
      localStorage.removeItem('Sareitem');
      localStorage.removeItem('items');
      localStorage.removeItem('amount');

      return {
        cart: [],
        total_amount:0,
        total_item:0
      }

    }
  
    return state;
  };
  
  export default cartReducer;