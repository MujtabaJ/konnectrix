import React from "react";
import { View, Text, StyleSheet } from "react-native";
import DiscoveryOptions from "./DiscoveryOptions";
import NetworkItem from "./NetworkItem";
import { INetworkRequestProps } from "../../../../Types/MyNetworks";
import { Metrics, Colors, Fonts } from "../../../../Theme";

const NetworkRequest = (props: INetworkRequestProps) => {
    return <View style={Styles.mainContainer} >
        <DiscoveryOptions />
        {props.inviteItems.map((element, index) => {
            return <NetworkItem key={index} inviteText={element.inviteText} networkTitle={element.networkTitle} />
        })}
    </View>;
};

const Styles = StyleSheet.create({
    mainContainer: {
        // alignItems: "center",
        // maxWidth: Metrics.maxWidthNetworkItem
    }
})

export default NetworkRequest;
