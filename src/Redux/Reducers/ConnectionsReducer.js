import {
    SET_TOTAL_CONNECTIONS, SET_CONNECTION_INVITATION_LIST, SET_CONNECTIONS_LIST
} from "../Types";


const initialState = {
    totalConnections: '326',
    connectionInvitationList: [
        {
            imageUrl: "https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg",
            name: "Matt Thompson",
            title: "Graphics designer / director",
            description: "Memon Network + 25 Connections"
        },
    ],
    connectionsList: [
        {
            imageUrl: "https://cdn.iconscout.com/icon/free/png-512/avatar-373-456325.png",
            name: "Claire Sharwood",
            title: "Cheif manager",
            description: "Memon Network + 25 Connections"
        },
        {
            imageUrl: "https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg",
            name: "Kristen Mckellar",
            title: "Manager of Bank Attara",
            description: "Memon Network + 25 Connections"
        },
        {
            imageUrl: "https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/7_avatar-512.png",
            name: "Shaun Gardner",
            title: "Software Architect",
            description: "Memon Network + 25 Connections"
        },
    ]
};

const ConnectionsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TOTAL_CONNECTIONS:
            return {
                ...state,
                totalConnections: action.payload
            };
        case SET_CONNECTION_INVITATION_LIST:
            return {
                ...state,
                connectionInvitationList: action.payload
            };
        case SET_CONNECTIONS_LIST:
            return {
                ...state,
                connectionsList: action.payload
            };
        default:
            return state;
    }
};

export default ConnectionsReducer;
