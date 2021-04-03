import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from "react-native";
import AsyncStorage from '@react-native-community/async-storage';
import { Translate } from "../../../i18n/localization";
import { Avatar } from 'react-native-elements';
import { Icon } from "native-base";
import { Colors, Metrics, Fonts } from "../../../Theme/index";
import GLOBALS from "./../../../Constants/Settings";

const ProfileHeader = (props) => {

    const [navPayLoad, setNavPayLoad] = useState<any>();

    const onPressViewProfile = () => {
        props.navigation.closeDrawer();
        props.navigation.navigate('ProfileStack', { screen: 'Profile', params: { payload: navPayLoad } });
    }

    return <ImageBackground source={require('../../../Assets/SideDrawer/dashboard_header.png')} style={Styles.mainContainer} >
        <View style={Styles.miniContainer} >
            <View style={Styles.avatarContainer}>
                {props.profilePicture !== null
                    ?
                    <Avatar source={{ uri: props.profilePicture }} containerStyle={{ width: "auto", height: "100%" }} />
                    :
                    <Avatar source={{ uri: GLOBALS.USER_AVATAR }} containerStyle={{ width: "auto", height: "100%" }} />

                }
            </View>
            <View style={Styles.textContainer} >
                <Text style={Styles.profileName} >{props.firstName} {props.lastName}</Text>
                <TouchableOpacity onPress={() => {onPressViewProfile()}}>
                    <Text style={Styles.Profile}>{Translate("sideDrawer.viewProfile")}</Text>
                </TouchableOpacity>
            </View>
            <View style={Styles.closeIconContainer} >
                <TouchableOpacity onPress={() => { props.navigation.closeDrawer() }} >
                    <Icon type="FontAwesome" name="times" style={Styles.closeIcon} />
                </TouchableOpacity>
            </View>
        </View>
    </ImageBackground>;
};

const Styles = StyleSheet.create({
    mainContainer: {
        height: Metrics.HEIGHT * 0.13,
        paddingTop: Metrics.HEIGHT * 0.013,
        justifyContent: "center",
        overflow: "hidden"
    },
    miniContainer: {
        flex: 1,
        flexDirection: "row",
    },
    textContainer: {
        flex: 5,
        marginTop: Metrics.WIDTH * 0.03,
    },
    profileName: {
        color: "white",
        fontWeight: "bold",
        fontSize: Fonts.moderateScale(16),
        marginBottom: Metrics.WIDTH * 0.01,
    },
    Profile: {
        color: "white",
        fontSize: Fonts.moderateScale(14)
    },
    closeIconContainer: {
        flex: 1,
        width: Metrics.WIDTH * 0.1,
        height: Metrics.WIDTH * 0.1,
        marginTop: Metrics.HEIGHT * 0.02,
        marginRight: Metrics.WIDTH * 0.01,
        marginLeft: Metrics.WIDTH * 0.07,
    },
    closeIcon: {
        color: Colors.closeIcon
    },
    avatarContainer: {
        width: Metrics.WIDTH * 0.15,
        height: Metrics.WIDTH * 0.15,
        marginLeft: Metrics.WIDTH * 0.02,
        marginRight: Metrics.WIDTH * 0.02,
        marginTop: Metrics.WIDTH * 0.02,
        borderRadius: Metrics.WIDTH * 0.075,
        overflow: 'hidden'
    },

})

export default ProfileHeader;
