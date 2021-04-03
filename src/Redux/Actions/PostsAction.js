import {
    SET_FEED_POSTS_LIST, SET_USER_POSTS_LIST, SET_NETWORK_POSTS_LIST, RESET_POSTS
} from "../Types";

export const insertFeedPostsList = feedPostsList => {
    return {
        type: SET_FEED_POSTS_LIST,
        payload: feedPostsList
    };
};

export const insertUserPostsList = userPostsList => {
    return {
        type: SET_USER_POSTS_LIST,
        payload: userPostsList
    };
};

export const insertNetworkPostsList = networkPostsList => {
    return {
        type: SET_NETWORK_POSTS_LIST,
        payload: networkPostsList
    };
};

export const resetPosts= () => {
    return {
        type: RESET_POSTS
    }
}