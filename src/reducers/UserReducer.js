const UserReducer = (state, action) => {
    if (action.type === "LOGIN") {
      let { user,token,options } = action.payload;
      console.log(options,"inreducer");
  
    localStorage.setItem('user',JSON.stringify(user));
    localStorage.setItem('token',token);
    localStorage.setItem('expires',JSON.stringify(options.expires));
 
   
  
      return {
         user,
         token,
         expires:options.expires,
      };
    
    }
  
    if (action.type === "SIGNUP") {
        let { user,token ,options} = action.payload;
        localStorage.setItem('user',JSON.stringify(user));
        localStorage.setItem('token',token);
        localStorage.setItem('expires',JSON.stringify(options.expires));
      

        return {
            user,
            token,
            expires:options.expires,
         };
    }

    if (action.type === "LOGOUT") {
     
        localStorage.removeItem('user');
        localStorage.removeItem('token');
        localStorage.removeItem('expires');
   
        return {
            user:null,
            token:null,
            expires:null
         };
    }
  
    return state;
  };
  
  export default UserReducer;