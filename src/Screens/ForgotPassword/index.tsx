import { Text } from 'native-base';
import React, { Component, useState } from 'react';
import { TouchableOpacity, View, ImageBackground, StyleSheet, TouchableWithoutFeedback, Keyboard, ActivityIndicator } from 'react-native';
import ErrorHelper from '../../Common/ErrorHelper';
import CustomButton from '../../Components/CustomButton';
import ErrorText from '../../Components/ErrorText';
import InputField from '../../Components/InputField';
import { Translate } from '../../i18n/localization';
import { forgotPasswordController } from '../../Network/Controllers/authController';
import { Colors, Fonts, Metrics } from '../../Theme';
import { IForgotProps, IForgotState } from '../../Types/ForgotPassword';
import { showToastWithGravity } from '../../Utils';
import LoginCheckBox from '../Login/Components/LoginCheckBox';
import LoginConnect from '../Login/Components/LoginConnect';
import Logo from './Component/Logo';

class ForgotPassword extends Component<IForgotProps, IForgotState> {

  constructor(props: IForgotProps) {
    super(props)
    this.state = {
      Error: { errorText: "" },
      email: '',
      errorMsg: '',
      loading: false,
    }
  }

  onChange = (text) => {
    this.setState({ email: text });
  }

  onSubmit = async () => {
    // this.props.setErrorMsg("");
    //this.props.navigation.navigate('ResetPassword')
    this.setState({
      Error: ErrorHelper.errorEmailChecker(this.state.email),
    }, async () => {
      if (this.state.Error.hasError) {
        return;
      }
      else {
        this.setState({loading: true});
        const getItem: string = await forgotPasswordController(this.state, this.props);
        this.setState({loading: false});
        if (getItem !== "") {
          this.setState({ Error: { hasError: true, errorText: getItem } })
        }
      }
    })

  }

  render() {
    return (
      <ImageBackground source={require('../../Assets/Login/bg_login.png')} style={styles.loginBackground} >
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()} >
          <View >
            <View style={styles.containerLogin}>
              <View style={styles.logoCenter}>
                <Logo />
                <View style={styles.logoView}>
                  <Text style={styles.forgotPasswordText}>{Translate("forgotPassword.forgotPassword")}</Text>
                </View>
              </View>
              <InputField
                placeholder={Translate("login.enterEmail")}
                containerStyle={{ ...styles.inputs, borderColor: this.state.Error.userBorder && Colors.errorBorder || Colors.inputBorder }}
                onChangeText={this.onChange}
                keyboardType="email-address"
                value={this.state.email}
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
            <View style={{ height: 80, }}>
              <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                <View style={{ alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>
                  <Text style={styles.backText}>{Translate("forgotPassword.backTo")}</Text>
                  <Text style={styles.signInText}>{Translate("forgotPassword.signin")}</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </ImageBackground>
    );
  }
};

export default ForgotPassword;

const styles = StyleSheet.create({
  containerLogin: {
    flex: 1,
    width: Metrics.WIDTH * 0.9,
    maxWidth: Metrics.maxWidthLogin,
    // justifyContent: "center",
    marginTop: Metrics.HEIGHT * 0.2,
    // alignItems: "center",
  },
  logoCenter: {
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
  forgotPasswordText: {
    color: Colors.forgotPassword,
    fontSize: Fonts.moderateScale(20),
    fontWeight: 'bold'
  },
  signInText: {
    color: Colors.forgotPassword,
    fontSize: Fonts.moderateScale(16),
    fontWeight: 'bold',
    textDecorationLine: "underline"
  },
  backText: {
    fontSize: Fonts.moderateScale(14),
    textDecorationLine: "underline"
  },
  loginBorder: {
    height: "100%",
    width: "100%",
    alignItems: 'center'
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