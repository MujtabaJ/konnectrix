import React, { Component } from "react";
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { Fonts, Colors, Metrics } from "../../../Theme";
import Header from "./Components/Header";
import NameNetwork from "./Components/NameNetwork";
import Description from "./Components/Description";
import Dropdown from "@Components/Dropdown";
import NetworkPurpose from "./Components/NetworkPurpose";
import LearnMore from "./Components/LearnMore";
import { createNetworkController } from "../../../Network/Controllers/networkController";

interface ICNState {
    dropdownItems: Array<string>
    networkTitle: string,
    about: string,
    aboutDescriptive: string,
    profilePicture: string,
    coverPicture: string,
    website: string,
    phone: string,
    location: string,
    isOfficial: boolean
    networkType:string
}

interface ICNProps {

}

class NetworkCreate extends Component<ICNProps, ICNState> {
    constructor(props) {
        super(props);
        this.state = {
            dropdownItems: ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5",],
            networkTitle: "",
            about: "",
            aboutDescriptive: "",
            profilePicture: "",
            coverPicture: "",
            website: "",
            phone: "",
            location: "",
            isOfficial: false,
            networkType: ""
        }
    }

    onSubmit = () => {

        createNetworkController(this.state);

    }

    onChangeNetworkTitle = (text) => {
        this.setState({ networkTitle: text });
    }

    onChangeProfile = () => {

    }

    onChangeDescription = (text) => {
        console.warn(text);
        this.setState({ aboutDescriptive: text });
    }

    onChangeCheck = () => {
        this.setState({ isOfficial: !this.state.isOfficial })
    }

    onChangeNetworkType = (value) => {
        console.warn(value);
        this.setState({ networkType: value });
    }

    render() {
        return <View style={Styles.mainContainer} >
            <Header {...this.props} onSubmit={this.onSubmit} />
            <ScrollView contentContainerStyle={Styles.scrollContainer} >
                <NameNetwork
                    onChangeNetworkTitle={this.onChangeNetworkTitle}
                    onChangeProfile={this.onChangeProfile}
                    onChangeCheck={this.onChangeCheck}
                    isOfficial={this.state.isOfficial}
                />
                <Description
                    onChangeDescription={this.onChangeDescription}
                />
                <Dropdown
                    dropdownItems={this.state.dropdownItems}
                    title="Types of Network"
                    onChangeNetworkType={this.onChangeNetworkType}
                />
                {/* <NetworkPurpose /> */}
                {/* <Dropdown dropdownItems={this.state.dropdownItems} title="Public Network" /> */}
                <LearnMore />
            </ScrollView>
        </View>;
    }
}

const Styles = StyleSheet.create({
    mainContainer: {
        overflow: "scroll"
    },
    scrollContainer: {
        // height: "90%",
        marginHorizontal: Metrics.WIDTH * 0.05,
        justifyContent: "center"
    }

})

export default NetworkCreate;
