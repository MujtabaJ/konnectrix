import {
    SET_NETWORKS
} from "../Types";



const initialState = {
    networksList: [
        {
            networkId: "1",
            name: "IBA",
            logo: "https://upload.wikimedia.org/wikipedia/en/1/1e/Institute_of_Business_Administration%2C_Karachi_%28logo%29.png",
            usersId: [
                "1",
                "2"
            ]
        },
        {
            networkId: "2",
            name: "mParsec",
            logo: "https://pbs.twimg.com/profile_images/902832116160913409/07gPVbEi_400x400.jpg",
            usersId: [
                "2"
            ]
        },
        {
            networkId: "3",
            name: "Kalsoft",
            logo: "https://media.glassdoor.com/sqll/247552/kalsoft-squarelogo-1431929944754.png",
            usersId: [
                "2",
                "3"
            ]
        }
    ]

};

const NetworksReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_NETWORKS:
            return {
                ...state,
                networksList: action.payload
            };
        default:
            return state;
    }
};

export default NetworksReducer;
