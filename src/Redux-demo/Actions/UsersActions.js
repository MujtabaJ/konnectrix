import {
    SET_USER
} from "../Types";

export const getUsersList = usersLists => {
    return {
        type: SET_USER,
        payload: usersLists
    };
};