import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, Platform, PermissionsAndroid, Modal } from 'react-native';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { Colors, Fonts, Metrics } from '../../Theme/index';
import { Icon } from 'native-base';
import ImagePicker from 'react-native-image-crop-picker';

const PhotoVideoPickerModal = (props) => {
    const capture = async (type) => {
        ImagePicker.openCamera({
            width: 300,
            height: 550,
            mediaType: type,
        }).then(response => {
            props.setModalVisible(false);
            if (response.path) {
                props.setFileDetails(response);
            }
        });

    };
    const chooseFile = (type) => {
        ImagePicker.openPicker({
            width: 300,
            height: 550,
            mediaType: type,
        }).then(response => {
            props.setModalVisible(false);
            if (response.path) {
                props.setFileDetails(response);
            }
        });
    };
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={props.modalVisible}
                onRequestClose={() => {
                    props.setModalVisible(false);
                }} >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <View style={{ justifyContent: 'flex-end', alignItems: 'flex-end' }}>
                            <Icon name={'times-circle'} type='FontAwesome' style={styles.closeIcon} onPress={() => props.setModalVisible(false)} />
                        </View>
                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <Text
                                style={styles.textStyle}
                                onPress={() => capture(props.mediaType)}>
                                {props.mediaType === "photo" ? "Capture Photo" : "Record Video"}
                            </Text>
                        </View>
                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <Text
                                style={styles.textStyle}
                                onPress={() => chooseFile(props.mediaType)}>
                                {props.mediaType === "photo" ? "Choose Photo" : "Choose Video"}
                            </Text>
                        </View>
                    </View>
                </View>
            </Modal>
        </SafeAreaView>
    );
};

export default PhotoVideoPickerModal;

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