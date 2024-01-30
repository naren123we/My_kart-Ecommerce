import { createContext, useReducer} from "react";
import UserReducer from "../reducers/UserReducer";





const UserContext=createContext();


const initialState = {
    user: localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null,
    token: localStorage.getItem("token") ? localStorage.getItem("token") : null,
    expires:localStorage.getItem("expires") ? JSON.parse(localStorage.getItem("expires")) : null,
};
  


   const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(UserReducer, initialState);
 
 
  const userlogin =async (email,password) => {

    try{

        const url = 'https://my-kart-server.vercel.app/api/v1/login';
        const data={
          email:email,
          password:password
        }
        const jsonData = JSON.stringify(data);
      
       const res= await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: jsonData
        })
      
        const json=await res.json();
        if(json.success){
            dispatch({ type: "LOGIN", payload: { user:json.user,token:json.token,options:json.options } });

        }
       
        return json;
      

    }catch(err){
        console.log(err)
    }
 
    };
 
   const usersignup=async (name,email,password) => {

    try{

        const url = 'https://my-kart-server.vercel.app/api/v1/signup';
        const data={
            name:name,
          email:email,
          password:password
        }
        const jsonData = JSON.stringify(data);
      
       const res= await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: jsonData
        })
      
        const json=await res.json();
      if(json.success){
        dispatch({ type: "SIGNUP", payload: { user:json.user,token:json.token,options:json.options } });
      }
      return json;

   }catch(err){
    console.log(err);
   } 



   }

   function userlogout(){
    try{

     dispatch({ type: "LOGOUT" });
   
   
    }catch(err){
     console.log(err);
    }
}
 

  return (
    <UserContext.Provider value={{ ...state,userlogin,usersignup,userlogout}}>
      {children}
    </UserContext.Provider>
  );
};


export { UserProvider, UserContext };