import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Metrics, Fonts, Colors } from "../../Theme";

interface IDropdownItemProps {
    title: string
}

const DropdownItem = (props: IDropdownItemProps) => {
    return <TouchableOpacity style={Styles.mainContainer} >
        <Text style={Styles.textStyle} >{props.title}</Text>
    </TouchableOpacity>;
};

const Styles = StyleSheet.create({
    mainContainer: {
        height: Metrics.HEIGHT * 0.05,
        justifyContent: "center",
        padding: Metrics.WIDTH * 0.02
    },
    textStyle: {
        fontSize: Fonts.moderateScale(12)
    }
})

export default DropdownItem;
