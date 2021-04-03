import {
    SET_POST
} from "../Types";

export const insertPostsList = postList => {
    return {
        type: SET_POST,
        payload: postList
    };
};