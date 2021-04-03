import React from "react";
import { View, Text, StyleSheet } from 'react-native';
import { Icon } from 'native-base';
import { Colors, Fonts, Metrics } from '../../../../Theme/index';
import { Translate } from "@i18n/localization";


interface IProps {
    totalConnections?: string
}

const TotalConnections = (props: IProps) => {
    return (
        <View style={styles.container}>
            <View style={styles.leftColumn}>
                <Text style={styles.countTextStyle}>{props.totalConnections}</Text>
                <Text style={styles.infoTextStyle}>{Translate("Connections.Connections")}</Text>
            </View>
            <View style={styles.rightColumn}>
                <Icon style={styles.icon} type='FontAwesome' name={'address-book'} />
                <Text style={styles.infoTextStyle}>{Translate("Connections.AddContacts")}</Text>
            </View>
        </View>
    );
};

export default TotalConnections;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingVertical: Metrics.HEIGHT * 0.0075
    },
    leftColumn: {
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: Metrics.WIDTH * 0.2
    },
    rightColumn: {
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: Metrics.WIDTH * 0.2
    },
    countTextStyle: {
        fontSize: Fonts.moderateScale(18)
    },
    infoTextStyle: {
        fontSize: Fonts.moderateScale(16),
        color: Colors.blue
    },
    icon: {
        fontSize: Fonts.moderateScale(22)
    }
});