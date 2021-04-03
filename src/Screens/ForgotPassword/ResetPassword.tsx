import { Text } from 'native-base';
import React, { Component, useState } from 'react';
import { View, ImageBackground, StyleSheet, TouchableWithoutFeedback, Keyboard, ActivityIndicator } from 'react-native';
import ErrorHelper from '../../Common/ErrorHelper';
import CustomButton from '../../Components/CustomButton';
import ErrorText from '../../Components/ErrorText';
import InputField from '../../Components/InputField';
import { Translate } from '../../i18n/localization';
import { forgotPasswordController, resetPasswordController } from '../../Network/Controllers/authController';
import { Colors, Fonts, Metrics } from '../../Theme';
import { IResetPasswordProps, IResetPasswordState } from '../../Types/ResetPassword';
import Logo from './Component/Logo';

class ResetPassword extends Component<IResetPasswordProps, IResetPasswordState> {

    constructor(props: IResetPasswordProps) {
        super(props)

        this.state = {
            Error: { errorText: "" },
            code: "",
            password: "",
            confirmPassword: "",
            loading: false,
        }
    }

    onChangeOTP = (text) => {
        this.setState({ code: text });
    }

    onChangePassword = (text) => {
        this.setState({ password: text });
    }

    onChangeConfirmPassword = (text) => {
        this.setState({ confirmPassword: text });
    }
    onSubmit = async () => {
        this.setState({
            Error: ErrorHelper.errorResetPasswordChecker(this.state.code, this.state.password, this.state.confirmPassword),
        }, async () => {
            if (this.state.Error.hasError) {
                return;
            }
            else {
                this.setState({loading:true});
                const getItem = await resetPasswordController(this.state, this.props).then((data) => {
                    this.setState({ loading:false,Error: { hasError: true, errorText: data } })
                    setTimeout(() => {
                        this.props.navigation.navigate('Login');
                    }, 1500);
                }).catch((err) => {
                    this.setState({ loading:false,Error: { hasError: true, errorText: err } })
                });

            }
        })
    }

    render() {
        return (
            <ImageBackground source={require('../../Assets/Login/bg_login.png')} style={styles.loginBackground} >
                <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()} >
                    <View style={styles.containerLogin}>
                        <Logo />
                        <View style={styles.logoView}>
                            <Text style={styles.forgotPasswordText}>{Translate("resetPassword.resetPassword")}</Text>
                        </View>
                        <InputField
                            placeholder={Translate("resetPassword.enterOTP")}
                            containerStyle={{ ...styles.inputs, borderColor: this.state.Error.userBorder && Colors.errorBorder || Colors.inputBorder }}
                            onChangeText={this.onChangeOTP}
                            keyboardType="default"
                            value={this.state.code}
                        />
                        <InputField
                            placeholder={Translate("resetPassword.enterPassword")}
                            containerStyle={{ ...styles.inputs, borderColor: this.state.Error.passwordBorder && Colors.errorBorder || Colors.inputBorder }}
                            onChangeText={this.onChangePassword}
                            value={this.state.password}
                            showRightIcon
                            secureTextEntry={true}
                        />
                        <InputField
                            placeholder={Translate("resetPassword.confirmPassword")}
                            containerStyle={{ ...styles.inputs, borderColor: this.state.Error.confirmPasswordBorder && Colors.errorBorder || Colors.inputBorder }}
                            onChangeText={this.onChangeConfirmPassword}
                            value={this.state.confirmPassword}
                            showRightIcon
                            secureTextEntry={true}
                        />
                        <ErrorText error={this.state.Error} />
                        <View style={styles.button}>
                        {this.state.loading ? <ActivityIndicator
                                        size="large" color={Colors.themeBlue}
                                    />
                                        :
                            <CustomButton title={Translate("forgotPassword.submit")} onPress={() => this.onSubmit()} />
                        }
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </ImageBackground>
        );
    }
};

export default ResetPassword;

const styles = StyleSheet.create({
    containerLogin: {
        flex: 1,
        width: Metrics.WIDTH * 0.9,
        maxWidth: Metrics.maxWidthLogin,
        // justifyContent: "center",
        marginTop: Metrics.HEIGHT * 0.2,
        alignItems: "center",
    },
    loginBackground: {
        height: Metrics.HEIGHT,
        width: Metrics.WIDTH,
        alignItems: "center"
    },
    logoView: {
        marginTop: Metrics.HEIGHT * 0.02,
    },
    loginBorder: {
        height: "100%",
        width: "100%",
        alignItems: 'center'
    },
    forgotPasswordText: {
        color: Colors.forgotPassword,
        fontSize: Fonts.moderateScale(20),
        fontWeight: 'bold'
    },
    inputs: {
        backgroundColor: Colors.inputBackground,
        borderWidth: Metrics.HEIGHT * 0.002,
        paddingLeft: Metrics.WIDTH * 0.03,
        marginVertical: Metrics.HEIGHT * 0.01
    },
    button: {
        width: Metrics.WIDTH * 0.9,
        maxWidth: Metrics.maxWidthLogin,
        justifyContent: "center",
    }
});