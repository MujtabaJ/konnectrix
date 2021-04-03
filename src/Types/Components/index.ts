import { CSSProperties } from "react";
import { KeyboardTypeOptions } from "react-native";

export interface IInputFieldProps {
    containerStyle?: {}
    textAreaStyle?: any
    placeholder?: string;
    value?: string;
    secureTextEntry?: boolean;
    onChangeText: Function
    onFocus?: () => void
    keyboardType?: KeyboardTypeOptions;
    showRightIcon?: boolean;
    inputBorder?: string;
    inputPlaceholderColor?: string
    numberOfLines?: number
    maxLength?: number
}

export interface ICheckboxProps {
    checked: boolean
    disabled?: boolean
    style?: CSSProperties
}

export interface ICustomButtonProps {
    title: string
    onPress: Function
    buttonContainerStyle?: any
    buttonTextStyle?: any
    disabled?: boolean
}