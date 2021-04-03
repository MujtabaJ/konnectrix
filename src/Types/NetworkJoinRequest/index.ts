import { NavigationScreenProp } from "react-navigation";

export interface IState {
    toggleOverlay: boolean,
    networkDetails: any,
}

export interface IProps {
    navigation: NavigationScreenProp<any>,
    route: any,
}