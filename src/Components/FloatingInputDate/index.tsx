import React, { useState } from 'react';
import { View, TextInput, Text, Keyboard } from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label } from 'native-base';
import { Colors, Fonts, Metrics } from '../../Theme/index';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';


interface IProps {
    label: string
    value?: any;
    onFocus?: () => void
    borderColor?: string
    onChangeDate: Function
}

const FloatingInputDate = (props: IProps) => {

    const [isShowDateModal, setIsShowDateModal] = useState(false);

    const onChangeDate = (val) => {
        setIsShowDateModal(false)
        props.onChangeDate(val)
    }

    return (
        <View style={{ margin: Metrics.HEIGHT * 0.02 }}>
            {/* <Item floatingLabel> */}
                {/* <Label style={{ color: props.labelColor, fontSize: props.labelFontSize, borderColor: props.borderColor }}>{props.label}</Label> */}
                <TextInput
                    value={props.value !== "" ? String(new Date(moment(props.value).unix() * 1000).toLocaleDateString()) : ""}
                    showSoftInputOnFocus={false}
                    style={{ borderBottomWidth: Fonts.moderateScale(1), fontSize: Fonts.moderateScale(12) }}
                    onFocus={() => {
                        setIsShowDateModal(true);
                        Keyboard.dismiss();
                    }}
                    placeholder={props.label}
                    placeholderTextColor={Colors.blue}
                />
            {/* </Item> */}
            {isShowDateModal &&
                <DateTimePicker
                    value={props.value !== "" ? new Date(Number(props.value)) : new Date()}
                    mode={'date'}
                    display="default"
                    onChange={onChangeDate}
                />
            }
        </View>
    )
}

export default FloatingInputDate;
