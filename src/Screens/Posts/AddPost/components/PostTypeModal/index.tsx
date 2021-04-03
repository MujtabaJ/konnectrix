import React, { useState } from "react";
import { SafeAreaView, StyleSheet, Text, View, Modal } from "react-native";
import { Icon } from 'native-base';
import { Fonts, Metrics, Colors } from "../../../../../Theme";

interface IDropdownProps {
    modalVisible: boolean
    setPostType: any
    setModalVisible: any
}

const PostTypeModal = (props: IDropdownProps) => {

    const setPostType = (bool) => {
        props.setPostType(bool);
        props.setModalVisible(false);
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={props.modalVisible}
                onRequestClose={() => { props.setModalVisible(false) }} >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <View style={{ justifyContent: 'flex-end', alignItems: 'flex-end' }}>
                            <Icon name={'times-circle'} type='FontAwesome' style={styles.closeIcon} onPress={() => props.setModalVisible(false)} />
                        </View>
                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={styles.textStyle} onPress={() => setPostType(true)}>Public</Text>
                        </View>
                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={styles.textStyle} onPress={() => setPostType(false)}>Private</Text>
                        </View>
                    </View>
                </View>
            </Modal>
        </SafeAreaView>
    )
};

export default PostTypeModal;

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'rgba(0,0,0,0.7)',
    },
    modalView: {
        justifyContent: "center",
        backgroundColor: "white",
        borderRadius: Fonts.moderateScale(16),
        width: Metrics.WIDTH * 0.75,
        height: Metrics.HEIGHT * 0.15,
    },
    textStyle: {
        color: "black",
        textAlign: "center",
        top: Metrics.HEIGHT * -0.017,
        marginVertical: Metrics.HEIGHT * 0.01,
        fontSize: Fonts.moderateScale(14)
    },
    closeIcon: {
        fontSize: Fonts.moderateScale(30),
        color: Colors.errorRed,
        top: Metrics.HEIGHT * -0.007
    }
});

