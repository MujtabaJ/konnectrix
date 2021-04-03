import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { Icon } from "native-base";
import { Translate } from "../../../i18n/localization";
import { Colors, Metrics, Fonts } from "../../../Theme/index";
import commonStyles from "./commonStyles";
import IconContainer from "./iconContainer";

const Setting = (props) => {
    return <View style={Styles.mainContainer}>
        <TouchableOpacity style={commonStyles.opacityContainer} >
            <IconContainer title={Translate("sideDrawer.settings")} iconName="home" />
        </TouchableOpacity>
    </View>;
};

const Styles = StyleSheet.create({
    mainContainer: {
        height: Metrics.HEIGHT * 0.06,
        justifyContent: "center"
    },
})

export default Setting;
