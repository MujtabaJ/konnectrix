export interface IHasError {
    hasError?: boolean,
    errorText?: string,
    userBorder?: boolean,
    passwordBorder?: boolean
}

export interface IErrorComponent {
    error: IHasError
}

export interface IHasResetError {
    hasError?: boolean,
    errorText: string,
    userBorder?: boolean,
    passwordBorder?: boolean,
    confirmPasswordBorder?: boolean,
}

export interface IErrorResetComponent {
    error: IHasResetError
}

export interface ISignUpError {
    hasError?: boolean,
    errorText?: string,
    firstNameBorder?: boolean,
    lastNameBorder?: boolean,
    emailBorder?: boolean,
    passwordBorder?: boolean,
    phoneNumberBorder?: boolean,
    confirmPasswordBorder?: boolean,
}

export interface ICreateNetworkError {
    hasError?: boolean,
    errorText?: string,
    nameBorder?: boolean,
    emailBorder?: boolean,
    phoneBorder?: boolean,
    designationBorder?: boolean,
    messageBorder?: boolean,
}