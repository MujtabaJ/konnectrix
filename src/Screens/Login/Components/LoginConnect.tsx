import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Translate } from "../../../i18n/localization";
import { Fonts, Colors, Metrics } from "../../../Theme/index";

const LoginConnect = (props) => {
    return <View style={styles.container} >
        <View style={styles.connectText}>
            <Text style={styles.connectTextStyle}>
                {Translate("login.connect")}
            </Text>
        </View>
        <View style={styles.imagesContainer}>
            <TouchableOpacity style={styles.fbImage} >
                <Image source={require('../../../Assets/Login/fb_logo.png')} style={styles.imageStyle} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.lnImage}>
                <Image source={require('../../../Assets/Login/ln_logo.png')} style={styles.imageStyle} />
            </TouchableOpacity>
        </View>
    </View>;
};

const styles = StyleSheet.create({
    container: {
        marginTop: Metrics.HEIGHT * 0.03
    },
    connectText: {
        alignItems: "center",
        marginBottom: Metrics.HEIGHT * 0.02
    },
    imagesContainer: {
        flexDirection: "row",
        justifyContent: "center",
    },
    lnImage: {
        width: Metrics.HEIGHT * 0.06,
        height: Metrics.HEIGHT * 0.06,
        marginLeft: Metrics.WIDTH * 0.02,
        overflow: "hidden",
        borderWidth: 0.01,
        borderRadius: Metrics.HEIGHT * 0.01
    },
    fbImage: {
        width: Metrics.HEIGHT * 0.06,
        height: Metrics.HEIGHT * 0.06,
        marginRight: Metrics.WIDTH * 0.02,
        borderWidth: 0.01,
        overflow: "hidden",
        borderRadius: Metrics.HEIGHT * 0.01
    },
    imageStyle: {
        width: "auto",
        height: "100%",
    },
    connectTextStyle: {
        color: Colors.connectWith,
        fontSize: Fonts.moderateScale(16)
    }
})

export default LoginConnect;
