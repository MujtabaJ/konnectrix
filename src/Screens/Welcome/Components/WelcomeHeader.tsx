import {  Text } from 'native-base';
import React from 'react';
import { View,  StyleSheet } from 'react-native';
import { Translate } from '../../../i18n/localization';
import { Colors, Fonts, Metrics } from '../../../Theme';

const WelcomeHeader = (props) => {
    return (
        <View style={styles.mainContainer}>
            <Text style={styles.welcomeText}>{Translate("welcome.welcome")}</Text>
            {props.firstName && <Text style={styles.userNameText}>{props.firstName}</Text>}
            <Text style={styles.toText}>{Translate("welcome.to")}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        marginTop:Metrics.HEIGHT *0.04,
        alignContent: 'center',
        alignItems: "center",
    },
    welcomeText: {
        color: Colors.black,
        fontSize: Fonts.moderateScale(16),
        fontWeight: 'bold'
    },
    userNameText: {
        color:Colors.themeBlue,
        fontSize: Fonts.moderateScale(18),
        fontWeight: 'bold'
    },
    toText: {
        color: Colors.black,
        fontSize: Fonts.moderateScale(16),
        fontWeight: 'bold'
    }
});

export default WelcomeHeader;