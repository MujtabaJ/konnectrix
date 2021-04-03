import React, { useState } from 'react';
import { View, Text, StyleSheet } from "react-native";
import { Icon } from 'native-base';
import { Colors, Fonts, Metrics } from '../../../../../Theme/index';

interface IProps {
    onPressEdit: () => void
    item: any
}

const EducationCardForAccordion = (props: IProps) => {
    return (
        <View style={styles.mainView}>
            <View style={styles.leftView}>
                {/* <Text style={styles.line_2}>Logo</Text> */}
            </View>
            <View style={styles.centerView}>
                <Text style={styles.line_1}>{props.item.school}</Text>
                <Text style={styles.line_2}>{props.item.degree}</Text>
                <Text style={styles.line_2}>{`${new Date(props.item.startDate).toLocaleDateString()} - ${new Date(props.item.endDate).toLocaleDateString()}`}</Text>
            </View>
            <View style={styles.rightView}>
                <Icon name='pencil' type='FontAwesome' style={styles.editIcon} onPress={() => props.onPressEdit()} />
            </View>
        </View>
    )
}

export default EducationCardForAccordion;

const styles = StyleSheet.create({
    mainView: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: Metrics.HEIGHT * 0.02,
        marginBottom: Metrics.HEIGHT * 0.01,
        padding: Metrics.HEIGHT * 0.01,
        width: Metrics.WIDTH * 0.9,
        borderRadius: Fonts.moderateScale(4),
        borderWidth: Fonts.moderateScale(1),
        borderColor: Colors.silver
    },
    leftView: {
        alignItems: 'center',
        // width: Metrics.WIDTH * 0.05
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