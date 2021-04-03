import React from "react";
import { View, StyleSheet } from 'react-native';
import { Thumbnail, Text } from 'native-base';
import { Colors, Fonts, Metrics } from '../../../../Theme/index';

interface IProps {
    imageUrl?: string
    name: string
    title: string
    description: string
}

const ConnectionInformation = (props: IProps) => {
    return (
        <View style={styles.container}>
            <Thumbnail source={{ uri: props.imageUrl }} style={styles.avatarStyle} />
            <View style={{ justifyContent: 'center', marginLeft: Metrics.WIDTH * 0.03 }}>
                <Text style={styles.nameText}>{props.name}</Text>
                <Text style={styles.titleText}>{props.title}</Text>
                <Text style={styles.descriptionText}>{props.description}</Text>
            </View>
        </View>
    );
}

export default ConnectionInformation;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginBottom: Metrics.HEIGHT * 0.02,
        marginHorizontal: Metrics.WIDTH * 0.05
    },
    avatarStyle: {
        width: Metrics.HEIGHT * 0.075, height: Metrics.HEIGHT * 0.075
    },
    nameText: {
        fontSize: Fonts.moderateScale(12),
        fontWeight: 'bold'
    },
    titleText: {
        fontSize: Fonts.moderateScale(12),
    },
    descriptionText: {
        fontSize: Fonts.moderateScale(12),
        color: Colors.blue
    },
    buttonsRow: {
        flexDirection: 'row',
        flex: 0.6,
        justifyContent: 'space-evenly'
    }
})