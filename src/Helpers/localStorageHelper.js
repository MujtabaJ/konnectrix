import AsyncStorage from '@react-native-community/async-storage';

const LOCAL_STORAGE_ACCESS_TOKEN_KEY = "user-access-token-data";
const LOCAL_STORAGE_REMEBER_ME_ISCHECKED = "user-remember-me-ischecked";
const LOCAL_STORAGE_USER_ID = "userId";

export default class LocalStorageHelper {

    // set, get and remove access tokens
    static async setAccessTokensAsync(storage) {
        await AsyncStorage.setItem(LOCAL_STORAGE_ACCESS_TOKEN_KEY, JSON.stringify(storage));
    }
    static async getAccessTokensAsync() {
        let rawData = await AsyncStorage.getItem(LOCAL_STORAGE_ACCESS_TOKEN_KEY);
        let storage = JSON.parse(rawData);
        if (storage) {
            storage.expiresIn = new Date(storage?.expiresIn);
            return storage;
        }
    }
    static async removeAccessTokensAsync() {
        await AsyncStorage.removeItem(LOCAL_STORAGE_ACCESS_TOKEN_KEY);
    }


    // set, get and remove remember me check
    static async setRemeberMeCheckAsync(storage) {
        await AsyncStorage.setItem(LOCAL_STORAGE_REMEBER_ME_ISCHECKED, JSON.stringify(storage));
    }
    static async getRemeberMeCheckAsync() {
        let rawData = await AsyncStorage.getItem(LOCAL_STORAGE_REMEBER_ME_ISCHECKED);
        let storage = JSON.parse(rawData);
        if (storage) {
            return storage;
        }
    }
    static async removeRemeberMeCheckAsync() {
        await AsyncStorage.removeItem(LOCAL_STORAGE_REMEBER_ME_ISCHECKED);
    }


    // set, get and remove USERNAME
    static async setUserIdAsync(storage) {
        await AsyncStorage.setItem(LOCAL_STORAGE_USER_ID, JSON.stringify(storage));
    }
    static async getUserIdAsync() {
        let rawData = await AsyncStorage.getItem(LOCAL_STORAGE_USER_ID);
        let storage = JSON.parse(rawData);
        if (storage) {
            return storage;
        }
    }
    static async removeUserIdAsync() {
        await AsyncStorage.removeItem(LOCAL_STORAGE_USER_ID);
    }
}

