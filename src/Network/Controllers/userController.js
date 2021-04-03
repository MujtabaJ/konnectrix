import { Platform } from "react-native";
import { updateUserProfile, updateUserEducation, updateUserExperience, updateUserProfilePic } from "../Services/userService";


export async function updateUserProfilePicController(userImage, props) {
    let formData = new FormData();
    formData.append("obj", {
        uri: Platform.OS === "android" ? userImage : userImage.replace("file://", ""),
        name: "PostImage",
        type: "image/png",
        dateModified: new Date()
    }, userImage);

    const response = await updateUserProfilePic(formData);

    return new Promise((resolve, reject) => {
        if (response.code === 102 || response.code === 101) {
            resolve(response.data);
        } else {
            reject(response.message);
        }
    });
}

export async function updateUserProfileController(_id, firstName, lastName, city, state, about, aboutDescription, country, dateOfBirth, occupation, gender) {
    const body = {
        // _id: _id,
        firstName: firstName,
        lastName: lastName,
        city: city,
        state: state,
        about: about,
        aboutDescription: aboutDescription,
        country: country,
        dateOfBirth: dateOfBirth == "" ? "0001-01-01T00:00:00+00:00" : dateOfBirth,
        occupation: occupation,
        gender: gender
    }
    const response = await updateUserProfile(body);

    return new Promise((resolve, reject) => {
        if (response.code === 102 || response.code === 101) {
            resolve(response.data);
        } else {
            reject(response.message);
        }
    });
}
export async function updateUserEducationController(_id, school, degree, grade, startDate, endDate) {
    var body = {}
    if (_id == "") {
        body = {
            school: school,
            degree: degree,
            startDate: startDate,
            endDate: endDate,
            grade: grade
        }
    } else {
        body = {
            _id: _id,
            school: school,
            degree: degree,
            startDate: startDate,
            endDate: endDate,
            grade: grade
        }
    }

    const response = await updateUserEducation(body);
    return new Promise((resolve, reject) => {
        if (response.code === 102 || response.code === 101) {
            resolve(response.data);
        } else {
            reject(response.message);
        }
    });
}
export async function updateUserExperienceController(_id,jobTitle, selfEmployeed, companyName, location, startDate, endDate) {
    var body = {}
    if (_id == "") {
        body = {
            jobTitle:jobTitle,
            selfEmployeed: selfEmployeed,
            companyName: companyName,
            location: location,
            startDate: startDate,
            endDate: endDate
        }
    } else {
        body = {
            _id: _id,
            jobTitle:jobTitle,
            selfEmployeed: selfEmployeed,
            companyName: companyName,
            location: location,
            startDate: startDate,
            endDate: endDate
        }
    }
    const response = await updateUserExperience(body);
    return new Promise((resolve, reject) => {
        if (response.code === 102 || response.code === 101) {
            resolve(response.data);
        } else {
            reject(response.message);
        }
    });
}