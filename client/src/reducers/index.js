import { combineReducers } from "redux";
import authReducers from "./authReducers";
import errorReducers from "./errorReducers";

export default combineReducers( {
    auth: authReducer,
    errors: errorReducer
});