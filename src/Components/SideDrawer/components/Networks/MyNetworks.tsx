import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Icon } from "native-base";
import { Fonts, Metrics, Colors } from "../../../../Theme/index";
import { Translate } from "../../../../i18n/localization";
import NetworkItem from "./NetworkItem";
import { IMyNetworks } from "../../../../Types/DrawerTypes";

const MyNetworks = (props: IMyNetworks) => {
    return <View style={Styles.mainContainer} >
        <View style={Styles.myNetworksContainer} >
            <View style={Styles.headingContainer} >
                <View style={Styles.gap} />
                <Text style={Styles.heading} >{Translate("sideDrawer.myNetworks")} </Text>
            </View>
            {
                props.myNetworks.slice(0, 3).map((element, index) => {
                    return <NetworkItem key={index} networkDetails={element} count={3} />
                })
            }
            <TouchableOpacity style={Styles.moreTextContainer} >
                <Text style={Styles.showMore} >{Translate("sideDrawer.showMore")} </Text>
            </TouchableOpacity>
        </View>
    </View>;
};

const Styles = StyleSheet.create({
    mainContainer: {
        borderBottomWidth: Metrics.WIDTH * 0.003,
        borderBottomColor: Colors.dividerLines,
    },
    heading: {
        flex: 6,
        color: Colors.themeBlue,
        fontWeight: "bold",
        fontSize: Fonts.moderateScale(12),
        // marginLeft: Metrics.WIDTH * 0.09,
        marginTop: Metrics.WIDTH * 0.02,
    },
    headingContainer: {
        flexDirection: "row"
    },
    gap: { flex: 1 },
    myNetworksContainer: {
        // borderBottomWidth: Metrics.WIDTH * 0.003,
        // borderBottomColor: Colors.dividerLines,
    },
    associatedNetworksContainer: {},
    moreTextContainer: {
        marginLeft: Metrics.WIDTH * 0.19
    },
    showMore: {
        color: Colors.showMore,
        fontSize: Fonts.moderateScale(12),
        fontWeight: 'bold',
        marginBottom: Metrics.HEIGHT * 0.01,
        marginTop: Metrics.HEIGHT * 0.01,
    }
})

export default MyNetworks;
