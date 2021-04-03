import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { Fonts, Metrics, Colors } from "../../../Theme/index";
import { Icon } from "native-base";
import { Translate } from "../../../i18n/localization";
import commonStyles from "./commonStyles";
import IconContainer from "./iconContainer";

const Help = (props) => {
    return <View style={Styles.mainContainer}>
        <TouchableOpacity style={commonStyles.opacityContainer}>
            <IconContainer title={Translate("sideDrawer.help")} iconName="home" />
        </TouchableOpacity>
    </View>;
};

const Styles = StyleSheet.create({
    mainContainer: {
        height: Metrics.HEIGHT * 0.06,
        borderBottomWidth: Metrics.WIDTH * 0.003,
        borderBottomColor: Colors.dividerLines,
        justifyContent: "center"
    },
})

export default Help;
