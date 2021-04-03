import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import InputField from "@Components/InputField";
import CustomButton from "@Components/CustomButton";
import ErrorText from "@Components/ErrorText";
import { Translate } from "../../../i18n/localization";
import { Fonts, Colors, Metrics } from "../../../Theme/index";
import { IHasError } from "../../../Types/Errors";

interface ILoginPassProps {
    Error: IHasError
    email: string
    password: string
    onChangeEmail: Function
    onChangePassword: Function
    onSubmit: () => void
}

const LoginPass = (props: ILoginPassProps) => {
    
    return <View style={styles.container} >
        <InputField
            placeholder={Translate("login.enterEmail")}
            containerStyle={{ ...styles.inputs, borderColor: props.Error.userBorder && Colors.errorBorder || Colors.inputBorder }}
            onChangeText={props.onChangeEmail}
            keyboardType="email-address"
            value={props.email}
        />
        <InputField
            placeholder={Translate("login.password")}
            containerStyle={{ ...styles.inputs, borderColor: props.Error.passwordBorder && Colors.errorBorder || Colors.inputBorder }}
            onChangeText={props.onChangePassword}
            showRightIcon
            secureTextEntry={true}
            value={props.password}
        />
        <ErrorText error={props.Error} />
        <CustomButton title={Translate("login.signIn")} onPress={() => props.onSubmit()} />
    </View>;
};

const styles = StyleSheet.create({
    container: {
        width: Metrics.WIDTH * 0.9,
        maxWidth: Metrics.maxWidthLogin,
        justifyContent: "center",
    },
    inputs: {
        backgroundColor: Colors.inputBackground,
        borderWidth: Metrics.HEIGHT * 0.002,
        paddingLeft: Metrics.WIDTH * 0.03,
        marginVertical: Metrics.HEIGHT * 0.01
    }
})

export default LoginPass;
