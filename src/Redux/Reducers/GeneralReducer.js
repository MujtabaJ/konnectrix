import {
    SET_ERROR_MSG, SET_SUCCESS_MSG, RESET_ERROR_MSG, RESET_SUCCESS_MSG,
 } from "../Types";

 
 const userRegistrationError = {
    errorMsg: "",
    successMsg: ""
 };
 
 const initialState = {
    ...userRegistrationError,
 };
 
 const ProfileReducer = (state = initialState, action) => {
    switch (action.type) {
       case SET_ERROR_MSG:
          return {
             ...state,
             errorMsg: action.payload
          };
       case SET_SUCCESS_MSG:
          return {
             ...state,
             successMsg: action.payload
          };
       case RESET_ERROR_MSG:
          return {
             ...state,
             errorMsg: ""
          };
       case RESET_SUCCESS_MSG:
          return {
             ...state,
             successMsg: ""
          };
       default:
          return state;
    }
 };
 
 export default ProfileReducer;
 