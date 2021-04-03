import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Icon, Thumbnail } from 'native-base';
import { Colors, Fonts, Metrics } from '../../../../../Theme/index';

export default function informationContainer({ getNetworkDetails }) {
    return (
        <View style={styles.informationContainer}>
            <View style={{ flexDirection: 'row' }}>
                <View style={styles.displayImageContainer}>
                    <Thumbnail
                        source={{ uri: getNetworkDetails.profilePicture }}
                        style={styles.thumbnailStyle}
                        square={true}
                    />
                </View>
                <View style={styles.followingContainer}>
                    <View style={{ flexDirection: "row", alignItems: "center" }} >
                        <Icon name='check-circle' type='FontAwesome' style={styles.followingIconStyle} />
                        <Text style={styles.followingText}>Connected</Text>
                    </View>
                </View>
            </View>
            <View style={styles.descriptionContainer}>
                <Text style={styles.networkNameText}>{getNetworkDetails.networkTitle}</Text>
                <Text style={styles.blackText}>{getNetworkDetails.about}</Text>
                <Text style={styles.blackText}>{getNetworkDetails.aboutDescriptive}</Text>
                {/* <View style={styles.connectionsInformationContainer}>
                    <Text style={{ ...styles.connectionsText }}>Memon Network & other 25 connections work here</Text>
                    <Icon name='link' type='FontAwesome' style={{ ...styles.linkIconStyle }} />
                </View> */}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    informationContainer: {
        marginHorizontal: Metrics.WIDTH * 0.05,
        marginTop: Metrics.HEIGHT * 0.03,
        marginBottom: Metrics.HEIGHT * 0.02,
    },
    displayImageContainer: {
        flex: 1
    },
    followingContainer: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'flex-end',
        marginVertical: Metrics.HEIGHT * 0.005,
        flex: 1
    },
    thumbnailStyle: {
        width: Metrics.HEIGHT * 0.15,
        height: Metrics.HEIGHT * 0.15,
        borderWidth: Fonts.moderateScale(1),
        borderColor: Colors.black
    },
    descriptionContainer: {
        marginTop: Metrics.HEIGHT * 0.02,
    },
    networkNameText: {
        fontSize: Fonts.moderateScale(16),
        color: Colors.black,
        fontWeight: 'bold'
    },
    followingText: {
        fontSize: Fonts.moderateScale(12),
        textAlign: 'right'
    },
    blackText: {
        fontSize: Fonts.moderateScale(12),
        color: Colors.black
    },
    connectionsText: {
        fontSize: Fonts.moderateScale(12),
    },
    followingIconStyle: {
        fontSize: Fonts.moderateScale(24),
        color: Colors.green,
        marginRight: Metrics.WIDTH * 0.01,
    },
    linkIconStyle: {
        fontSize: Fonts.moderateScale(20),
        // color: Colors.blue,
        marginLeft: Metrics.WIDTH * 0.01,
    },
    connectionsInformationContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: Metrics.HEIGHT * 0.015,

    },
});