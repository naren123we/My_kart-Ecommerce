

const Productreducer = (state,action) => {
  switch (action.type){
    case "SET_LOAD":
        return{
            ...state,
            loading:true
        }
    case 'SET_DATA':
        return{
            ...state,
            product:action.data,
            trending:action.data.filter((obj)=>{
                return obj.featured===true;
            }),
            loading:false
        } 
    case "SET_ERROR":
        return{
            ...state,
            error:action.value ,
            loading:false
        }   
    default:
        return state;
  }
  
}

export default Productreducer
