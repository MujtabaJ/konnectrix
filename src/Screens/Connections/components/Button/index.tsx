import React from "react";
import { TouchableOpacity, StyleSheet, Text } from 'react-native';
import { Colors, Fonts, Metrics } from '../../../../Theme/index';

interface IProps {
    title: string
    onPressButton: (val) => void
    style?: any
}

const Button = (props: IProps) => {
    return (
        <TouchableOpacity style={[styles.buttonStyle, props.style]} onPress={(val) => props.onPressButton(val)}>
            <Text style={[styles.textStyle, props.style]}>{props.title}</Text>
        </TouchableOpacity>
    );
}

export default Button;

const styles = StyleSheet.create({
    buttonStyle: {
        borderColor: Colors.blue,
        borderRadius: Fonts.moderateScale(8),
        borderTopWidth: Fonts.moderateScale(1),
        borderLeftWidth: Fonts.moderateScale(2),
        borderRightWidth: Fonts.moderateScale(2),
        borderBottomWidth: Fonts.moderateScale(2),
        width: Metrics.HEIGHT * 0.125,
        height: Metrics.HEIGHT * 0.04,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textStyle: {
        fontSize: Fonts.moderateScale(12),
        color: Colors.blue,
    }
})