import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import {  Metrics } from "../../../Theme/index";

const Logo = () => {
    return <View style={styles.logoContainer}>
        <Image source={require('../../../Assets/konnectrix.png')} style={styles.logo} />
    </View>;
};

const styles = StyleSheet.create({
    logo: {
        width: "auto",
        height: "100%",
    },
    logoContainer: {
        width: Metrics.HEIGHT * 0.350,
        height: Metrics.HEIGHT * 0.08,
        zIndex: 0
    }
})

export default Logo;