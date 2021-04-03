//remove unused vars
import {
    emailExistsAsync, isEmailVerifiedAsync, loginUserAsync, logoutAsync, resetPassword, registerUserAsync, forgotPassword, getNetworksList, connectNetwork, createNetwork, getUserProfileAsync
} from "../Services/authService";
import LocalStorageHelper from "../../Helpers/localStorageHelper";
import AsyncStorage from "@react-native-community/async-storage";
import { Translate } from "@i18n/localization";
import { CommonActions } from "@react-navigation/routers";

export async function emailExists(email) {
    return await emailExistsAsync(email);
}

export async function loginUserController(email, password, isCheckedRememberMe, props) {
    const body = {
        email,
        password
    };
    const response = await loginUserAsync(body);
    if (response.code === 102) {
        // await isEmailVerifiedAsync();
        await LocalStorageHelper.setAccessTokensAsync(response.data);
        await LocalStorageHelper.setRemeberMeCheckAsync(isCheckedRememberMe);
        await LocalStorageHelper.setUserIdAsync(response.data.userId);
        await getUserProfileController(props).then((data) => {
            if (data.isNetworkAdminOrNetworkUser) {
                // props.navigation.navigate('DrawerNavigation')
                props.navigation.dispatch(
                    CommonActions.reset({
                        index: 1,
                        routes: [
                            { name: 'DrawerNavigation' }
                        ],
                    })
                )
            } else {
                props.navigation.navigate('Welcome')
            }
        }).catch((err) => {
            console.log(err);
            // props.navigation.navigate('Welcome')
        });
        return false;
    } else {
        return response.message;
    }
}


export async function getUserProfileController(props) {

    const response = await getUserProfileAsync();
    return new Promise((resolve, reject) => {
        if (response.code === 102 || response.code === 101) {
            props.setFirstName(response.data.data[0].firstName);
            props.setLastName(response.data.data[0].lastName);
            props.setCountry(response.data.data[0].country);
            props.setOccupation(response.data.data[0].occupation);
            props.setEmailAddress(response.data.data[0].email);
            props.setPhoneNumber(response.data.data[0].phoneNumber);
            props.setDateOfBirth(response.data.data[0].dateOfBirth);
            props.setGender(response.data.data[0].gender);
            props.setProfilePicture(response.data.data[0].profilePicture);
            props.setEducationList(response.data.data[0].userEducation);
            props.setExperienceList(response.data.data[0].userExperience);
            props.setAddress(response.data.data[0].city + ", " + response.data.data[0].state + ", " + response.data.data[0].country);
            props.setabout(response.data.data[0].about);
            props.setaboutDescription(response.data.data[0].aboutDescription);
            props.setcity(response.data.data[0].city);
            props.setState1(response.data.data[0].state);
            props.setUserId(response.data.data[0].userId);
            resolve(response.data.data[0]);
            // if(response.data.data.isNetworkAdminOrNetworkUser ){
            //     resolve(response.data.data.isNetworkAdminOrNetworkUser);
            // } else {
            //     reject(response.message);
            // }
        } else if (response.code === 98) {
            reject(response.message);
        } else {
            reject(response.message);
        }
    });
}

export async function registerUserController(fieldsValues, props) {
    const body = {
        firstName: fieldsValues.firstName,
        lastName: fieldsValues.lastName,
        email: fieldsValues.email,
        phoneNumber: fieldsValues.phoneNumber,
        password: fieldsValues.password,
        confirmPassword: fieldsValues.confirmPassword,
        role: [
            "User"
        ]
    }
    const response = await registerUserAsync(body);
    return new Promise((resolve, reject) => {
        if(response === undefined) {
            reject(response.message);
        } else if (response.code === 102 || response.code === 101) {
            resolve(response.message);
        } else {
            reject(response.message);
        }
    });
}

export async function logoutUserController(props) {
    props.resetPosts();
    props.resetNetworks();
    props.resetProfile();
    props.navigation.navigate('AuthStack');
    await logoutAsync();
    await AsyncStorage.clear();
}

export async function forgotPasswordController(state, props) {
    const emailAddress = state.email;
    const body = {
        "email": emailAddress
    }
    const response = await forgotPassword(body);

    if (response.code === 102 || response.code === 101) {
        setTimeout(() => {
            props.navigation.navigate('ResetPassword');
        }, 2500);
    } if (response.code === 98) {
        return response.message;
    } else {
        return response.message;
    }
}
export async function resetPasswordController(state, props) {
    const { code, password, confirmPassword } = state;
    const body = {
        "pin": code,
        "password": password,
        "confirmPassword": confirmPassword
    }
    const response = await resetPassword(body);
    return new Promise((resolve, reject) => {
        if(response === undefined) {
            reject(response.message);
        } else if (response.code === 102 || response.code === 101) {
            resolve(response.message);
        } else {
            reject(response.message);
        }
    });
}
