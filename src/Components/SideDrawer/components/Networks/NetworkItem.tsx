import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Icon } from "native-base";
import { Fonts, Metrics, Colors } from "../../../../Theme/index";
import { INetworkItemProps } from "../../../../Types/DrawerTypes";
import { useNavigation } from '@react-navigation/native';

const NetworkItem = (props: INetworkItemProps) => {
    const navigation = useNavigation();
    return (
        <TouchableOpacity style={Styles.mainContainer} onPress={() => {
            navigation.navigate('NetworkStack', { screen: 'SpecificNetwork', params: { networkId: props.networkDetails._id } })
        }} >
            <View style={Styles.iconContainer} >
                <Icon type="Ionicons" name="snow-outline" style={Styles.icon} />
            </View>
            <View style={Styles.textContainer}>
                <Text style={Styles.text}>{props.networkDetails.networkTitle}</Text>
                {props.count && <Text style={Styles.notCount}>{props.count}</Text>}
            </View>
        </TouchableOpacity>
    )
}

const Styles = StyleSheet.create({
    mainContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: Metrics.WIDTH * 0.02,
        marginBottom: Metrics.WIDTH * 0.02,
    },
    iconContainer: {
        flex: 1,
        alignItems: "flex-end",
        marginRight: Metrics.WIDTH * 0.04
    },
    textContainer: {
        flex: 4,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    text: {
        color: Colors.networkItems,
        fontSize: Fonts.moderateScale(12),
    },
    notCount: {
        marginRight: Metrics.WIDTH * 0.02,
        fontSize: Fonts.moderateScale(11),
        justifyContent: "center",
        color: Colors.white,
        fontWeight: "bold",
        backgroundColor: Colors.themeBlue,
        paddingLeft: Metrics.WIDTH * 0.03,
        paddingRight: Metrics.WIDTH * 0.03,
        borderRadius: Metrics.WIDTH * 0.09
    },
    icon: {
        color: Colors.networkItems,
        fontSize: Fonts.moderateScale(16),
    }
})

export default NetworkItem;
