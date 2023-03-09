

const FilterReducer = (state, action) => {
    switch (action.type) {
        case 'SET_CATEGORY':
            let tempproduct;
            if (action.value !== 'All') {
                tempproduct = state.AllProduct.filter((elm) => {
                    return elm.category === action.value
                })
            }
            else {
                tempproduct = state.AllProduct
            }
            return {
                ...state,
                filterProduct: tempproduct
            }

        case 'LOAD_FILTER_PRODUCTS':
            return {
                filterProduct: action.payload,
                AllProduct: action.payload
            }

        case 'SET_SEARCH':
           let fakeproduct = state.AllProduct.filter((elm) => {
                return (elm.category === action.value||elm.name===action.value)
           })
            return {
                ...state,
                filterProduct: fakeproduct,
               }
        default:
            return state;
    }

}

export default FilterReducer
