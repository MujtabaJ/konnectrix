import { ISignUpError } from "../Errors";
import { NavigationScreenProp } from "react-navigation";

export interface IFieldsProps {
    Error: ISignUpError
    fieldsValues: ISignUpFieldsObject
    onChange: (value: string, fieldName: string) => void
}

export interface ISignUpFieldsObject {
    email: string
    lastName: string
    password: string
    firstName: string
    phoneNumber: string
    confirmPassword: string
}

export interface IRegistrationProps {
    navigation: NavigationScreenProp<any, any>
    setErrorMsg: Function
}

export interface IRegistrationState {
    isLoading: boolean,
    Error: ISignUpError,
    successText: string,
    CheckBoxClicked: boolean,
    fieldsValues: ISignUpFieldsObject
}