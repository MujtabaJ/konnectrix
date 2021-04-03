import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Metrics, Colors, Fonts } from "../../../../Theme";
import { Translate } from "../../../../i18n/localization";

const DiscoveryOptions = (props) => {

    const [toggleActive, setToggle] = useState<boolean>(true)

    return <View style={Styles.mainContainer} >
        <TouchableOpacity style={toggleActive ? Styles.activeContainer : Styles.inactiveContainer} onPress={() => {
            setToggle(prevState => {
                if (prevState === false) { return !prevState }
                return prevState
            })
        }} >
            <Text style={toggleActive ? Styles.activeText : Styles.inactiveText}  >{Translate('myNetworks.invites')}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={!toggleActive ? Styles.activeContainer : Styles.inactiveContainer} onPress={() => {
            setToggle(prevState => {
                if (prevState === true) { return !prevState }
                return prevState
            })
        }} >
            <Text style={!toggleActive ? Styles.activeText : Styles.inactiveText} >{Translate('myNetworks.discover')}</Text>
        </TouchableOpacity>
    </View>;
};

const Styles = StyleSheet.create({
    mainContainer: {
        height: Metrics.HEIGHT * 0.05,
        flexDirection: "row",
        marginHorizontal: Metrics.WIDTH * 0.005,
        marginVertical: Metrics.HEIGHT * 0.025,
        borderWidth: Metrics.HEIGHT * 0.001,
        borderColor: Colors.themeBlue,
    },
    activeContainer: {
        width: "50%",
        alignItems: "center",
        justifyContent: "center",
        elevation: 10,
        backgroundColor: Colors.themeBlue,
    },
    activeText: {
        color: Colors.white,
        fontSize: Fonts.moderateScale(16),
        fontWeight: "bold"
    },
    inactiveContainer: {
        width: "50%",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: Colors.white,
    },
    inactiveText: {
        color: Colors.themeBlue,
        fontSize: Fonts.moderateScale(16),
        fontWeight: "bold"
    },
})

export default DiscoveryOptions;
