import {
    SET_NETWORKS
} from "../Types";

export const setNetworksList = networksList => {
    return {
        type: SET_NETWORKS,
        payload: networksList
    };
};