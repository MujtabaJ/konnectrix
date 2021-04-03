import React, { useState } from 'react';
import { View, Text, StyleSheet } from "react-native";
import { Icon } from 'native-base';
import { Colors, Fonts, Metrics } from '../../../../../Theme/index';

interface IProps {
    item: any
}

const EducationCardForProfile = (props: IProps) => {
    return (
        <View style={styles.mainView}>
            <Text style={styles.line_1}>{props.item.school}</Text>
            <Text style={styles.line_2}>{props.item.degree}</Text>
            <Text style={styles.line_2}>{`${new Date(props.item.startDate).toLocaleDateString()} - ${new Date(props.item.endDate).toLocaleDateString()}`}</Text>
        </View>
    )
}

export default EducationCardForProfile;

const styles = StyleSheet.create({
    mainView: {
        justifyContent: 'center',
        paddingVertical: Metrics.HEIGHT * 0.02,
        paddingLeft: Metrics.WIDTH * 0.025,
        width: Metrics.WIDTH * 0.9,
        borderRadius: Fonts.moderateScale(4),
        borderBottomWidth: Fonts.moderateScale(1),
        borderBottomColor: Colors.silver,
    },
    centerView: {
        justifyContent: 'center',
        width: Metrics.WIDTH * 0.75,
    },
    rightView: {
        alignItems: 'center',
        width: Metrics.WIDTH * 0.05
    },
    line_1: {
        color: Colors.black,
        fontSize: Fonts.moderateScale(12),
        fontWeight: 'bold'
    },
    line_2: {
        color: Colors.black,
        fontSize: Fonts.moderateScale(12)
    },
    line_3: {
        color: Colors.black,
        fontSize: Fonts.moderateScale(12)
    },
    editIcon: {
        fontSize: Fonts.moderateScale(16)
    }
});