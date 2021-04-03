import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Icon, Thumbnail } from 'native-base';
import { Colors, Fonts, Metrics } from '../../../../../Theme/index';
import ViewMoreText from 'react-native-view-more-text';

export default function informationContainer(props) {
    const renderViewMore = () => {
        return (
            <Text onPress={() => { }} style={styles.blueText}>see more</Text>
        )
    }
    return (
        <View style={styles.outerContainer}>
            <View style={styles.innerContainer}>
                <View style={styles.sameRow}>
                    <Text style={styles.aboutText}>About</Text>
                    <Icon name='pencil' type='FontAwesome' style={styles.editIconStyle} onPress={() => props.navigation.navigate("AboutAccordion")} />
                </View>
                <ViewMoreText numberOfLines={3} renderViewMore={renderViewMore}>
                    <Text style={styles.aboutDescriptionText}>{props.aboutDescriptionText}</Text>
                </ViewMoreText>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    outerContainer: {
        borderTopColor: Colors.grey,
        borderTopWidth: Fonts.moderateScale(10),
        borderBottomColor: Colors.grey,
        borderBottomWidth: Fonts.moderateScale(10),
    },
    innerContainer: {
        marginHorizontal: Metrics.WIDTH * 0.05,
        marginVertical: Metrics.HEIGHT * 0.01,
    },
    aboutText: {
        fontSize: Fonts.moderateScale(16),
        color: Colors.black,
        marginTop: Metrics.HEIGHT * 0.015,
        marginBottom: Metrics.HEIGHT * 0.015
    },
    aboutDescriptionText: {
        fontSize: Fonts.moderateScale(12),
        color: Colors.black,
        marginBottom: Metrics.HEIGHT * 0.005,
    },
    blueText: {
        fontSize: Fonts.moderateScale(12),
        color: Colors.blue
    },
    blackText: {
        fontSize: Fonts.moderateScale(12),
        color: Colors.black
    },
    sameRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    editIconStyle: {
        fontSize: Fonts.moderateScale(22),
        color: Colors.black,
        textAlign: 'right',
        flex: 1
    },
});