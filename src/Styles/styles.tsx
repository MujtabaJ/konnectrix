import React from 'react';
import { StyleSheet } from 'react-native';
import { Fonts, Metrics, Colors } from "../Theme/index";

const styles = StyleSheet.create({
    //Common
    loadingContainer: {
        flex: 1,
        backgroundColor: '#F3F8FE',
        alignItems: 'center',
        justifyContent: 'center',
    },
    activeIconStyle: {
        color: 'tomato'
    },
    inactiveIconStyle: {
        color: 'gray'
    },
    submit: {
        marginRight: 40,
        marginLeft: 40,
        marginTop: 10,
        paddingTop: 20,
        paddingBottom: 20,
        backgroundColor: '#68a0cf',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#fff'
    },
    submitText: {
        color: '#fff',
        textAlign: 'center',
    },
    // Login 
    loginCheckBox: {
        width: "90%",
        backgroundColor: "pink"
    },
    //settings


    //
});

export default styles;