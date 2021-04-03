import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { Fonts, Metrics, Colors } from "../../../Theme/index";
import { Icon } from "native-base";
import { IIconContainer } from "../../../Types/DrawerTypes";

const iconContainer = (props: IIconContainer) => {
    return <View style={Styles.mainContainer}>
        <View style={Styles.iconContainer} >
            {props.icon &&  <Icon type="Ionicons" name={props.iconName} />}
        </View>
        <View style={Styles.textContainer} >
            <Text style={Styles.textTitle} >{props.title} </Text>
            {props.chevron && <Icon type="FontAwesome" style={Styles.chevronIcon} name={props.open ? "chevron-up" : "chevron-down"} />}
        </View>
    </View>;
};

const Styles = StyleSheet.create({
    iconContainer: {
        flex: 1,
        alignItems: "center",
    },
    textContainer: {
        flex: 6,
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row",
    },
    mainContainer: {
        flexDirection: 'row',
        alignItems: "center",
    },
    textTitle: {
        fontSize: Fonts.moderateScale(12),
        fontWeight: "bold"
    },
    chevronIcon: {
        marginRight: Metrics.WIDTH * 0.05,
        fontSize: 15,
        color: Colors.chevronIconColor
    }
})

export default iconContainer;
