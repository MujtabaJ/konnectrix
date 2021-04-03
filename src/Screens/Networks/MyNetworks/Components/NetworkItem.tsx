import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Thumbnail } from 'native-base';
import { Translate } from "../../../../i18n/localization";
import { Metrics, Colors, Fonts } from "../../../../Theme";
import { INetworkItemProps } from "../../../../Types/MyNetworks";

const userImage = require('../../../../Assets/netwrokicon2.png');

const NetworkItem = (props: INetworkItemProps) => {
    return <View style={Styles.mainContainer} >
        <View style={Styles.container1} >
            <Thumbnail source={userImage} large style={Styles.thumbnail} />
        </View>
        <View style={Styles.container2} >
            <Text style={Styles.inviteText}>{props.inviteText}</Text>
            <Text style={Styles.titleText}>{props.networkTitle}</Text>
        </View>
        <View style={Styles.container3} >
            <TouchableOpacity style={Styles.acceptButton} onPress={() => { }}>
                <Text style={Styles.acceptButtonText}>{Translate("myNetworks.accept")}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={Styles.rejectButton} onPress={() => { }}>
                <Text style={Styles.rejectButtonText}>{Translate("myNetworks.reject")}</Text>
            </TouchableOpacity>
        </View>
    </View>;
};

const Styles = StyleSheet.create({
    mainContainer: {
        flexDirection: "row",
        // maxWidth: Metrics.maxWidthNetworkItem
    },
    container1: {
        flex: 0.2,
        justifyContent: "center",
        alignItems: "center"
    },
    container2: {
        flex: 0.5,
        justifyContent: "center"
    },
    container3: {
        flex: 0.3,
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: Metrics.HEIGHT * 0.01
    },
    thumbnail: {
        height: Metrics.HEIGHT * 0.08,
        width: Metrics.HEIGHT * 0.08,
        borderWidth: Metrics.HEIGHT * 0.002,
        borderColor: Colors.themeBlue,
    },
    inviteText: {
        fontSize: Fonts.moderateScale(16),
        fontWeight: "bold"
    },
    titleText: {
        fontSize: Fonts.moderateScale(16),
        color: Colors.themeBlue
    },
    acceptButton: {
        width: "80%",
        borderWidth: Metrics.HEIGHT * 0.002,
        borderColor: Colors.themeBlue,
        borderRadius: Metrics.HEIGHT * 0.01,
        marginVertical: Metrics.HEIGHT * 0.003,
        height: Metrics.HEIGHT * 0.05,
        justifyContent: 'center',
        alignItems: 'center',
    },
    rejectButton: {
        width: "80%",
        borderWidth: Metrics.HEIGHT * 0.002,
        borderColor: Colors.black,
        borderRadius: Metrics.HEIGHT * 0.01,
        marginVertical: Metrics.HEIGHT * 0.003,
        height: Metrics.HEIGHT * 0.05,
        justifyContent: 'center',
        alignItems: 'center',
    },
    acceptButtonText: {
        color: Colors.themeBlue,
    },
    rejectButtonText: {
        color: Colors.black
    }
})

export default NetworkItem;
