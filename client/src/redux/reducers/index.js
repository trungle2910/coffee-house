import { combineReducers } from "redux";
import drinkReducers from "./drink.reducers.js"


const rootReducer = combineReducers({
    drink: drinkReducers,
});

export default rootReducer;