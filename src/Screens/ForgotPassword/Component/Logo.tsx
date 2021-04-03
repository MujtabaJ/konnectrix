import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { Fonts, Colors, Metrics } from "../../../Theme/index";

const Logo = () => {
    return <View style={styles.logoContainer}>
        <Image source={require('../../../Assets/logo.png')} style={styles.logo} />
    </View>;
};

const styles = StyleSheet.create({
    logo: {
        width: "auto",
        height: "100%",
    },
    logoContainer: {
        width: Metrics.HEIGHT * 0.10,
        height: Metrics.HEIGHT * 0.10,
        zIndex: 0
    }
})

export default Logo;