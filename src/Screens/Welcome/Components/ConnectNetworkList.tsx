import { Button } from 'native-base';
import React, { Component } from 'react';
import { FlatList, Image, TextInput, Modal, StyleSheet, Text, TouchableOpacity, View, ActivityIndicator, } from "react-native";
import { ScrollView } from 'react-native-gesture-handler';
import { Translate } from '../../../i18n/localization';
import { mapDispatchToProps, mapStateToProps } from '../../../Redux/Dispatchers';
import { Colors, Fonts, Metrics } from '../../../Theme';
import { connect } from 'react-redux';
import { getCoverImage } from '../../../Handlers';
import CreateNetworkModal from '../../../Components/CreateNetworkModal';


class ConnectNetworkList extends React.Component<any, any> {

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
    onDoneButtonClick(value) {
        this.setState({ toggleOverlay: value })
    }

    render() {
        return (
            <View >
                
                <ScrollView style={{ flex: 1 }} horizontal={false} showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false} >
                    <View style={styles.ListViewStyle}>
                        <FlatList
                            style={styles.flatListStyle}
                            numColumns={3}
                            columnWrapperStyle={styles.row}
                            data={this.props.networksList}
                            keyExtractor={(item, index) => item._id}

                            renderItem={({ item, index }) => (
                                <View key={index}>
                                    <View style={styles.networkList}>
                                        <View style={styles.createNetworkView}>
                                            <View style={styles.greyView}></View>
                                            <View style={styles.lightView}>
                                                <View style={[styles.logoContainer, { marginTop: '-30%', }]}>
                                                    {getCoverImage(item.profilePicture, styles.logo)}
                                                </View>
                                                <Text numberOfLines={1} style={{ fontSize: Fonts.moderateScale(11), marginTop: Metrics.WIDTH * 0.01, marginHorizontal: Metrics.WIDTH * 0.02 }}>{item.networkTitle}</Text>
                                            </View>
                                        </View>
                                        <View style={styles.connectButtonView}>
                                            <TouchableOpacity >
                                                <Button transparent onPress={() => { this.props.onConnectNetwork(item) }} style={styles.connectButton}>
                                                    <Text style={{ color: Colors.white }}>{Translate("welcome.connect")}</Text>
                                                </Button>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </View>
                            )}
                        />
                    </View>
                </ScrollView>

                <CreateNetworkModal
                    {...this.props}
                    modalVisible={this.props.modalVisible}
                    setModalVisible={this.props.setModalVisible}
                />
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
    greyView: {
        flex: 1,
        backgroundColor: Colors.lightGrey,
        width: '100%'
    },
    lightView: {
        flex: 1,
        backgroundColor: Colors.white,
        width: '100%',
        alignItems: "center",
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(ConnectNetworkList);



