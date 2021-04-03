import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, } from "react-native";
import { Icon } from 'native-base';
import FloatingInputField from '@Components/FloatingInputField';
import { Colors, Fonts, Metrics } from '../../../../../Theme/index'

interface IProps {
    phoneNumberValue: string,
    phoneNumberOnChange: (text: string) => void,
    emailAddressValue: string,
    emailAddressOnChange: (text: string) => void,
    addressValue: string,
    addressOnChange: (text: string) => void,
}

const ContactAccordion = (props: IProps) => {

    const [expanded, setExpanded] = useState(false)

    const toggleExpand = () => {
        setExpanded(!expanded)
    }

    return (
        <View style={{marginTop: Metrics.HEIGHT * 0.015}}>
            <TouchableOpacity style={styles.row} onPress={() => toggleExpand()}>
                <Text style={styles.title}>CONTACT</Text>
                <Icon style={styles.icon} type='FontAwesome' name={expanded ? 'chevron-up' : 'chevron-down'} />
            </TouchableOpacity>
            {
                expanded &&
                <View style={styles.child}>
                    <FloatingInputField
                        label={"Phone Number"}
                        labelColor={Colors.blue}
                        labelFontSize={Fonts.moderateScale(10)}
                        value={props.phoneNumberValue}
                        onChangeText={text => props.phoneNumberOnChange(text)}
                    />
                    <FloatingInputField
                        label={"Email Address"}
                        labelColor={Colors.blue}
                        labelFontSize={Fonts.moderateScale(10)}
                        value={props.emailAddressValue}
                        onChangeText={text => props.emailAddressOnChange(text)}
                    />
                    <FloatingInputField
                        label={"Address"}
                        labelColor={Colors.blue}
                        labelFontSize={Fonts.moderateScale(10)}
                        value={props.addressValue}
                        onChangeText={text => props.addressOnChange(text)}
                    />
                </View>
            }
        </View>
    )
}

export default ContactAccordion;

const styles = StyleSheet.create({
    title: {
        fontSize: Fonts.moderateScale(14),
        color: Colors.black,
        marginLeft: Metrics.WIDTH * 0.05,
    },
    icon: {
        fontSize: Fonts.moderateScale(12),
        marginRight: Metrics.WIDTH * 0.05,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: Metrics.HEIGHT * 0.075,
        marginLeft: Metrics.WIDTH * 0.05,
        marginRight: Metrics.WIDTH * 0.05,
        alignItems: 'center',
        backgroundColor: Colors.silver,
    },
    child: {
        marginLeft: Metrics.WIDTH * 0.075,
        marginRight: Metrics.WIDTH * 0.075,
    }

});