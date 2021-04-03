import React, { useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { Icon } from "native-base";
import { Fonts, Metrics, Colors } from "../../../../Theme/index";
import { Translate } from "../../../../i18n/localization";
import CreateNetworkModal from "./CreateNetworkModal";

const createNetwork = (props) => {

    


    return <View style={Styles.wrapperContainer} >
        <TouchableOpacity style={Styles.mainContainer} onPress={() => { props.setModalVisible(true); }}  >
            <View style={Styles.miniContainer1} />
            <View style={Styles.miniContainer2}>
                <View style={Styles.iconContainer} >
                    <Icon type="FontAwesome" name="plus" style={Styles.icon} />
                </View>
                <View style={Styles.textContainer} >
                    <Text style={Styles.text} >{Translate("sideDrawer.createNetwork")} </Text>
                </View>
            </View>
        </TouchableOpacity>
    </View>;
};

const Styles = StyleSheet.create({
    wrapperContainer: {
        borderBottomColor: Colors.dividerLines,
        borderBottomWidth: Metrics.WIDTH * 0.003,
    },
    mainContainer: {
        height: Metrics.HEIGHT * 0.05,
        flexDirection: "row",
        alignItems: "center"
    },
    miniContainer1: {
        flex: 1
    },
    miniContainer2: {
        flex: 12,
        flexDirection: "row",
        alignItems: "center"
    },
    iconContainer: {
        flex: 1,
        alignItems: "center",
    },
    icon: {
        fontSize: 15,
        color: Colors.createNetwork
    },
    textContainer: {
        flex: 5
    },
    text: {
        color: Colors.createNetwork,
        fontSize: Fonts.moderateScale(12),
        fontWeight: "bold"
    }
})

export default createNetwork;
