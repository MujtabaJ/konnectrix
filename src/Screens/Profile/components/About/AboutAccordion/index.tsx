import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, TextInput } from "react-native";
import { Container, Content, Icon } from 'native-base';
import { Item, Input, Label } from 'native-base';
import { Colors, Fonts, Metrics } from '../../../../../Theme/index';
import validator from '../../../../../Common/Validator';
import ModalHeader from '../../../../../Components/ModalHeader';
import FloatingInputField from '../../../../../Components/FloatingInputField';
import FloatingInputDate from '../../../../../Components/FloatingInputDate';
import { updateUserProfileController } from '../../../../../Network/Controllers/userController';
import { getUserProfileController } from '../../../../../Network/Controllers/authController';
import { connect } from 'react-redux';
import { mapDispatchToProps, mapStateToProps } from "../../../../../Redux/Dispatchers";
import moment from 'moment';
import ModalSelector from 'react-native-modal-selector';
import DateTimePicker from '@react-native-community/datetimepicker';

class AboutAccordion extends React.Component<any, any> {

    constructor(props) {
        super(props);
        this.state = {
            userId: "",
            firstName: "",
            lastName: "",
            countryName: "",
            occupation: "",
            dateOfBirth: "",
            gender: "",
            emailAddress: "",
            city: "",
            state1: "",
            about: "",
            aboutDescription: "",
            isLoading: false,
            expanded: true,
            profile: props.Profile,
            isShowGenderPickerModal: false,
            textInputValue: ''
        };
    }

    componentDidMount = () => {
        this.fetchReduxState();
    }
    firstNameOnChange = (value) => {
        const firstName = validator.nameReplace(value)
        this.setState({ firstName });
    }
    lastNameOnChange = (value) => {
        const lastName = validator.nameReplace(value)
        this.setState({ lastName });
    }
    countryNameOnChange = (countryName) => {
        this.setState({ countryName });
    }
    occupationOnChange = (occupation) => {
        this.setState({ occupation });
    }
    onChangeDate = (value) => {
        if (value.type === "set") {
            this.setState({ dateOfBirth: value.nativeEvent.timestamp })
        }
    }
    genderOnChange = (gender) => {
        this.setState({ gender });
    }
    emailAddressOnChange = (value) => {
        this.setState({ emailAddress: value });
    }
    cityOnChange = (value) => {
        this.setState({ city: value });
    }
    stateOnChange = (value) => {
        this.setState({ state1: value });
    }
    aboutOnChange = (value) => {
        this.setState({ about: value });
    }
    aboutDescriptionOnChange = (value) => {
        this.setState({ aboutDescription: value });
    }
    fetchReduxState = () => {
        this.setState({
            userId: this.props.userId,
            firstName: this.props.firstName,
            lastName: this.props.lastName,
            countryName: this.props.countryName,
            occupation: this.props.occupation,
            dateOfBirth: this.props.dateOfBirth == "0001-01-01T00:00:00+00:00" ?  new Date() :  new Date(this.props.dateOfBirth),
            gender: this.props.gender,
            emailAddress: this.props.emailAddress,
            city: this.props.city,
            state1: this.props.state1,
            about: this.props.about,
            aboutDescription: this.props.aboutDescription
        });
    }
    onSave = () => {
        this.setState({ isLoading: true });
        const { userId, firstName, lastName, city, state1, about, aboutDescription, countryName, dateOfBirth, occupation, gender } = this.state;
        updateUserProfileController(userId, firstName, lastName, city, state1, about, aboutDescription, countryName, dateOfBirth, occupation, gender).then((data) => {
            getUserProfileController(this.props).then((data) => {
                this.setState({ isLoading: false });
                this.props.navigation.goBack();
            }).catch((err) => {
                console.log(err);
                this.props.navigation.goBack();
            });
        }).catch((err) => {
            console.log(err);
            this.setState({ isLoading: false });
            this.props.navigation.goBack();
        });
    }

    render() {
        const { userId, firstName, lastName, city, state1, about, aboutDescription, countryName, dateOfBirth, occupation, gender } = this.state;

        let index = 0;
        const genderData = [
            { key: index++, section: this.state.gender === "Male", label: 'Male' },
            { key: index++, section: this.state.gender === "Female", label: 'Female' },
            { key: index++, section: this.state.gender === "Other", label: 'Other' },
        ];

        return (
            <Container>
                <ModalHeader
                    backIcon={true}
                    bodyText={"Add info to your profile"}
                    rightText={"Save"}
                    rightLoader={this.state.isLoading}
                    {...this.props}
                    rightOnPress={this.onSave}
                />
                <Content>
                    <View style={{ marginTop: Metrics.HEIGHT * 0.03 }}>
                        <TouchableOpacity style={styles.row} onPress={() => this.setState({ expanded: !this.state.expanded })}>
                            <Text style={styles.title}>ABOUT</Text>
                            <Icon style={styles.icon} type='FontAwesome' name={this.state.expanded ? 'chevron-up' : 'chevron-down'} />
                        </TouchableOpacity>
                        {
                            this.state.expanded &&

                            <View style={styles.child}>
                                <FloatingInputField
                                    label={"First Name"}
                                    value={firstName}
                                    onChangeText={text => this.firstNameOnChange(text)}
                                />
                                <FloatingInputField
                                    label={"Last Name"}
                                    value={lastName}
                                    onChangeText={text => this.lastNameOnChange(text)}
                                />
                                {/* <FloatingInputField
                                label={"Email Address"}
                                labelColor={Colors.blue}
                                labelFontSize={Fonts.moderateScale(10)}
                                value={emailAddress}
                                onChangeText={text => emailAddressOnChange(text)}
                            /> */}
                                <FloatingInputField
                                    label={"City"}
                                    value={city}
                                    onChangeText={text => this.cityOnChange(text)}
                                />
                                <FloatingInputField
                                    label={"State"}
                                    value={state1}
                                    onChangeText={text => this.stateOnChange(text)}
                                />
                                <FloatingInputField
                                    label={"Country/Region"}
                                    value={countryName}
                                    onChangeText={text => this.countryNameOnChange(text)}
                                />
                                <FloatingInputField
                                    label={"Occupation"}
                                    value={occupation}
                                    onChangeText={text => this.occupationOnChange(text)}
                                />
                                <FloatingInputDate
                                    label={"Date of Birth"}
                                    value={dateOfBirth}
                                    onChangeDate={(val) => this.onChangeDate(val)}
                                />
                                <ModalSelector
                                    data={genderData}
                                    supportedOrientations={['landscape']}
                                    accessible={true}
                                    scrollViewAccessibilityLabel={'Scrollable options'}
                                    cancelButtonAccessibilityLabel={'Cancel Button'}
                                    overlayStyle={{ backgroundColor: 'rgba(0,0,0,0.85)' }}
                                    onChange={(option) => { this.setState({ gender: option.label }) }}
                                >
                                    <FloatingInputField
                                        label={"Gender"}
                                        value={this.state.gender}
                                        showSoftInputOnFocus={false}
                                        caretHidden={true}
                                        showDropdownIcon={true}
                                    />
                                </ModalSelector>
                                <FloatingInputField
                                    label={"About"}
                                    value={about}
                                    onChangeText={text => this.aboutOnChange(text)}
                                />
                                <FloatingInputField
                                    label={"Description"}
                                    value={aboutDescription}
                                    onChangeText={text => this.aboutDescriptionOnChange(text)}
                                />
                            </View>
                        }
                    </View>
                </Content>
            </Container>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AboutAccordion);

const styles = StyleSheet.create({
    title: {
        fontSize: Fonts.moderateScale(14),
        color: Colors.black,
        marginLeft: Metrics.WIDTH * 0.05,
    },
    icon: {
        fontSize: Fonts.moderateScale(14),
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