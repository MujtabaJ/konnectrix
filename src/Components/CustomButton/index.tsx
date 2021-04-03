import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { Fonts, Metrics, Colors } from "../../Theme/index";
import { ICustomButtonProps } from "../../Types/Components";

const CustomButton = (props: ICustomButtonProps) => {
    return (
        <TouchableOpacity style={{ ...styles.buttonContainer, ...props.buttonContainerStyle, opacity: props.disabled && 0.5 }} activeOpacity={0.5} disabled={props.disabled} onPress={() => props.onPress()}>
            <Text style={{ ...styles.buttonText, ...props.buttonTextStyle }} >{props.title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    buttonText: {
        fontFamily: "MyriadPro",
        fontWeight: "bold",
        fontSize: Fonts.moderateScale(16),
        color: Colors.signInButtonText
    },
    buttonContainer: {
        height: Metrics.buttonHeight,
        backgroundColor: Colors.signInButton,
        // borderWidth: Metrics.HEIGHT * 0.001,
        borderColor: Colors.signInBorder,
        borderRadius: Metrics.HEIGHT * 0.01,
        marginTop: Metrics.HEIGHT * 0.015,
        marginBottom: Metrics.HEIGHT * 0.03,
        justifyContent: "center",
        alignItems: "center",
        // elevation: 4
    },
})

export default CustomButton;
