import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Translate } from "../../../i18n/localization";
import { Fonts, Metrics, Colors } from "../../../Theme/index";
import { NavigationScreenProp } from "react-navigation";

interface IProps {
    navigation: NavigationScreenProp<any, any>
}

const SignUp = (props: IProps) => {
    return <View style={styles.container} >
        <Text style={styles.newHereText} >{Translate("login.newHere")} </Text>
        <TouchableOpacity onPress={() => { props.navigation.navigate("Registration") }}>
            <Text style={styles.signUpText}>{Translate("login.signUp")} </Text>
        </TouchableOpacity>
    </View>;
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        marginTop: Metrics.HEIGHT * 0.1
    },
    signUpText: {
        color: Colors.signUpLink,
        textDecorationLine: "underline",
        fontSize: Fonts.moderateScale(16)
    },
    newHereText: {
        color: Colors.newHere,
        fontSize: Fonts.moderateScale(16)
    }
})

export default SignUp;
