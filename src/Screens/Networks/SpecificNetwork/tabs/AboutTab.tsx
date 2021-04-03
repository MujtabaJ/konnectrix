import React from "react";
import { View, StyleSheet } from 'react-native';
import { Text } from 'native-base';
import { Colors, Fonts, Metrics } from '../../../../Theme/index';

const AboutTab = (props) => {
    console.log(props.getNetworkDetails);
    return (
        <View style={styles.container}>
            <View style={styles.aboutDescriptionContainer}>
                <Text style={styles.overviewText}>Overview</Text>
                <Text style={styles.aboutDescriptionText}>
                {props.getNetworkDetails.aboutDescriptive}
                </Text>
            </View>
            <View style={styles.contactContainer}>
                { props.getNetworkDetails.website && <View style={styles.contactDetailsContainer}>
                    <Text style={styles.blackBoldText}>Website</Text>
                    <Text style={styles.blueText}>{props.getNetworkDetails.website}</Text>
                </View> }
                { props.getNetworkDetails.location && <View style={styles.contactDetailsContainer}>
                    <Text style={styles.blackBoldText}>Location</Text>
                    <Text style={styles.blackText}>{props.getNetworkDetails.location}</Text>
                </View> }
                { props.getNetworkDetails.phone && <View style={styles.contactDetailsContainer}>
                    <Text style={styles.blackBoldText}>Phone</Text>
                    <Text style={styles.blackText}>{props.getNetworkDetails.phone}</Text>
                </View> }
                { props.getNetworkDetails.founded && <View style={styles.contactDetailsContainer}>
                    <Text style={styles.blackBoldText}>Founded</Text>
                    <Text style={styles.blackText}>{props.getNetworkDetails.founded}</Text>
                </View> }
                { props.getNetworkDetails.location2 && <View style={styles.contactDetailsContainer}>
                    <Text style={styles.blackBoldText}>Location 2</Text>
                    <Text style={styles.blackText}>{props.getNetworkDetails.location2}</Text>
                </View> }
                { props.getNetworkDetails.phone2 && <View style={styles.contactDetailsContainer}>
                    <Text style={styles.blackBoldText}>Phone 2</Text>
                    <Text style={styles.blackText}>{props.getNetworkDetails.phone2}</Text>
                </View> }
                { props.getNetworkDetails.fax2 && <View style={{ ...styles.contactDetailsContainer, marginBottom: Metrics.HEIGHT * 0.03 }}>
                    <Text style={styles.blackBoldText}>Fax 2</Text>
                    <Text style={styles.blackText}>{props.getNetworkDetails.fax2}</Text>
                </View> }
            </View>
        </View>
    )
}

export default AboutTab;

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        borderTopColor: Colors.grey,
        borderTopWidth: Fonts.moderateScale(12),
        borderBottomColor: Colors.grey,
        borderBottomWidth: Fonts.moderateScale(4),
    },
    aboutDescriptionContainer: {
        marginHorizontal: Metrics.WIDTH * 0.05
    },
    contactContainer: {
        marginVertical: Metrics.HEIGHT * 0.03,
        borderWidth: Fonts.moderateScale(1),
        borderColor: Colors.grey,
        width: Metrics.WIDTH * 0.95,
        justifyContent: 'center',
    },
    contactDetailsContainer: {
        marginTop: Metrics.HEIGHT * 0.03,
        marginHorizontal: Metrics.WIDTH * 0.03,
    },
    overviewText: {
        fontSize: Fonts.moderateScale(14),
        color: Colors.black,
        fontWeight: 'bold',
        marginTop: Metrics.HEIGHT * 0.015,
        marginBottom: Metrics.HEIGHT * 0.005
    },
    aboutDescriptionText: {
        fontSize: Fonts.moderateScale(12),
        color: Colors.darkGrey,
        marginBottom: Metrics.HEIGHT * 0.005,
        textAlign: 'center'
    },
    blackText: {
        fontSize: Fonts.moderateScale(12),
        color: Colors.black
    },
    blackBoldText: {
        fontSize: Fonts.moderateScale(12),
        color: Colors.black,
        fontWeight: 'bold',
        marginBottom: Metrics.HEIGHT * 0.003
    },
    blueText: {
        fontSize: Fonts.moderateScale(12),
        color: Colors.blue
    },
})