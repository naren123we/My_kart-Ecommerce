import { useContext,createContext,useReducer,useEffect,useState } from "react"
import { AppContext } from "./Productcontext"
import FilterReducer from "../reducers/FilterReducer"

 const FillterContext=createContext()
 
 
 const initialState={
    filterProduct:[],
    AllProduct:[]
 }
const FilterProvider = ({children}) => {
  const[toggle,settoggle]=useState(true)

  function Toggle(){
    settoggle(!toggle)
  }

    const {product}=useContext(AppContext)
    const [state,dispatch]=useReducer(FilterReducer,initialState)
    function sort(e){
        const value=e.target.value
        dispatch({type:'SET_CATEGORY',value:value})
}

function search(value){
    dispatch({type:'SET_SEARCH',value:value})
}

useEffect(() => {
    dispatch({ type: "LOAD_FILTER_PRODUCTS", payload: product });
   
  }, [product,toggle]);

  return <FillterContext.Provider value={{...state,sort,Toggle,search}}>{children}</FillterContext.Provider>
}

export {FilterProvider,FillterContext} 
