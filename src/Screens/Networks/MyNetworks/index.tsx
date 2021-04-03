import React, { Component } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Container, Content } from "native-base";
import jsonData from "../../../Components/JsonData";
import HeaderComponent from "../../../Components/HeaderComponent";
import NetworkRequest from "./Components/NetworkRequest";
import NetworkListComponent from '@Components/NetworkListComponent';
import HeadingContainer from "./Components/HeadingContainer";
import { networks } from "../../../MockData/index.json";
import { mapDispatchToProps, mapStateToProps } from "../../../Redux/Dispatchers";
import { connect } from "react-redux";
import { Metrics } from "../../../Theme";

class MyNetworks extends React.Component<any, any> {

    constructor(props) {
        super(props);
        this.state = {
            NetworkItems: [{ inviteText: "Abdul Jabbar Invited you to join", networkTitle: "Memon Network " }, { inviteText: "Abdul Jabbar Invited you to join", networkTitle: "Memon Network " }]
        }
    }

    render() {
        return <Container style={Styles.mainContainer} >
            <HeaderComponent
                navigation={this.props.navigation}
                backIcon={false}
                menuIcon={true}
                right={true}
                placeholder={'Search'}
                bodyText={'Home'}
            />
            <Content contentContainerStyle={Styles.contentContainer} >
                <HeadingContainer {...this.props} />
                <NetworkListComponent
                    userConnectedNetworksList={this.props.userConnectedNetworksList}
                    navigation={this.props.navigation}
                    isDisableViewAll={true} />
                <NetworkRequest inviteItems={this.state.NetworkItems} />
            </Content>
        </Container>;
    };
}

const Styles = StyleSheet.create({
    mainContainer: {
    },
    contentContainer: {
        marginHorizontal: Metrics.WIDTH * 0.01,
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(MyNetworks);
