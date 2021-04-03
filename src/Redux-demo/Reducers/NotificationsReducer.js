import {
    SET_NOTIFICATIONS_LIST, SET_NOTIFICATIONS_BADGE
} from "../Types";


const initialState = {
    notificationsList: [
        {
            imageUrl: "https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg",
            name: "Simmons Henry",
            description: "Is now following you",
            time: "2 min ago"
        },
        {
            imageUrl: "https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/7_avatar-512.png",
            name: "Emilia Smith",
            description: "Shared your post",
            time: "20 min ago"
        },
        {
            imageUrl: "https://image.flaticon.com/icons/png/512/147/147144.png",
            name: "Memon Network",
            description: "Approved your request",
            time: "2 hours ago"
        },
        {
            imageUrl: "https://cdn.iconscout.com/icon/free/png-512/avatar-373-456325.png",
            name: "Claire Sharwood",
            description: "Commented on your post",
            time: "2 hours ago"
        },
        {
            imageUrl: "https://cdn1.iconfinder.com/data/icons/avatars-1-5/136/78-512.png",
            name: "Elizabeth Johns",
            description: "Invited you to join",
            time: "5 hours ago"
        }
    ],
    notificationsBadge: "4"
};

const NotificationsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_NOTIFICATIONS_LIST:
            return {
                ...state,
                notificationsList: action.payload
            };
            case SET_NOTIFICATIONS_BADGE:
            return {
                ...state,
                notificationsBadge: action.payload
            };
        default:
            return state;
    }
};

export default NotificationsReducer;
