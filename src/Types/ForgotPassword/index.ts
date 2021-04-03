import { NavigationScreenProp } from "react-navigation";
import { IHasError } from "../Errors";


export interface IForgotProps {
    navigation: NavigationScreenProp<any, any>
    errorMsg: string
    setErrorMsg: Function
    setSuccessMsg: Function
}

export interface IForgotState {
    Error: IHasError
    email: string
    errorMsg: string,
    loading: boolean,
}