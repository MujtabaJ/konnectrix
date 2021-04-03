import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Colors, Fonts, Metrics } from "../../Theme";
import { IErrorComponent } from "../../Types/Errors";

const ErrorText = (props: IErrorComponent) => {
    return <View style={Styles.mainContainer} >
        {props.error.errorText?.length !== 0 && <Text style={Styles.textStyle} >{props.error.errorText}</Text>}
    </View>;
};

const Styles = StyleSheet.create({
    mainContainer: {
        // marginLeft: Metrics.WIDTH * 0.015
        maxWidth: "90%"
    },
    textStyle: {
        color: Colors.errorText,
        fontSize: Fonts.moderateScale(14)
    }
})

export default ErrorText;
