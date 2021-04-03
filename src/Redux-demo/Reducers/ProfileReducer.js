import {
   SET_PHONE_NUMBER, SET_EMAIL, SET_FIRST_NAME, SET_LAST_NAME, SET_DATE_OF_BIRTH,
   SET_COUNTRY_NAME, SET_OCCUPATION, SET_GENDER, SET_EDUCATION_LIST, SET_EXPERIENCE_LIST, SET_ADDRESS, RESET_PROFILE
} from "../Types";

const profileInformation = {
   firstName: "",
   lastName: "",
   countryName: "",
   occupation: "",
   dateOfBirth: "",
   gender: "",
   phoneNumber: "",
   emailAddress: "",
   address: "",
   educationList: [
      // { school: "SchoolName_1", degree: "DegreeName", grade: "B+", startDate: "2020", endDate: "2022" },
      // { school: "SchoolName_2", degree: "DegreeName", grade: "B+", startDate: "2020", endDate: "2022" }
   ],
   experienceList: [
      // { title: "OragnizationName", selfEmployed: "SE", companyName: "B+", location: "KHI", startDate: "2020", endDate: "2022" },
   ]
};

const initialState = {
   ...profileInformation,
};

const ProfileReducer = (state = initialState, action) => {
   switch (action.type) {
      case SET_FIRST_NAME:
         return {
            ...state,
            firstName: action.payload
         };
      case SET_LAST_NAME:
         return {
            ...state,
            lastName: action.payload
         };
      case SET_COUNTRY_NAME:
         return {
            ...state,
            countryName: action.payload
         };
      case SET_OCCUPATION:
         return {
            ...state,
            occupation: action.payload
         };
      case SET_DATE_OF_BIRTH:
         return {
            ...state,
            dateOfBirth: action.payload
         };
      case SET_GENDER:
         return {
            ...state,
            gender: action.payload
         };
      case SET_PHONE_NUMBER:
         return {
            ...state,
            phoneNumber: action.payload
         };
      case SET_EMAIL:
         return {
            ...state,
            emailAddress: action.payload
         };
      case SET_ADDRESS:
         return {
            ...state,
            address: action.payload
         };
      case SET_EDUCATION_LIST:
         return {
            ...state,
            educationList: action.payload
         };
      case SET_EXPERIENCE_LIST:
         return {
            ...state,
            experienceList: action.payload
         };
      case RESET_PROFILE:
         return {
            firstName: "",
            lastName: "",
            country: "",
            occupation: "",
            dateOfBirth: "",
            gender: "",
            phoneNumber: "",
            emailAddress: "",
            address: "",
            educationList: [],
            experienceList: []
         };
      default:
         return state;
   }
};

export default ProfileReducer;
