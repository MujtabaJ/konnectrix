import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import CheckBox from "@Components/CheckBox";
import { Translate } from "../../../i18n/localization";
import { Fonts, Colors, Metrics } from "../../../Theme/index";
import { useNavigation } from '@react-navigation/native';

const LoginCheckBox = (props) => {

    return <View style={styles.loginCheckBox}>
        <TouchableOpacity style={styles.checkBoxContainer} onPress={props.onChangeRememberMeCheck}  >
            <CheckBox style={styles.checkBox} checked={props.isCheckedRememberMe} />
            <Text style={styles.rememberMe}>{Translate("login.rememberMe")}</Text>
        </TouchableOpacity>
        <TouchableOpacity  onPress={() => { props.navigation.navigate('ForgotPassword') }} >
            <Text style={styles.forgotPassword}>{Translate("login.forgotPassword")}</Text>
        </TouchableOpacity>
    </View>;
};

const styles = StyleSheet.create({
    loginCheckBox: {
        width: Metrics.WIDTH * 0.9,
        maxWidth: Metrics.maxWidthLogin,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    checkBoxContainer: {
        flexDirection: "row",
        alignItems: "center",
    },
    checkBox: {
        color: Colors.black,
        borderRadius: Metrics.WIDTH * 0.01,
        marginRight: Metrics.WIDTH * 0.02,
        marginLeft: -Metrics.WIDTH * 0.02
    },
    rememberMe: {
        color: Colors.rememberMe,
        marginLeft: Metrics.WIDTH * 0.02,
        fontSize: Fonts.moderateScale(15)
    },
    forgotPassword: {
        color: Colors.forgotPassword,
        fontSize: Fonts.moderateScale(15)
    }
})

export default LoginCheckBox;
