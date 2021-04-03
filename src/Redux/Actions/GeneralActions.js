import {
    SET_ERROR_MSG, SET_SUCCESS_MSG, RESET_ERROR_MSG, RESET_SUCCESS_MSG
} from "../Types";

export const insertErrorMsg = msg => {
    return {
        type: SET_ERROR_MSG,
        payload: msg
    };
};
export const inserSuccessMsg = msg => {
    return {
        type: SET_SUCCESS_MSG,
        payload: msg
    };
};
export const resetErrorMsg = () => {
    return {
        type: RESET_ERROR_MSG
    }
}
export const resetSuccessMsg = () => {
    return {
        type: RESET_SUCCESS_MSG
    }
}