import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Icon } from 'native-base';
import { Colors, Fonts, Metrics } from '../../Theme/index';

interface IProps {
    label: string
    value?: string;
    onChangeText?: (text: string) => void
    onFocus?: () => void
    onBlur?: () => void
    keyboardType?: string
    showSoftInputOnFocus?: boolean
    caretHidden?: boolean
    showDropdownIcon?: boolean
}

const FloatingInputField = (props: IProps) => {
    return (
        <View style={{ margin: Metrics.HEIGHT * 0.02, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
            {/* <Item floatingLabel> */}
            {/* <Label style={{ color: props.labelColor, fontSize: props.labelFontSize }}>{props.label}</Label> */}
            <TextInput
                onChangeText={(text) => props.onChangeText(text)}
                value={props.value}
                onFocus={props.onFocus}
                placeholder={props.label}
                keyboardType={props.keyboardType}
                onBlur={props.onBlur}
                showSoftInputOnFocus={props.showSoftInputOnFocus}
                style={{ borderBottomWidth: Fonts.moderateScale(1), fontSize: Fonts.moderateScale(12), flex: 1, }}
                autoCorrect={false}
                autoComplete={false}
                underlineColorAndroid='transparent'
                placeholderTextColor={Colors.blue}
                caretHidden={props.caretHidden}
            />
            {props.showDropdownIcon &&
                <Icon name='chevron-down' type='FontAwesome' style={styles.dropdownIconStyle} />
            }
            {/* </Item> */}
        </View>
    )
}

export default FloatingInputField;

const styles = StyleSheet.create({
    dropdownIconStyle: {
        fontSize: Fonts.moderateScale(14),
        color: Colors.black,
        position: 'absolute',
        right: 0,
    },
});