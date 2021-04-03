import {
    SET_PHONE_NUMBER, SET_EMAIL, SET_FIRST_NAME, SET_LAST_NAME, SET_DATE_OF_BIRTH, 
    SET_COUNTRY_NAME, SET_OCCUPATION, SET_GENDER, SET_EDUCATION_LIST, SET_EXPERIENCE_LIST, SET_ADDRESS, 
    RESET_PROFILE
} from "../Types";

export const insertPhoneNumber = phoneNumber => {
    return {
        type: SET_PHONE_NUMBER,
        payload: phoneNumber
    };
};
export const insertEmail = emailAddress => {
    return {
        type: SET_EMAIL,
        payload: emailAddress
    };
};
export const insertFirstName = firstName => {
    return {
        type: SET_FIRST_NAME,
        payload: firstName
    };
};
export const insertLastName = lastName => {
    return {
        type: SET_LAST_NAME,
        payload: lastName
    };
};
export const insertDateOfBirth = dateOfBirth => {
    return {
        type: SET_DATE_OF_BIRTH,
        payload: dateOfBirth
    };
};
export const insertCountryName = countryName => {
    return {
        type: SET_COUNTRY_NAME,
        payload: countryName
    };
};
export const insertOccupation = occupation => {
    return {
        type: SET_OCCUPATION,
        payload: occupation
    };
};
export const insertGender = gender => {
    return {
        type: SET_GENDER,
        payload: gender
    };
};
export const insertEducationList = educationList => {
    return {
        type: SET_EDUCATION_LIST,
        payload: educationList
    };
};
export const insertExperienceList = experienceList => {
    return {
        type: SET_EXPERIENCE_LIST,
        payload: experienceList
    };
};
export const insertAddress = address => {
    return {
        type: SET_ADDRESS,
        payload: address
    };
};
export const resetProfile = () => {
    return {
        type: RESET_PROFILE
    }
}