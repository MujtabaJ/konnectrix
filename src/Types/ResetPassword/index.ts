import { NavigationScreenProp } from "react-navigation";
import { IHasError, IHasResetError } from "../Errors";


export interface IResetPasswordProps {
    navigation: NavigationScreenProp<any, any>
}

export interface IResetPasswordState {
    Error: IHasResetError
    code: string
    password: string
    confirmPassword: string,
    loading: boolean,
}