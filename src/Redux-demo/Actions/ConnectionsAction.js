import {
    SET_TOTAL_CONNECTIONS, SET_CONNECTION_INVITATION_LIST, SET_CONNECTIONS_LIST
} from "../Types";

export const insertTotalConnections = totalConnections => {
    return {
        type: SET_TOTAL_CONNECTIONS,
        payload: totalConnections
    };
};

export const insertConnectionInvitationList = connectionInvitationList => {
    return {
        type: SET_CONNECTION_INVITATION_LIST,
        payload: connectionInvitationList
    };
};

export const insertConnectionsList = connectionsList => {
    return {
        type: SET_CONNECTIONS_LIST,
        payload: connectionsList
    };
};