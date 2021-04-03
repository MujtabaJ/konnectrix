import {
    SET_NOTIFICATIONS_LIST, SET_NOTIFICATIONS_BADGE
} from "../Types";

export const insertNotificationsList = notificationsList => {
    return {
        type: SET_NOTIFICATIONS_LIST,
        payload: notificationsList
    };
};

export const insertNotificationsBadge = notificationsBadge => {
    return {
        type: SET_NOTIFICATIONS_BADGE,
        payload: notificationsBadge
    };
};