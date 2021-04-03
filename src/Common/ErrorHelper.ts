import Validator from "./Validator";
import { Translate } from "../i18n/localization";
import { IHasError, IHasResetError, ISignUpError, ICreateNetworkError } from "../Types/Errors";
import { ISignUpFieldsObject } from "../Types/Registration";
import { ICreateNetworkModal } from "../Types/CreateNetwork";

const letter = /[a-zA-Z]/;
const number = /[0-9]/;

const regex = {
    digitsPattern: /\d/,
    lettersPattern: /[a-zA-Z]/,
    lowerCasePattern: /[a-z]/,
    upperCasePattern: /[A-Z]/,
    wordsPattern: /\w/,
    specialCharacter: /\W/
 };

export default class ErrorHelper {



    constructor() {
    }

    static errorChecker(userName: string, password: string): IHasError {

        if (userName === "") {
            return { hasError: true, errorText: "", userBorder: true }
        }
        else if (!Validator.emailValidator(userName)) {
            return { hasError: true, errorText: Translate("Errors.invalidEmail") }
        }
        else if (password === "") {
            return { hasError: true, errorText: "", passwordBorder: true }
        }
        return { hasError: false, errorText: "" }
    }

    static errorEmailChecker(email: string): IHasError {
        if (email === "") {
            return { hasError: true, errorText: "", userBorder: true }
        }
        else if (!Validator.emailValidator(email)) {
            return { hasError: true, errorText: Translate("Errors.invalidEmail") }
        }
        return { hasError: false, errorText: "" }
    }
    static errorResetPasswordChecker(code: string, password: string, confirmPassword: string): IHasResetError {
        if (code === "") {
            return { hasError: true, errorText: "", userBorder: true }
        }
        else if (password === "") {
            return { hasError: true, errorText: "", passwordBorder: true }
        }
        else if (password.length < 8) {
            return { hasError: true, errorText: Translate("Errors.lessCharacters") }
        }
        else if (!letter.test(password) || !number.test(password)) {
            return { hasError: true, errorText: Translate("Errors.atLeastOne") }
        }
        else if (confirmPassword === "") {
            return { hasError: true, errorText: "", confirmPasswordBorder: true }
        }
        else if (confirmPassword.length < 8) {
            return { hasError: true, errorText: Translate("Errors.passwordsMatch") }
        }
        else if (!letter.test(confirmPassword) || !number.test(confirmPassword)) {
            return { hasError: true, errorText: Translate("Errors.passwordsMatch") }
        }
        return { hasError: false, errorText: "" }
    }
    static signUpErrorChecker(Fields: ISignUpFieldsObject): ISignUpError {
        if (Fields.firstName === "") {
            return { hasError: true, errorText: "", firstNameBorder: true }
        }
        else if (Fields.lastName === "") {
            return { hasError: true, errorText: "", lastNameBorder: true }
        }
        else if (Fields.email === "") {
            return { hasError: true, errorText: "", emailBorder: true }
        }
        else if (!Validator.emailValidator(Fields.email)) {
            return { hasError: true, errorText: Translate("Errors.invalidEmail") }
        }
        else if (Fields.phoneNumber === "") {
            return { hasError: true, errorText: "", phoneNumberBorder: true }
        }
        else if (Fields.password === "") {
            return { hasError: true, errorText: "", passwordBorder: true }
        }
        else if (Fields.password.length < 8) {
            return { hasError: true, errorText: Translate("Errors.lessCharacters") }
        }
        else if (!regex.lowerCasePattern.test(Fields.password) || !regex.upperCasePattern.test(Fields.password) || !number.test(Fields.password) || !regex.specialCharacter.test(Fields.password)) {
            return { hasError: true, errorText: Translate("Errors.atLeastOne") }
        }
        // else if (!regex.specialCharacter.test(Fields.password)) {
        //     return { hasError: true, errorText: Translate("Errors.atLeastOneSpecialCharacter") }
        // }
        // else if (Fields.confirmPassword.length < 8) {
        //     return { hasError: true, errorText: Translate("Errors.passwordsMatch") }
        // }
        // else if (!letter.test(Fields.confirmPassword) || !number.test(Fields.confirmPassword)) {
        //     return { hasError: true, errorText: Translate("Errors.passwordsMatch") }
        // }
        else if (Fields.confirmPassword === "") {
            return { hasError: true, errorText: "", confirmPasswordBorder: true }
        }
        else if (Fields.confirmPassword !== Fields.password) {
            return { hasError: true, errorText: Translate("Errors.passwordsMatch") }
        }
        return { hasError: false, errorText: "" }
    }
    static createNetworkRequestErrorChecker(Fields: ICreateNetworkModal): ICreateNetworkError {
        if (Fields.name === "") {
            return { hasError: true, errorText: "", nameBorder: true }
        }
        else if (Fields.email === "") {
            return { hasError: true, errorText: "", emailBorder: true }
        }
        else if (!Validator.emailValidator(Fields.email)) {
            return { hasError: true, errorText: Translate("Errors.invalidEmail") }
        }
        else if (Fields.phone === "") {
            return { hasError: true, errorText: "", phoneBorder: true }
        }
        else if (Fields.designation === "") {
            return { hasError: true, errorText: "", designationBorder: true }
        }
        else if (Fields.message === "") {
            return { hasError: true, errorText: "", messageBorder: true }
        }
        return { hasError: false, errorText: "" }

    }
}