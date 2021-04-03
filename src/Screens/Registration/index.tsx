import React, { Component } from 'react';
import Fields from "./Components/Fields";
import Loader from "../../Components/Loader";
import CheckBox from "../../Components/CheckBox";
import ErrorText from "../../Components/ErrorText";
import ErrorHelper from "../../Common/ErrorHelper";
import { Translate } from "../../i18n/localization";
import { Metrics, Colors, Fonts } from "../../Theme";
// import SuccessText from "../../Components/SuccessText";
import CustomButton from "../../Components/CustomButton";
import SocialMediaConnect from "../../Components/SocialMediaConnect";
import { registerUserController } from "../../Network/Controllers/authController";
import { IRegistrationProps, IRegistrationState } from "../../Types/Registration";
import { View, ImageBackground, StyleSheet, TouchableWithoutFeedback, Keyboard, Image, Text, TouchableOpacity } from 'react-native';
import { Content } from 'native-base';

class Registration extends Component<IRegistrationProps, IRegistrationState> {

    constructor(props) {
        super(props);
        this.state = {
            fieldsValues: {
                firstName: "",
                lastName: "",
                email: "",
                phoneNumber: "",
                password: "",
                confirmPassword: "",
            },
            Error: {
                errorText: ""
            },
            isLoading: false,
            successText: "",
            CheckBoxClicked: false,
        }
    }

    onChangeField = (value: string, fieldName: string) => {
        this.setState({
            fieldsValues: {
                ...this.state.fieldsValues, [fieldName]: value
            }
        })
    }

    onSubmit = () => {
        this.setState({
            Error: ErrorHelper.signUpErrorChecker(this.state.fieldsValues),
        }, async () => {
            if (this.state.Error.hasError) {
                // For verifying if there is an error in the fields' data entry.   
                return;
            }
            else {
                // For checking the response status. 
                this.setState({ isLoading: true })
                const response = await registerUserController(this.state.fieldsValues).then((data) => {
                    this.props.navigation.navigate("Login");
                    this.setState({ Error: { hasError: false, errorText: "" }, successText: data, isLoading: false })
                }).catch((err) => {
                    this.setState({ Error: { hasError: true, errorText: err }, isLoading: false })
                });
            }
        })
    }

    render() {
        return (
            this.state.isLoading ? <Loader /> :
                <Content>
                    <ImageBackground source={require('../../Assets/Login/bg_login.png')} style={Styles.signUpBackground} >
                        {/* <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}> */}
                        <View style={Styles.containerSignUp} >
                            <View style={Styles.logoContainer}>
                                <Image source={require('../../Assets/Registration/logo_sign_up.png')} style={Styles.logo} />
                            </View>
                            <Fields fieldsValues={this.state.fieldsValues} onChange={this.onChangeField} Error={this.state.Error} />
                            <TouchableOpacity onPress={() => this.setState({ CheckBoxClicked: !this.state.CheckBoxClicked })} style={{ flexDirection: 'row' }}>
                                <View style={Styles.checkBoxContainer} >
                                    <CheckBox checked={this.state.CheckBoxClicked} />
                                    <Text style={Styles.agreeTextStyle}>{Translate('Registration.agree')}</Text>
                                    <TouchableOpacity>
                                        <Text style={Styles.termsTextStyle}>{Translate('Registration.terms')}</Text>
                                    </TouchableOpacity>
                                </View>
                            </TouchableOpacity>
                            {/* <SuccessText successText={this.state.successText} /> */}
                            <ErrorText error={this.state.Error} />
                            <CustomButton title={Translate("Registration.signUp")} disabled={!this.state.CheckBoxClicked} onPress={() => this.onSubmit()} buttonContainerStyle={Styles.buttonContainerStyle} />
                            <SocialMediaConnect />
                            <TouchableOpacity style={Styles.alreadyAccountContainer} onPress={() => { this.props.navigation.navigate("Login") }}>
                                <Text style={Styles.alreadyAccountText}>{Translate("Registration.alreadyAccount")}</Text>
                            </TouchableOpacity>
                        </View>
                        {/* </TouchableWithoutFeedback> */}
                    </ImageBackground>
                </Content>
        );
    }
};

const Styles = StyleSheet.create({
    containerSignUp: {
        flex: 1,
        maxWidth: Metrics.maxWidthRegistration,
        justifyContent: "center",
        // alignItems: "center",
    },
    buttonContainerStyle: {
        backgroundColor: Colors.signUpButton
    },
    signUpBackground: {
        height: Metrics.HEIGHT,
        width: Metrics.WIDTH,
        alignItems: "center"
    },
    logo: {
        width: "auto",
        height: "100%",
    },
    logoContainer: {
        marginBottom: Metrics.HEIGHT * 0.015,
        width: Metrics.HEIGHT * 0.10,
        height: Metrics.HEIGHT * 0.13,
        alignSelf: "center",
        zIndex: 0
    },
    checkBoxContainer: {
        marginTop: Metrics.HEIGHT * 0.008,
        marginBottom: Metrics.HEIGHT * 0.008,
        flexDirection: "row",
        alignItems: "center",
    },
    agreeTextStyle: {
        marginLeft: Metrics.WIDTH * 0.03,
        fontSize: Fonts.moderateScale(14),
        color: Colors.inputPlaceholderColor
    },
    termsTextStyle: {
        marginLeft: Metrics.WIDTH * 0.02,
        fontSize: Fonts.moderateScale(14),
        color: Colors.signUpRegistration,
        fontWeight: "bold"
    },
    alreadyAccountContainer: {
        alignItems: "center",
        marginTop: Metrics.HEIGHT * 0.015,
        marginBottom: Metrics.HEIGHT * 0.015,
    },
    alreadyAccountText: {
        color: Colors.alreadyAccountColor,
        fontSize: Fonts.moderateScale(14)
    }
})

export default Registration;