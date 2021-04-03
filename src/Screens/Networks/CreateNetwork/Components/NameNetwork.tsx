import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet, } from "react-native";
import { CheckBox } from "native-base";
import { Fonts, Metrics, Colors } from "../../../../Theme";
import InputField from "@Components/InputField";
import { Translate } from "../../../../i18n/localization";

const NameNetwork = (props) => {

    const [wordsCount, setWordsCount] = useState(0)
    const changeText = (text) => {
        const length = text.length
        if (length <= 60) {
            setWordsCount(length)
            props.onChangeNetworkTitle(text);
        }
    }

    return <View style={Styles.mainContainer} >
        <View style={Styles.miniContainer} >
            <TouchableOpacity style={Styles.iconParent} onPress={() => { props.onChangeProfile() }}>
                <View style={Styles.iconContainer} >
                    <Image source={require('../../../../Assets/CreateNetwork/camera_icon.png')} style={{ width: "100%", height: "100%" }} />
                </View>
                <Text style={Styles.uploadText}>{Translate("createNetwork.upload")} </Text>
            </TouchableOpacity>
            <View style={Styles.inputContainer}>
                <InputField
                    onChangeText={changeText}
                    containerStyle={Styles.inputField}
                    placeholder={Translate("createNetwork.name")}
                />
                <Text style={Styles.valText}>{wordsCount}/60</Text>
            </View>
        </View>
        <View style={Styles.miniContainer2} >
            <Text style={Styles.officialRepText}>{Translate("createNetwork.networkRepText")} </Text>
            <View style={Styles.officialRepCheck}>
                <TouchableOpacity onPress={()=> {props.onChangeCheck()}}>
                    <CheckBox checked={props.isOfficial}  style={Styles.checkbox} />
                </TouchableOpacity>
            </View>
        </View>
    </View>;
};

const Styles = StyleSheet.create({
    mainContainer: {
        marginTop: Metrics.HEIGHT * 0.02,
        marginBottom: Metrics.HEIGHT * 0.035,
    },
    miniContainer: {
        flexDirection: "row",
    },
    inputField: {
        borderBottomWidth: Metrics.HEIGHT * 0.002,
        borderBottomColor: Colors.inputBorderCN,
        marginTop: Metrics.HEIGHT * 0.023
    },
    miniContainer2: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: Metrics.HEIGHT * 0.015,
    },
    officialRepText: {
        flex: 7,
        fontSize: Fonts.moderateScale(12)
    },
    officialRepCheck: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: "flex-end",
        marginRight: Metrics.WIDTH * 0.03
    },
    checkbox: {
        backgroundColor: Colors.checkboxBackCN,
        borderColor: Colors.checkboxBorderCN,
        borderRadius: Metrics.WIDTH * 0.009,
    },
    iconContainer: {
        height: Metrics.HEIGHT * 0.1,
        width: Metrics.HEIGHT * 0.12,
        padding: Metrics.HEIGHT * 0.015,
        borderWidth: Metrics.HEIGHT * 0.003,
        borderRadius: Metrics.HEIGHT * 0.009,
        borderColor: Colors.uploadBorderColor,
        elevation: 3,
    },
    inputContainer: {
        flex: 2
    },
    iconParent: {
        flex: 1,
    },
    valText: {
        alignSelf: "flex-end",
        marginRight: Metrics.HEIGHT * 0.005,
        marginTop: Metrics.HEIGHT * 0.005,
    },
    uploadText: {
        marginTop: Metrics.HEIGHT * 0.01,
        color: Colors.uploadPhotoCN,
        fontSize: Fonts.moderateScale(13),
        marginLeft: Metrics.HEIGHT * 0.002
    }
})

export default NameNetwork;
