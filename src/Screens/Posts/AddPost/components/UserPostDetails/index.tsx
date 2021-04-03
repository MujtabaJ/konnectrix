import React, { useState } from "react";
import { SafeAreaView, StyleSheet, View, TouchableOpacity } from "react-native";
import { Container, Content, Thumbnail, Text, Icon } from 'native-base';
import { Fonts, Metrics, Colors } from "../../../../../Theme";
import GLOBALS from "./../../../../../Constants/Settings";

interface IDropdownProps {
    profileImage: string
    username: string
    isPostTypePublic: boolean
    onChangePostTypeModalVisibility: any
    onChangeNetworkSelectionModalVisibility: any
}

const UserPostDetails = (props: IDropdownProps) => {
    return (
        <SafeAreaView style={styles.container}>
            {props.profileImage !== null
                ?
                <Thumbnail source={{ uri: props.profileImage }} style={styles.avatarStyle} />
                :
                <Thumbnail source={{ uri: GLOBALS.USER_AVATAR }} style={styles.avatarStyle} />
            }
            <View style={{ justifyContent: 'center', marginLeft: Metrics.WIDTH * 0.05 }}>
                <Text style={styles.nameText}>{props.username}</Text>
                <View style={styles.networkSelectionContainer}>
                    <TouchableOpacity style={{ flexDirection: 'row' }} onPress={props.onChangePostTypeModalVisibility}>
                        <Text style={styles.dropdownText}>{props.isPostTypePublic ? "Public" : "Private"}</Text>
                        <Icon name={'chevron-down'} type='FontAwesome' style={styles.dropdownIcon} />
                    </TouchableOpacity>
                    <Text style={styles.pipeStyle}>{"|"}</Text>
                    <TouchableOpacity style={{ flexDirection: 'row' }} onPress={props.onChangeNetworkSelectionModalVisibility}>
                        <Text style={styles.dropdownText}>{"Network"}</Text>
                        <Icon name={'chevron-down'} type='FontAwesome' style={styles.dropdownIcon} />
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
};

export default UserPostDetails;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: Metrics.HEIGHT * 0.02
    },
    nameText: {
        fontSize: Fonts.moderateScale(12),
        fontWeight: 'bold'
    },
    networkSelectionContainer: {
        flexDirection: 'row',
        marginTop: Metrics.HEIGHT * 0.01
    },
    dropdownText: {
        fontSize: Fonts.moderateScale(12),
        color: Colors.themeBlue
    },
    pipeStyle: {
        fontSize: Fonts.moderateScale(12),
        color: Colors.themeBlue,
        marginHorizontal: Metrics.WIDTH * 0.03
    },
    avatarStyle: {
        width: Metrics.HEIGHT * 0.1,
        height: Metrics.HEIGHT * 0.1,
        borderRadius: 500
    },
    dropdownIcon: {
        fontSize: Fonts.moderateScale(12),
        color: Colors.themeBlue,
        marginLeft: Metrics.WIDTH * 0.025,
        marginTop: Metrics.HEIGHT * 0.002
    },
});

