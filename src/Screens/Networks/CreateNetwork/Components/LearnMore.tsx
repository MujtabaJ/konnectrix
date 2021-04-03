import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Fonts, Colors, Metrics } from "../../../../Theme";
import { Translate } from "../../../../i18n/localization";

const LearnMore = (props) => {
    return <View style={Styles.mainContainer} >
        <Text style={Styles.visibilityText} >{Translate('createNetwork.networkVisibility')} <Text style={Styles.learnMore}>{Translate('createNetwork.learnMore')}</Text></Text>
    </View>;
};

const Styles = StyleSheet.create({
    mainContainer: {
        marginBottom: Metrics.WIDTH * 0.1
    },
    visibilityText: {
        fontSize: Fonts.moderateScale(12)
    },
    learnMore: {
        color: Colors.themeBlue,
        fontSize: Fonts.moderateScale(12)
    }
})

export default LearnMore;
