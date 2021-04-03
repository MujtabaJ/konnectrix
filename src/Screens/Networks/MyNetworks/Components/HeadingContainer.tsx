import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Icon } from "native-base";
import { Colors, Metrics, Fonts } from "../../../../Theme";
import { Translate } from "../../../../i18n/localization";
// import { useNavigation } from '@react-navigation/native';

// const navigation = useNavigation();

const HeadingContainer = (props) => {
    return <View style={Styles.mainContainer} >
        <Text style={Styles.headingText} >{Translate("myNetworks.myNetwork")}</Text>
        <TouchableOpacity style={Styles.createButton} onPress={() => props.navigation.navigate('NetworkStack', { screen: 'CreateNetwork' })}>
            <Icon type="FontAwesome5" name="plus-circle" style={Styles.createButtonIcon} />
            <Text style={Styles.createButtonText} >{Translate("myNetworks.create")}</Text>
        </TouchableOpacity>
    </View>;
};

const Styles = StyleSheet.create({
    mainContainer: {
        flexDirection: "row",
        width: '100%',
        justifyContent: "space-between",
        alignItems: "center",
        marginVertical: Metrics.HEIGHT * 0.03
    },
    headingText: {
        marginLeft: Metrics.WIDTH * 0.02,
        fontSize: Fonts.moderateScale(16)
    },
    createButtonText: {
        fontSize: Fonts.moderateScale(16),
        color: Colors.createButton
    },
    createButtonIcon: {
        fontSize: Fonts.moderateScale(16),
        marginRight: Metrics.WIDTH * 0.02,
        color: Colors.createButton
    },
    createButton: {
        flexDirection: "row",
        alignItems: "center",
        elevation: 1,
        borderColor: Colors.themeBlue,
        borderWidth: Metrics.WIDTH * 0.005,
        paddingVertical: Metrics.HEIGHT * 0.005,
        paddingHorizontal: Metrics.WIDTH * 0.05,
        marginRight: Metrics.WIDTH * 0.02,
        borderRadius: Metrics.WIDTH * 0.01
    }
})

export default HeadingContainer;
