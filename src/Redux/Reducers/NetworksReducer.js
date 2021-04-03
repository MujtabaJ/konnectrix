import {
    SET_PUBLIC_NETWORKS_LIST, SET_USER_CONNECTED_NETWORKS_LIST, RESET_NETWORKS
} from "../Types";


const initialState = {
    userConnectedNetworksList: [],
    publicNetworksList: []
};

const NetworksReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_CONNECTED_NETWORKS_LIST:
            return {
                ...state,
                userConnectedNetworksList: action.payload
            };
        case SET_PUBLIC_NETWORKS_LIST:
            return {
                ...state,
                publicNetworksList: action.payload
            };
        case RESET_NETWORKS:
            return {
                userConnectedNetworksList: []
            }
        default:
            return state;
    }
};

export default NetworksReducer;
