import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Metrics, Colors } from "../../../Theme";
import InputField from "../../../Components/InputField";
import { Translate } from "../../../i18n/localization";
import { IFieldsProps } from "../../../Types/Registration";

const RegistrationFields = (props: IFieldsProps) => {
    return <View style={Styles.mainContainer} >
        <View style={Styles.nameRow}>
            <InputField
                placeholder={Translate("Registration.firstName")}
                containerStyle={{ ...Styles.rowInputs, borderColor: props.Error.firstNameBorder && Colors.errorBorder || Colors.inputBorder }}
                onChangeText={(text: string) => props.onChange(text, "firstName")}
                keyboardType="default"
                value={props.fieldsValues.firstName}
                maxLength={25}
            />
            <InputField
                placeholder={Translate("Registration.lastName")}
                containerStyle={{ ...Styles.rowInputs, borderColor: props.Error.lastNameBorder && Colors.errorBorder || Colors.inputBorder }}
                onChangeText={(text: string) => props.onChange(text, "lastName")}
                keyboardType="default"
                value={props.fieldsValues.lastName}
                maxLength={25}
            />
        </View>
        <InputField
            placeholder={Translate("Registration.email")}
            containerStyle={{ ...Styles.inputs, borderColor: props.Error.emailBorder && Colors.errorBorder || Colors.inputBorder }}
            onChangeText={(text: string) => props.onChange(text, "email")}
            keyboardType="email-address"
            value={props.fieldsValues.email}
            maxLength={30}
        />
        <InputField
            placeholder={Translate("Registration.phone")}
            containerStyle={{ ...Styles.inputs, borderColor: props.Error.phoneNumberBorder && Colors.errorBorder || Colors.inputBorder }}
            onChangeText={(text: string) => props.onChange(text, "phoneNumber")}
            keyboardType="phone-pad"
            value={props.fieldsValues.phoneNumber}
            maxLength={15}
        />
        <InputField
            placeholder={Translate("Registration.password")}
            containerStyle={{ ...Styles.inputs, borderColor: props.Error.passwordBorder && Colors.errorBorder || Colors.inputBorder }}
            onChangeText={(text: string) => props.onChange(text, "password")}
            keyboardType="default"
            showRightIcon
            secureTextEntry={true}
            value={props.fieldsValues.password}
        />
        <InputField
            placeholder={Translate("Registration.confirmPassword")}
            containerStyle={{ ...Styles.inputs, borderColor: props.Error.confirmPasswordBorder && Colors.errorBorder || Colors.inputBorder }}
            onChangeText={(text: string) => props.onChange(text, "confirmPassword")}
            keyboardType="default"
            showRightIcon
            secureTextEntry={true}
            value={props.fieldsValues.confirmPassword}
        />
    </View>;
};

const Styles = StyleSheet.create({
    mainContainer: {
        width: Metrics.WIDTH * 0.9,
        maxWidth: Metrics.maxWidthRegistration,
        justifyContent: "center",
    },
    inputs: {
        backgroundColor: Colors.inputBackground,
        borderWidth: Metrics.HEIGHT * 0.002,
        paddingLeft: Metrics.WIDTH * 0.03,
        marginVertical: Metrics.HEIGHT * 0.01
    },
    nameRow: {
        flexDirection: "row",
        justifyContent: 'space-between'
    },
    rowInputs: {
        backgroundColor: Colors.inputBackground,
        borderWidth: Metrics.HEIGHT * 0.002,
        paddingLeft: Metrics.WIDTH * 0.03,
        marginVertical: Metrics.HEIGHT * 0.01,
        width: Metrics.WIDTH * 0.44
    }
})

export default RegistrationFields;
