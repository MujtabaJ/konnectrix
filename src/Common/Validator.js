// import { BackHandler } from 'react-native';

// static backHandlerRemoveMethod() {
//   BackHandler.removeEventListener('hardwareBackPress')
// }
export default class Validators {
  constructor() { }

  static numberValidatorForPassword(text) {
    const validator = /^(?=.*[0-9])(?=.{1,})/;
    return validator.test(text);
  }

  static nameReplace(text) {
    let temp = text.replace(/[.@!#$%^&*(),?":{}|<>=/+;:'-0123456789]/g, '');
    return temp;
  }
  static emailValidator(text) {
    const validator = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
    return validator.test(text);
  }
  static decimalNumberValidator(text) {
    const validator = /^\d*(\.\d+)?$/;
    return validator.test(text);
  }
  static PinValidator(input, N) {
    var regex = new RegExp("(\\d)\\1{" + N + "}", "g");
    return !!input.match(regex);
  }
  // static backHandlerMethod(backMethod) {
  //   BackHandler.addEventListener('hardwareBackPress', backMethod)
  // }
  static emailTextReplacer(text) {
    return text.replace(/[!©®™#$%^&*(),?":{}π√~[|℅¥€¢£<> •°=/+;`:'×÷¶∆-]/g, '');
  }
  static numberReplacer(text) {
    return text.replace(/\D/g, '');
  }
  static alphanumericReplacer(text) {
    return text.replace(/[!©®™$%^&*()@?"#.:{}π√~[,|_℅¥€¢/£<>•°=+;`:'×÷¶∆-]/g, "");
  }
  static phoneNumberReplacer(text) {
    return text.replace(
      /^[(?!(0))A-Za-z!©®™$%^0&*()@\/?"#:{}π√~[|_℅¥€¢£<>.•°=+;,`:'×÷¶∆]/g,
      '',
    );
  }
}
