import { Button } from 'native-base';
import React, { Component } from 'react';
import { FlatList, TouchableWithoutFeedback, Image, TextInput, Modal, StyleSheet, Text, TouchableOpacity, View, ActivityIndicator, Keyboard, } from "react-native";

import CustomButton from '../CustomButton';
import InputField from '../InputField';
import { Translate } from '../../i18n/localization';
import { createNetworkAdminRequestController } from '../../Network/Controllers/networkController';
import { mapDispatchToProps, mapStateToProps } from '../../Redux/Dispatchers';
import { Colors, Fonts, Metrics } from '../../Theme';
import Logo from '../../Screens/Welcome/Components/Logo';
import ErrorText from "../ErrorText";

import ErrorHelper from "../../Common/ErrorHelper";
import { connect } from 'react-redux';
import TextArea from '../../Screens/Welcome/Components/TextArea';

class CustomModal extends React.Component<any, any> {

    constructor(props) {
        super(props)
        this.state = {
            Error: { hasError: false, errorText: "" },
            toggleOverlay: false,
            createNetworkMessage: "",
            loading: false,
        }
    }
    componentWillUnmount = () => {
        this.props.setModalVisible(false)
    }
    onDoneButtonClick(value) {
        this.setState({ toggleOverlay: value })
    }
    
    render() {
        
        return (
            <View >
                <View style={styles.thanksModalCenteredView}>
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={this.props.customModalVisible}
                        onRequestClose={() => { this.props.setCustomModalVisible(false) }}
                    >
                        <View style={styles.centeredView}>
                            <View style={styles.thankYouModalView}>
                                <View style={styles.section3} >
                                    <Text style={styles.thankYouTextStyle}>{Translate("createNetwork.thankYouText")}</Text>
                                    <Text style={styles.thankYouDescriptionTextStyle}>{Translate("createNetwork.thankYouDescription1")}</Text>
                                    <Text style={styles.thankYouDescriptionTextStyle2}>{this.state.createNetworkMessage}</Text>
                                    <CustomButton title={Translate("createNetwork.doneButton")} buttonContainerStyle={styles.doneButton} buttonTextStyle={styles.doneButtonText} onPress={() => this.onDoneButtonClick(false)} />
                                </View>
                            </View></View>
                    </Modal>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    thankYouTextStyle: {
        fontWeight: 'bold',
        fontSize: Fonts.moderateScale(15),
        marginBottom: 5
    },
    thankYouDescriptionTextStyle: {
        fontSize: Fonts.moderateScale(13),
        marginBottom: 5
    },
    thankYouDescriptionTextStyle2: {
        fontSize: Fonts.moderateScale(13),
        marginBottom: 5,
        textAlign: "center",
        flexWrap: 'wrap'
    },
    textInput: {
        fontSize: Fonts.moderateScale(12)
    },
    createButton: {
        borderTopWidth: 2,
        borderLeftWidth: 2,
        borderWidth: 0.5,
        width: Metrics.WIDTH * 0.3,
        height: Metrics.HEIGHT * 0.05,
        justifyContent: "center",
        alignItems: 'center',
    },
    connectButton: {
        backgroundColor: Colors.themeBlue,
        borderRadius: 5,
        width: Metrics.WIDTH * 0.3,
        height: Metrics.HEIGHT * 0.05,
        justifyContent: "center",
        alignItems: 'center',
    },
    logo: {
        width: "auto",
        height: "100%",
        borderRadius: 50,
        borderColor: Colors.themeBlue,
        borderWidth: 2
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: Metrics.HEIGHT * 0.001,
        backgroundColor: 'rgba(0,0,0,0.8)'
    },
    thanksModalCenteredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: Metrics.HEIGHT * 0.001,

    },
    modalView: {
        margin: 20,
        backgroundColor: Colors.white,
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: Colors.black,
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    thankYouModalView: {
        backgroundColor: Colors.white,
        borderRadius: 20,
        padding: 15,
        alignItems: "center",
        shadowColor: Colors.black,
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    button: {
        borderRadius: 5,
        padding: 10,
        elevation: 2,
        backgroundColor: Colors.themeBlue,
        width: Metrics.WIDTH * 0.75
    },
    textStyle: {
        color: Colors.white,
        fontWeight: "normal",
        textAlign: "center"
    }, 
    section3: {
        alignItems: "center",
        height: Metrics.HEIGHT * 0.3,
        justifyContent: "center"
    },
    doneButton: {
        width: Metrics.WIDTH * 0.2
    },
    doneButtonText: {
        fontSize: Fonts.moderateScale(16),
        fontWeight: "normal"
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(CustomModal);