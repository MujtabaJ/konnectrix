import { ICreateNetworkError } from "../Errors/index";
import { NavigationScreenProp } from "react-navigation";

export interface ICreateNetworkProps {
    navigation: NavigationScreenProp<any, any>
    errorMsg: string
    setErrorMsg: Function
    setSuccessMsg: Function
    name: string
    email: string
    phone: string
    designation: string
    message: string
    setModalVisible: Function
}
export interface ICreateNetworkState {
    Error: ICreateNetworkError
    name: string
    email: string
    phone: string
    designation: string
    modalVisible: boolean
    message: string
    errorMsg: string
}
export interface ICreateNetworkModal {
    name: string,
    email: string,
    phone: string,
    designation: string,
    message: string,
}