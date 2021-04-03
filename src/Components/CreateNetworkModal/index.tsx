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

class CreateNetworkModal extends React.Component<any, any> {

    constructor(props) {
        super(props)
        this.state = {
            name: "",
            email: "",
            phone: "",
            designation: "",
            message: "",
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
    onChangeName = (text) => {
        this.setState({ name: text });
    }
    onChangeEmail = (text) => {
        this.setState({ email: text });
    }
    onChangePhone = (text) => {
        this.setState({ phone: text });
    }
    onChangeDesignation = (text) => {
        this.setState({ designation: text });
    }
    onChangeMessage = (text) => {
        this.setState({ message: text });
    }
    
    onSubmit = async () => {
        
        const { name, email, phone, designation, message } = this.state
        this.setState({
            Error: ErrorHelper.createNetworkRequestErrorChecker({ name, email, phone, designation, message }),
        }, async () => {
            if (this.state.Error.hasError) {
                return;
            }
            else {
                this.setState({ loading: true });
                await createNetworkAdminRequestController(this.state).then((data) => {
                    this.props.setModalVisible(!this.props.modalVisible)
                    this.setState({ loading: false, createNetworkMessage: data, name: "", email: "", phone: "", designation: "", message: "" });
                    this.onDoneButtonClick(true)
                }).catch((err) => {
                    this.props.setModalVisible(!this.props.modalVisible)
                    this.setState({ loading: false, createNetworkMessage: err, name: "", email: "", phone: "", designation: "", message: "" });
                    this.onDoneButtonClick(true);
                });
            }
        })
    }
    
    render() {
        
        return (
            <View >
                <View style={styles.centeredView} >
                    <Modal
                    
                        animationType="slide"
                        transparent={true}
                        visible={this.props.modalVisible}
                        onRequestClose={() => {
                            this.props.setModalVisible(!this.props.modalVisible);
                        }}
                    >
                        <TouchableWithoutFeedback onPress={() => { }} >
                            <View style={styles.centeredView}>
                                <View style={styles.modalView}>
                                    <Logo />
                                    <Text style={styles.modalText}>{Translate("createNetwork.connectWithUs")}</Text>
                                    <Text style={styles.modalText1}>{Translate("createNetwork.weWillBeInTouch")}</Text>
                                    <InputField
                                        placeholder={Translate("createNetwork.name")}
                                        onChangeText={this.onChangeName}
                                        containerStyle={{ ...styles.inputs, borderColor: this.state.Error.nameBorder && Colors.errorBorder || Colors.inputBorder }}
                                        value={this.state.name}
                                        onFocus={() => this.setState({ Error: { errorText: "" } })}
                                    />
                                    <InputField
                                        placeholder={Translate("createNetwork.email")}
                                        containerStyle={{ ...styles.inputs, borderColor: this.state.Error.emailBorder && Colors.errorBorder || Colors.inputBorder }}
                                        onChangeText={this.onChangeEmail}
                                        value={this.state.email}
                                        keyboardType="email-address"
                                        onFocus={() => this.setState({ Error: { errorText: "" } })}
                                    />
                                    <InputField
                                        placeholder={Translate("createNetwork.phone")}
                                        containerStyle={{ ...styles.inputs, borderColor: this.state.Error.phoneBorder && Colors.errorBorder || Colors.inputBorder }}
                                        onChangeText={this.onChangePhone}
                                        keyboardType="phone-pad"
                                        value={this.state.phone}
                                        onFocus={() => this.setState({ Error: { errorText: "" } })}
                                    />
                                    <InputField
                                        placeholder={Translate("createNetwork.designation")}
                                        containerStyle={{ ...styles.inputs, borderColor: this.state.Error.designationBorder && Colors.errorBorder || Colors.inputBorder }}
                                        onChangeText={this.onChangeDesignation}
                                        value={this.state.designation}
                                        onFocus={() => this.setState({ Error: { errorText: "" } })}
                                    />
                                    <TextArea
                                        placeholder={Translate("createNetwork.message")}
                                        containerStyle={{ ...styles.inputsMessage, borderColor: this.state.Error.messageBorder && Colors.errorBorder || Colors.inputBorder }}
                                        onChangeText={this.onChangeMessage}
                                        value={this.state.message}
                                        numberOfLines={4}
                                        onFocus={() => this.setState({ Error: { errorText: "" } })}
                                    />

                                    <ErrorText error={this.state.Error} />
                                    {this.state.loading ? <ActivityIndicator
                                        size="large" color={Colors.themeBlue}
                                    />
                                        :
                                        <CustomButton
                                            buttonContainerStyle={styles.button}
                                            onPress={() => this.onSubmit()}
                                            title={Translate("createNetwork.sendRequest")}
                                            buttonTextStyle={styles.textStyle}
                                        />
                                    }

                                    <TouchableOpacity
                                        onPress={() => { this.props.setModalVisible(!this.props.modalVisible) }}
                                    >
                                        <Text style={styles.cancelText}>{Translate("createNetwork.cancel")}</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </TouchableWithoutFeedback>
                    </Modal>
                </View>
                <View style={styles.thanksModalCenteredView}>
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={this.state.toggleOverlay}
                        onRequestClose={() => { this.onDoneButtonClick(false) }}
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
    lineView: {
        width: Metrics.WIDTH,
        height: Metrics.HEIGHT * 0.00088,
        backgroundColor: Colors.grey,
        marginBottom: Metrics.HEIGHT * 0.01
    },
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
    row: {
        flex: 1,

    },
    textInput: {
        fontSize: Fonts.moderateScale(12)
    },
    flatListStyle: {
        width: Metrics.WIDTH * 0.95,
        marginBottom: Metrics.HEIGHT * 0.1
    },
    networkList: {
        alignItems: 'center',
        marginRight: Metrics.WIDTH * 0.015,
    },
    ListViewStyle: {
        marginHorizontal: Metrics.WIDTH * 0.04,
    },
    createNetworkView: {
        flexDirection: 'column',
        borderColor: Colors.grey,
        width: Metrics.WIDTH * 0.3,
        height: Metrics.HEIGHT * 0.18,
        justifyContent: "center",
        alignItems: "center",
        shadowColor: Colors.grey,
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 1,
        elevation: 2
    },
    createButtonView: {
        marginTop: Metrics.HEIGHT * 0.0068,
        justifyContent: "center",
        alignItems: "center",
        width: Metrics.WIDTH * 0.25,
    },
    connectButtonView: {
        marginTop: Metrics.HEIGHT * 0.0068,
        justifyContent: "center",
        alignItems: "center",
        width: Metrics.WIDTH * 0.25,
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
    customCreateBView: {
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: Metrics.HEIGHT * 0.004,
    },
    customView: {
        flexDirection: 'row'
    },
    logo: {
        width: "auto",
        height: "100%",
        borderRadius: 50,
        borderColor: Colors.themeBlue,
        borderWidth: 2
    },
    createlogo: {
        width: "50%",
        height: "50%",
    },
    logoContainer: {
        width: Metrics.HEIGHT * 0.1,
        height: Metrics.HEIGHT * 0.1,
        zIndex: 0
    },
    createlogoContainer: {
        width: Metrics.HEIGHT * 0.1,
        height: Metrics.HEIGHT * 0.1,
        zIndex: 0,
        borderRadius: 50,
        borderColor: Colors.themeBlue,
        borderWidth: 2,
        justifyContent: "center",
        alignItems: "center",
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
    cancelText: {
        fontSize: Fonts.moderateScale(11)
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center",
        fontWeight: 'bold',
        fontSize:Fonts.moderateScale(11)
    },
    modalText1: {
        marginBottom: 15,
        textAlign: "center",
        fontSize:Fonts.moderateScale(11)
    },
    inputs: {
        backgroundColor: Colors.inputBackground,
        borderWidth: Metrics.HEIGHT * 0.002,
        paddingLeft: Metrics.WIDTH * 0.03,
        marginVertical: Metrics.HEIGHT * 0.01
    },
    inputsMessage: {
        backgroundColor: Colors.inputBackground,
        borderWidth: Metrics.HEIGHT * 0.002,
        paddingLeft: Metrics.WIDTH * 0.03,
        marginVertical: Metrics.HEIGHT * 0.01,
        height: Metrics.HEIGHT * 0.1
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

export default connect(mapStateToProps, mapDispatchToProps)(CreateNetworkModal);