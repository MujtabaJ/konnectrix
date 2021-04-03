import React from "react";
import { View, Text, StyleSheet } from "react-native";
import InputField from "@Components/InputField";
import { Translate } from "../../../../i18n/localization";
import { Colors, Metrics, Fonts } from "../../../../Theme";

const NetworkPurpose = (props) => {
    return <View style={Styles.mainContainer} >
        <InputField
            onChangeText={() => { }}
            containerStyle={Styles.inputField}
            placeholder={Translate("createNetwork.purposeOfNetwork")}
            inputPlaceholderColor={Colors.inputPlaceholderCN}
        />
    </View>;
};

const Styles = StyleSheet.create({
    mainContainer: {
        height: Metrics.inputHeight,
        // marginVertical: Metrics.HEIGHT * 0.02
        // backgroundColor: "pink",
        marginBottom: Metrics.WIDTH * 0.1
    },
    inputField: {
        borderBottomWidth: Metrics.HEIGHT * 0.002,
        borderBottomColor: Colors.inputBorderCN,
    }
})

export default NetworkPurpose;
