import {
    SET_POST
} from "../Types";

const initialState = {
    postsList: [
        
    ]
}

const PostsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_POST:
            return {
                ...state,
                postsList: action.payload
            };
        default:
            return state;
    }
}

export default PostsReducer;