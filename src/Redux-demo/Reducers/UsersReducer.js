import {
    SET_USER
} from "../Types";


const initialState = {
    usersList: [
        {
            userId: "1",
            email: "tashfeen@mparsec.com",
            password: "ABcde@11",
            firstName: "Tashfeen",
            lastName: "Tipu",
            profileImage: "https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/7_avatar-512.png",
            title: "Software Developer"
        },
        {
            userId: "2",
            email: "ghulam@mparsec.com",
            password: "ABcde@11",
            firstName: "Ghulam",
            lastName: "Mujtaba",
            profileImage: "https://image.flaticon.com/icons/png/512/147/147144.png",
            title: "Team Lead"
        },
        {
            userId: "3",
            email: "hameer@mparsec.com",
            password: "ABcde@11",
            firstName: "Hameer",
            lastName: "Siddique",
            profileImage: "https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg",
            title: "Trainee"
        },
    ]
};

const UsersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER:
            return {
                ...state,
                usersList: action.payload
            };
        default:
            return state;
    }
};

export default UsersReducer;
