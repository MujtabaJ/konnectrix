import React from 'react';
import { ScrollView, View, Text, StyleSheet, TouchableNativeFeedback } from 'react-native';
import { Thumbnail } from 'native-base';
import { Translate } from '../../i18n/localization';
import { useNavigation } from '@react-navigation/native';
import { Colors, Fonts, Metrics } from '../../Theme';
import ViewAllComponent from '../ViewAllComponent';

const NetworkListComponent = (props) => {
    const navigation = useNavigation();
    return (
        <View style={styles.swiperView}>
            {!props.isDisableViewAll &&
                <ViewAllComponent
                    heading={Translate("home.networks")}
                    navigate={() => navigation.navigate('NetworkStack', { screen: 'MyNetworks' })}
                    buttonTitle={Translate("home.viewall")}
                />
            }
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.networkContainer}
            >
                {props.userConnectedNetworksList.map((networks, index) => {
                    return (
                        <View style={styles.scrollContent} key={index}>
                            <TouchableNativeFeedback onPress={() => navigation.navigate('NetworkStack', { screen: 'SpecificNetwork', params: { networkId: networks._id } })}>
                                <View style={styles.scrollImageViewMyNetwork}>
                                    <View style={styles.networkAddThumbView}>
                                        <Thumbnail source={{ uri: networks.profilePicture }} style={styles.networkAddThumb} />
                                    </View>
                                    <View style={styles.networkTitleView}>
                                        <Text numberOfLines={2} style={styles.networkTitle}>{networks.networkTitle}</Text>
                                    </View>
                                </View>
                            </TouchableNativeFeedback>
                        </View>
                    );
                })}
            </ScrollView>
        </View >
    );
}

const styles = StyleSheet.create({
    swiperView: {
        borderBottomWidth: Metrics.HEIGHT * 0.015,
        borderBottomColor: Colors.lightGrey,
        borderColor: Colors.lightGrey,
        borderWidth: 1,
        paddingBottom: 10,
        height: Metrics.HEIGHT * 0.35,
    },
    scrollContent: {
        justifyContent: 'space-evenly',
        width: Metrics.WIDTH * 0.41,
        height: '100%',
    },
    networkContainer: {
        paddingEnd: "3%",
        paddingStart: "3%",
        alignItems: 'center'
    },
    scrollImageViewMyNetwork: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        borderColor: Colors.darkGrey,
        borderWidth: 0.5,
        width: Metrics.WIDTH * 0.38,
    },
    networkAddThumbView: {
        flex: 1,
        height: Metrics.HEIGHT * 0.15,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.networkBackground
    },
    networkAddThumb: {
        borderRadius: Metrics.HEIGHT * 0.5,
        marginTop: Metrics.HEIGHT * 0.068,
        width: Metrics.HEIGHT * 0.15,
        height: Metrics.HEIGHT * 0.15
    },
    networkThumbView: {
        height: '70%',
        width: '100%',
        backgroundColor: Colors.darkGrey
    },
    networkThumbViewBackground: {
        height: '100%',
        width: '100%',
        alignItems: 'center',
    },
    networkThumb: {
        marginTop: '2%',
    },
    networkTitleView: {
        height: '30%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    networkTitle: {
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        fontSize: Fonts.moderateScale(12),
        marginTop: Metrics.HEIGHT * 0.005
    },
});

export default NetworkListComponent;