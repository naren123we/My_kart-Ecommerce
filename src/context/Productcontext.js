import { createContext, useEffect,useReducer } from "react";
import Productreducer from "../reducers/Productreducer";


const AppContext=createContext();
const initialstate={
    loading:false,
    error:false,
    product:[],
    trending:[],
   
}
const App_provider=({children})=>{
    const [state,dispatch]=useReducer(Productreducer,initialstate)

      const getproduct=async()=>{
        dispatch({type:"SET_LOAD"})
        try{
          const res =await fetch("https://my-kart-server.vercel.app/api/v1/getallproduct")
          const data =await res.json()  
              console.log(data?.data);
          setTimeout(()=>{
            dispatch({type:"SET_DATA",data:data?.data})
          },700)
       }catch(error) {
           dispatch({type:"SET_ERROR",value:error.message })
      }
    }
      
    

      
      
        useEffect(()=>{
           getproduct()
        },[])


    return(
     < AppContext.Provider  value={{...state }}>{children}</AppContext.Provider>
    )
}
export {App_provider,AppContext}