import EndPoint from "../../Constants/EndPoints";
import {   PutAsync, PutWithFormDataAsync } from "./httpRequests";

export async function updateUserProfile(body) {
    const { updateUserProfile } = EndPoint;
    return await PutAsync(updateUserProfile, body, true);
}
export async function updateUserProfilePic(body) {
    const { updateUserProfilePic } = EndPoint;
    return await PutWithFormDataAsync(updateUserProfilePic, body, true);
}
export async function updateUserEducation(body) {
    const { updateUserEducation } = EndPoint;
    return await PutAsync(updateUserEducation, body, true);
}
export async function updateUserExperience(body) {
    const { updateUserExperience } = EndPoint;
    return await PutAsync(updateUserExperience, body, true);
}