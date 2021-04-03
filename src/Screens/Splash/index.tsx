import React, { Component } from "react";
import { View, Text, Image, StyleSheet, ImageBackground } from 'react-native';

import LocalStorageHelper from "../../Helpers/localStorageHelper";
import { Translate } from "../../i18n/localization";
import { Colors, Fonts, Metrics } from "../../Theme";
import { CommonActions } from '@react-navigation/native';

class Splash extends Component<any, any> {

    async componentDidMount() {
        let remeberMeCheck = await LocalStorageHelper.getRemeberMeCheckAsync();
        if (remeberMeCheck === true) {
            setTimeout(() => {
                // this.props.navigation.navigate("DrawerNavigation")
                this.props.navigation.dispatch(
                    CommonActions.reset({
                        index: 1,
                        routes: [
                            { name: 'DrawerNavigation' }
                        ],
                    })
                )
            }, 500)
        }
        else {
            setTimeout(() => {
                // this.props.navigation.navigate("AuthStack")
                this.props.navigation.dispatch(
                    CommonActions.reset({
                        index: 1,
                        routes: [
                            { name: 'AuthStack' }
                        ],
                    })
                )
            }, 500)
        }
    }


    render() {
        return (
            <ImageBackground source={require('../../Assets/Splash/splash_screen.png')} style={Styles.background} >
                <View style={Styles.logoContainer} >
                    <Image source={require("../../Assets/Splash/konnectrixwhite.png")} style={Styles.logo} />
                </View>
                <View style={Styles.logoView}>
                    <Text style={Styles.yourText}>{Translate("splash.your")}</Text>
                    <Text style={Styles.networkText}>{Translate("splash.network")}</Text>
                    <Text style={Styles.networthText}>{Translate("splash.networth")}</Text>
                </View>
            </ImageBackground>
        )
    }
}

const Styles = StyleSheet.create({
    background: {
        height: Metrics.HEIGHT,
        width: Metrics.WIDTH,
        justifyContent: "center",
        alignItems: 'center'
    },
    logo: {
        width: "auto",
        height: "100%",
    },
    logoContainer: {
        width: Metrics.WIDTH * 0.75,
        height: Metrics.HEIGHT * 0.12
    },
    logoView: {
        flexDirection: 'row',
        marginTop: Metrics.HEIGHT * 0.001,
    },
    yourText: {
        color: Colors.themeYellow,
        fontSize: Fonts.moderateScale(14),
        fontWeight: 'bold'
    },
    networkText: {
        color: Colors.white,
        fontSize: Fonts.moderateScale(14),
        fontWeight: 'bold'
    },
    networthText: {
        color: Colors.themeYellow,
        fontSize: Fonts.moderateScale(14),
        fontWeight: 'bold'
    },
});

export default Splash;
