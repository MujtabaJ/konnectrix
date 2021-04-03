import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Icon } from "native-base";
import { Metrics, Colors, Fonts } from "../../Theme";
import { ICheckboxProps } from "../../Types/Components";

const CheckBox = (props: ICheckboxProps) => {
    return <View style={Styles.mainContainer} >
        {props.checked && <Icon type="FontAwesome5" name="check" style={(props.disabled !== undefined || !props.disabled) ? Styles.enabledIcon : Styles.disabledIcon} />}
    </View>;
};

const Styles = StyleSheet.create({
    mainContainer: {
        height: Metrics.HEIGHT * 0.025,
        width: Metrics.HEIGHT * 0.025,
        borderWidth: Metrics.HEIGHT * 0.0012,
        borderColor: Colors.checkBoxBorder,
        borderRadius: Metrics.WIDTH * 0.01,
        backgroundColor: Colors.checkBoxBackground,
        alignItems: "center",
        justifyContent: "center"
    },
    enabledIcon: {
        fontSize: Fonts.moderateScale(12),
        color: Colors.black,
    },
    disabledIcon: {
        fontSize: Fonts.moderateScale(12),
        color: Colors.errorRed,
    }
})

export default CheckBox;
