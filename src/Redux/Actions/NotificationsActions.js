import {
    SET_NOTIFICATIONS_LIST
} from "../Types";

export const insertNotificationsList = notificationsList => {
    return {
        type: SET_NOTIFICATIONS_LIST,
        payload: notificationsList
    };
};