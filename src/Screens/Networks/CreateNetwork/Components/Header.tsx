import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { Icon } from "native-base";
import { Fonts, Metrics, Colors } from "../../../../Theme";
import { Translate } from "../../../../i18n/localization";

const Header = (props) => {
    return <View style={Styles.mainContainer} >
        <View style={Styles.headingContainer}>
            <TouchableOpacity style={Styles.backButtonContainer} onPress={() => {
                props.navigation.pop()
            }} >
                <Icon type="FontAwesome" name="arrow-left" style={Styles.icon} />
            </TouchableOpacity>
            <Text style={Styles.text}>
                {Translate("createNetwork.heading")}
            </Text>
        </View>
        <TouchableOpacity style={Styles.createButtonContainer} onPress={() => {props.onSubmit()}}>
            <Text style={Styles.buttonText}>{Translate("createNetwork.createButton")}</Text>
        </TouchableOpacity>
    </View>;
};

const Styles = StyleSheet.create({
    mainContainer: {
        height: "10%",
        borderBottomColor: Colors.headerBottomBorder,
        borderBottomWidth: Metrics.HEIGHT * 0.002,
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: "center",
        // backgroundColor: "pink"
    },
    icon: {
        color: Colors.headerBackIcon,
        fontSize: Fonts.moderateScale(20),
        marginLeft: Metrics.WIDTH * 0.04,
        marginRight: Metrics.WIDTH * 0.08,
    },
    text: {
        color: Colors.headerTextColor,
        fontSize: Fonts.moderateScale(18),
    },
    buttonText: {
        color: Colors.headerButtonColor,
        fontSize: Fonts.moderateScale(16),
    },
    backButtonContainer: {},
    headingContainer: {
        flexDirection: "row",
        alignItems: "center"
    },
    createButtonContainer: {
        marginRight: Metrics.WIDTH * 0.05,
    }
})

export default Header;
