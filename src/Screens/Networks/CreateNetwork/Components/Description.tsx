import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { Colors, Metrics, Fonts } from "../../../../Theme";
import { Translate } from "../../../../i18n/localization";

const Description = (props) => {
    return <View style={Styles.mainContainer} >
        <Text style={Styles.mainHeading} >{Translate("createNetwork.addDescription")}</Text>
        <Text style={Styles.subHeading} >{Translate("createNetwork.describeNetworkText")}</Text>
        <TextInput
            style={Styles.multilineInput}
            multiline
            numberOfLines={5}
            placeholder={Translate("createNetwork.describeNetworkPlaceholder")}
            onChangeText={(text) => props.onChangeDescription(text)}
        />
        <Text style={Styles.addDetailsText} >{Translate("createNetwork.addDetails")}</Text>
    </View>;
};

const Styles = StyleSheet.create({
    mainContainer: {
        marginBottom: Metrics.WIDTH * 0.1
    },
    mainHeading: {
        fontSize: Fonts.moderateScale(12),
        marginBottom: Metrics.WIDTH * 0.01
    },
    subHeading: {
        fontSize: Fonts.moderateScale(12),
        color: Colors.describeTextCN,
        marginBottom: Metrics.WIDTH * 0.04
    },
    addDetailsText: {
        alignSelf: "flex-end",
        marginTop: Metrics.HEIGHT * 0.01,
        fontSize: Fonts.moderateScale(12),
        color: Colors.addDetailsTextCN
    },
    multilineInput: {
        padding: Metrics.WIDTH * 0.04,
        borderWidth: Metrics.WIDTH * 0.003,
        borderColor: Colors.describeTextBorderCN,
        borderRadius: Metrics.WIDTH * 0.02,
        textAlignVertical: "top",
        fontSize: Fonts.moderateScale(16)
    }
})

export default Description;
