import { IHasError } from "../Errors/index";
import { NavigationScreenProp } from "react-navigation";

export interface ILoginProps {
    navigation: NavigationScreenProp<any, any>
    errorMsg: string
    setErrorMsg: Function
}

export interface ILoginState {
    Error: IHasError
    email: string
    password: string
    isCheckedRememberMe: boolean
    isLoading: boolean
}