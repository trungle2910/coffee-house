import * as types from "../constants/drink.constans.js"
const initialState = {
    loading: false,
    drinks:[],
}

const drinkReducers = (state = initialState, action) =>{
    switch (action.type) {
        case types.GET_ALL_DRINKS_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case types.GET_ALL_DRINKS_SUCCESS:
            return{
                ...state,
                loading: false,
                drinks: action.payload,
            }
        case types.GET_ALL_DRINKS_FAILURE:
            return {
                ...state,
                 loading: true,
                };    
        default:
             return state;
    }
}



export default drinkReducers;