import { Button, Container, Content, Icon, Input, Item, Text } from 'native-base';
import React, { Component } from 'react';
import { StyleSheet, View, ImageBackground, TouchableWithoutFeedback, ToastAndroid, Keyboard, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Translate } from '../../i18n/localization';
import { connectNetworkController, getNetworkListController } from '../../Network/Controllers/networkController';
import { Colors, Fonts, Metrics } from '../../Theme';
import ConnectNetworkList from './Components/ConnectNetworkList';
import Logo from './Components/Logo';
import WelcomeHeader from './Components/WelcomeHeader';

import { connect } from 'react-redux';
import { mapDispatchToProps, mapStateToProps } from '../../Redux/Dispatchers';
import CustomButton from '../../Components/CustomButton';

class Welcome extends React.Component<any, any> {

    constructor(props) {
        super(props)
        this.state = {
            userID: '',
            networksList: [],
            modalVisible: false,
            networkListholder: [],
            value: ''
        }
        this.getNetworkList();
    }

    componentDidLoad() {
        this.getNetworkList();
    }

    getNetworkList = async () => {
        await getNetworkListController(0, 0).then((data) => {
            console.warn(data.data);
            this.props.setPublicNetworksList(data.data);
            this.setState({ networksList: data.data, networkListholder: data.data });
        }).catch((error) => {
            console.warn(error);

        });
    }

    onCreateNetwork = async () => {
        this.props.navigation.navigate('NetworkStack', { screen: 'CreateNetwork' })
    }

    searchFilterFunction = text => {
        this.setState({
            value: text,
        });

        const searchedNetworkList = this.state.networkListholder.filter(item => {
            const networkData = `${item.networkTitle.toUpperCase()} ${item.networkTitle.toUpperCase()} ${item.networkTitle.toUpperCase()}`;
            const networkText = text.toUpperCase();

            return networkData.indexOf(networkText) > -1;
        });
        this.setState({
            networksList: searchedNetworkList,
        });
    };

    onConnectNetwork = async (networkDetails) => {
        this.props.navigation.navigate('NetworkJoinRequest', { networkDetails })
    }

    setModalVisible = (visible) => {
        this.setState({ modalVisible: visible });
    }

    render() {
        const { modalVisible } = this.state;
        return (
            <Container style={styles.mainContainer}>
                <ImageBackground source={require('../../Assets/Login/bg_login.png')} style={styles.loginBackground} >
                    <View>
                        <View style={styles.headerContainer}>
                            <WelcomeHeader {...this.props} />
                            <Logo />
                            <View style={styles.logoView}>
                                <Text style={styles.yourText}>{Translate("splash.your")}</Text>
                                <Text style={styles.networkText}>{Translate("splash.network")}</Text>
                                <Text style={styles.networthText}>{Translate("splash.networth")}</Text>
                            </View>
                        </View>
                        <TouchableOpacity style={{ alignSelf: 'flex-end', marginEnd: Metrics.WIDTH * 0.03 }} onPress={() => this.setModalVisible(!modalVisible)} >
                            <Text style={{ fontSize: Fonts.moderateScale(11), fontWeight: 'bold', color: Colors.themeBlue, textAlign: 'center' }}>{Translate("welcome.create")}</Text>
                        </TouchableOpacity>
                        <View style={styles.lineView}></View>
                        <Content>
                            <ConnectNetworkList
                                networksList={this.state.networksList}
                                onConnectNetwork={this.onConnectNetwork}
                                onCreateNetwork={this.onCreateNetwork}
                                {...this.props}
                                modalVisible={modalVisible}
                                setModalVisible={this.setModalVisible}
                            />
                        </Content>
                    </View>
                </ImageBackground >
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    body: {
        paddingHorizontal: Metrics.WIDTH * 0.004,
        marginHorizontal: Metrics.WIDTH * 0.1,
        marginBottom: Metrics.HEIGHT * 0.015
    },
    searchBarStyle: {
        width: '100%',
        backgroundColor: Colors.white,
        color: '#727272',
        height: Metrics.HEIGHT * 0.04,
        borderRadius: 5,
        borderColor: 'transparent'
    },
    searchicon: {
        fontSize: Fonts.moderateScale(16),
        color: Colors.black,
        marginLeft: Metrics.WIDTH * 0.01
    },
    loginBackground: {
        height: Metrics.HEIGHT,
        width: Metrics.WIDTH,
        alignItems: "center"
    },
    mainContainer: {
        flex: 1,
    },
    headerContainer: {
        justifyContent: "center",
        alignItems: "center",
    },
    availableNetworksView: {
        marginHorizontal: Metrics.WIDTH * 0.04,
        flexDirection: 'row',
        marginBottom: Metrics.HEIGHT * 0.02
    },
    networkList: {
        marginHorizontal: Metrics.WIDTH * 0.04,
    },
    lineView: {
        width: Metrics.WIDTH,
        height: Metrics.HEIGHT * 0.00088,
        backgroundColor: Colors.grey,
        marginBottom: Metrics.HEIGHT * 0.01
    },
    logoView: {
        flexDirection: 'row',
        marginTop: Metrics.HEIGHT * 0.001,
        marginBottom: Metrics.HEIGHT * 0.015
    },
    yourText: {
        color: Colors.themeYellow,
        fontSize: Fonts.moderateScale(14),
        fontWeight: 'bold'
    },
    networkText: {
        color: Colors.black,
        fontSize: Fonts.moderateScale(14),
        fontWeight: 'bold'
    },
    networthText: {
        color: Colors.themeYellow,
        fontSize: Fonts.moderateScale(14),
        fontWeight: 'bold'
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(Welcome);