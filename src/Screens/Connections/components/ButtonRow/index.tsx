import React from "react";
import { View, StyleSheet } from 'react-native';
import { Colors, Metrics } from '../../../../Theme/index';
import Button from '../Button';

interface IProps {
    leftButtonTitle: string
    rightButtonTitle: string
    onPressButton: (val) => void
}

const ButtonRow = (props: IProps) => {
    return (
        <View style={{ flexDirection: 'row' }}>
            <View style={{ flex: 0.4 }} />
            <View style={styles.buttonsRow}>
                <Button
                    title={props.leftButtonTitle}
                    onPressButton={() => props.onPressButton(true)}
                />
                <Button
                    title={props.rightButtonTitle}
                    style={styles.ignoreButton}
                    onPressButton={() => props.onPressButton(false)}
                />
            </View>
        </View>
    );
}

export default ButtonRow;

const styles = StyleSheet.create({
    ignoreButton: {
        borderColor: Colors.black,
        color: Colors.black, 
        marginLeft: Metrics.WIDTH * 0.01,
        shadowColor: Colors.black,
        shadowRadius: 20
    },
    buttonsRow: {
        flexDirection: 'row',
        flex: 0.6,
        justifyContent: 'center'
    }
})