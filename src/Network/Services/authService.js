import EndPoint from "../../Constants/EndPoints";
import { GetAsync, PostAsync } from "./httpRequests";
import LocalStorageHelper from "../../Helpers/localStorageHelper";

export async function emailExistsAsync(email) {
    const { doesEmailExist } = EndPoint;
    return await GetAsync(doesEmailExist(email), false);
}
export async function isEmailVerifiedAsync() {
    const { isEmailVerified } = EndPoint;
    return await GetAsync(isEmailVerified, false);
}
export async function refreshAccessTokenAsync(token) {
    const { refreshAccessToken } = EndPoint;
    return await GetAsync(refreshAccessToken(token), false);
}
export async function loginUserAsync(body) {
    const { login } = EndPoint;
    return await PostAsync(login, body, false);
}
export async function logoutAsync() {
    const { logout } = EndPoint;
    return await GetAsync(logout, true);
}
export async function getUserProfileAsync() {
    const { getUserProfile } = EndPoint;
    return await GetAsync(getUserProfile, true);
}
export async function forgotPassword(body) {
    const { forgotPassword } = EndPoint;
    return await PostAsync(forgotPassword, body, false);
}
export async function resetPassword(body) {
    const { resetPassword } = EndPoint;
    return await PostAsync(resetPassword, body, false);
}
export async function registerUserAsync(body) {
    const { registration } = EndPoint;
    return await PostAsync(registration, body, false);
}
export async function validateAccessToken() {
    let tokens = await LocalStorageHelper.getAccessTokensAsync();
    // return accessToken if not expired
    if (tokens.accessToken !== undefined && tokens.expiresIn > new Date()) {
        return tokens.accessToken;
    }
    // renew access token and return
    if (tokens.refreshToken !== undefined) {
        let res = await refreshAccessTokenAsync(tokens.refreshToken);
        if (res.status) {
            await LocalStorageHelper.setAccessTokensAsync({
                accessToken: res.data.accessToken,
                refreshToken: res.data.refreshToken,
                expiresIn: res.data.expiresIn
            })
            return res.data.accessToken;
        }
    }
}

