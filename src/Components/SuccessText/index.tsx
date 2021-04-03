import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Colors, Fonts, Metrics } from "../../Theme";
import { ISuccessTextProps } from "../../Types/SuccessText";

const ErrorText = (props: ISuccessTextProps) => {
    return <View style={Styles.mainContainer} >
        {props.successText?.length !== 0 && <Text style={Styles.textStyle} >{props.successText}</Text>}
    </View>;
};

const Styles = StyleSheet.create({
    mainContainer: {
        // marginLeft: Metrics.WIDTH * 0.015
        maxWidth: "90%"
    },
    textStyle: {
        color: Colors.successText,
        fontSize: Fonts.moderateScale(14)
    }
})

export default ErrorText;
