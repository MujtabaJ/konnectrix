import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Left, Right } from 'native-base';
import { Colors, Fonts, Metrics } from '../../Theme';

const ViewAllComponent = (props) => {
    return (
        <View>
            <View style={styles.headingViewAll} >
                <Left>
                    <Text style={styles.networkText}>{props.heading}</Text>
                </Left>
                {/* <Right>
                    <TouchableOpacity onPress={props.navigate}>
                        <Text numberOfLines={1} style={styles.buttonViewAll}>{props.buttonTitle}</Text>
                    </TouchableOpacity>
                </Right> */}
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    buttonViewAll: {
        color: Colors.blue,
        fontSize: Fonts.moderateScale(11),
    },
    networkText: {
        fontSize: Fonts.moderateScale(12),
    },
    headingViewAll: {
        paddingVertical: Metrics.HEIGHT * 0.02,
        flexDirection: 'row',
        paddingEnd: "3%",
        paddingStart: "3%",
    },
});

export default ViewAllComponent;