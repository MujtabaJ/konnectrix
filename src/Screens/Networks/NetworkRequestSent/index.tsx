import React, { Component } from "react";
import { View, Text, StyleSheet } from 'react-native';

class NetworkRequestSent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <View >
            <Text>Network Request Sent</Text>
        </View>;
    }
}

export default NetworkRequestSent;
