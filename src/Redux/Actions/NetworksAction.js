import {
    SET_USER_CONNECTED_NETWORKS_LIST, SET_PUBLIC_NETWORKS_LIST, RESET_NETWORKS
} from "../Types";

export const insertUserConnectedNetworksList = userConnectedNetworksList => {
    return {
        type: SET_USER_CONNECTED_NETWORKS_LIST,
        payload: userConnectedNetworksList
    };
};

export const insertPublicNetworksList = publicNetworksList => {
    return {
        type: SET_PUBLIC_NETWORKS_LIST,
        payload: publicNetworksList
    };
};

export const resetNetworks = () => {
    return {
        type: RESET_NETWORKS
    }
}