import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Modal, Keyboard } from "react-native";
import { connect } from 'react-redux';
import { mapDispatchToProps, mapStateToProps } from "../../../../../Redux/Dispatchers";
import { Container, Icon } from 'native-base';
import { Colors, Fonts, Metrics } from '../../../../../Theme/index'
import ModalHeader from '../../../../../Components/ModalHeader';
import FloatingInputField from '../../../../../Components/FloatingInputField';
import FloatingInputDate from '../../../../../Components/FloatingInputDate';
import { updateUserEducationController } from '../../../../../Network/Controllers/userController';
import { getUserProfileController } from '../../../../../Network/Controllers/authController';

interface IProps {
    educationList?: any
    setEducationList?: any
    isEdit: boolean
    navigation?: any
    route?: any
}

interface IState {
    school: string
    degree: string
    grade: string
    startDate: any
    endDate: any
    id: any
    isLoading: boolean
}

class AddEducation extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            school: "",
            degree: "",
            grade: "",
            startDate: "",
            endDate: "",
            id: "",
            isLoading: false,
        };
    }
    onChangeStartDate = (val) => {
        if (val.type === "set") {
            this.setState({ startDate: val.nativeEvent.timestamp })
        }
    }
    onChangeEndDate = (val) => {
        if (val.type === "set") {
            this.setState({ endDate: val.nativeEvent.timestamp })
        }
    }
    onSave = () => {
        const { id, school, degree, grade, startDate, endDate, isLoading } = this.state;

        if (school !== "" && degree !== "" && startDate !== "" && endDate !== "") {
            this.setState({ isLoading: true })
            updateUserEducationController(id, school, degree, grade, new Date((startDate)), new Date((endDate))).then((data) => {
                getUserProfileController(this.props).then((data) => {
                    this.setState({ isLoading: false })
                    this.props.navigation.goBack();
                }).catch((err) => {
                    console.log(err);
                    this.setState({ isLoading: false })
                    this.props.navigation.goBack();
                });
            }).catch((err) => {
                console.log(err);
                this.setState({ isLoading: false })
                this.props.navigation.goBack();
            })
        }
    }
    componentDidMount() {
        if (this.props.route.params !== undefined) {
            const index = this.props.route.params.selectedItemIndex;
            const educationList = this.props.educationList;
            this.setState({
                school: educationList[index].school,
                degree: educationList[index].degree,
                grade: educationList[index].grade,
                startDate: new Date(educationList[index].startDate),
                endDate: new Date(educationList[index].endDate),
                id: educationList[index]._id,
            })
        }
    }

    render() {
        const { school, degree, grade, startDate, endDate } = this.state;
        return (
            <Container style={{ flex: 1 }}>
                <ModalHeader
                    closeIcon={true}
                    bodyText={this.props.route.params !== undefined ? "Update Education" : "Add Education"}
                    rightText={"Add"}
                    rightLoader={this.state.isLoading}
                    isRightTextDisabled={school === "" || degree === "" || startDate === "" || endDate === ""}
                    rightOnPress={() => this.onSave()}
                    {...this.props}
                />
                <View style={styles.mainView}>
                    <FloatingInputField
                        label={"School"}
                        value={school}
                        onChangeText={text => this.setState({ school: text })}
                        showSoftInputOnFocus={true}
                    />
                    <FloatingInputField
                        label={"Degree"}
                        value={degree}
                        onChangeText={text => this.setState({ degree: text })}
                        showSoftInputOnFocus={true}
                    />
                    <FloatingInputField
                        label={"Grade (optional)"}
                        value={grade}
                        onChangeText={text => this.setState({ grade: text })}
                        showSoftInputOnFocus={true}
                    />
                    <FloatingInputDate
                        label={"Start date"}
                        value={startDate}
                        onChangeDate={(val) => this.onChangeStartDate(val)}
                    />
                    <FloatingInputDate
                        label={"End date"}
                        value={endDate}
                        onChangeDate={(val) => this.onChangeEndDate(val)}
                    />
                </View>
            </Container>
        )
    }
}
const styles = StyleSheet.create({
    mainView: {
        marginLeft: Metrics.WIDTH * 0.05,
        marginRight: Metrics.WIDTH * 0.05,
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(AddEducation);