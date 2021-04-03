import {
    SET_FEED_POSTS_LIST, SET_USER_POSTS_LIST, SET_NETWORK_POSTS_LIST, RESET_POSTS
} from "../Types";


const initialState = {
    feedPostsList: [],
    userPostsList: [],
    networkPostsList: [],
};

const PostsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_FEED_POSTS_LIST:
            return {
                ...state,
                feedPostsList: action.payload
            };
        case SET_USER_POSTS_LIST:
            return {
                ...state,
                userPostsList: action.payload
            };
        case SET_NETWORK_POSTS_LIST:
            return {
                ...state,
                networkPostsList: action.payload
            };
        case RESET_POSTS:
            return {
                feedPostsList: [],
                userPostsList: [],
                networkPostsList: []
            };
        default:
            return state;
    }
};

export default PostsReducer;
