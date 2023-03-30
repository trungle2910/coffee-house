import api from "../../apiService";
import * as types from "../constants/drink.constans.js";

const getAllDrink = () => async (dispatch) => {
    dispatch({ type: types.GET_ALL_DRINKS_REQUEST, payload: null });
    try {
      const res = await api.get(
        `/drink`
      );
      dispatch({
        type: types.GET_ALL_DRINKS_SUCCESS,
        payload: res.data
      });
      console.log("res in action", res)
      console.log("payload res.data", res.data)
    } catch (error) {
      dispatch({ type: types.GET_ALL_DRINKS_FAILURE, payload: error });
    }
  };
const getDrinkById = (drinkId) => async (dispatch) =>{
    dispatch({type: types.GET_SINGLE_DRINK_REQUEST, payload:null});
    try {
        const res = await api.get(`/drink/${drinkId}`);
        dispatch({
          type: types.GET_SINGLE_DRINK_SUCCESS,
          payload: res.data,
        });
    } catch (error) {
        dispatch({type: types.GET_SINGLE_DRINK_FAILURE, payload: error})
    }
};

export const drinkAction ={
    getAllDrink,
    getDrinkById
  }