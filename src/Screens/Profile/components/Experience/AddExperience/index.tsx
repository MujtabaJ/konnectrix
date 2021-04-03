import React from 'react';
import { View, StyleSheet, Keyboard } from "react-native";
import { Container, Icon } from 'native-base';
import { connect } from 'react-redux';
import { mapDispatchToProps, mapStateToProps } from "../../../../../Redux/Dispatchers";

import { Colors, Fonts, Metrics } from '../../../../../Theme/index';

import moment from 'moment';
import ModalHeader from '../../../../../Components/ModalHeader';
import FloatingInputField from '../../../../../Components/FloatingInputField';
import FloatingInputDate from '../../../../../Components/FloatingInputDate';
import { updateUserExperienceController } from '../../../../../Network/Controllers/userController';
import { getUserProfileController } from '../../../../../Network/Controllers/authController';


interface IProps {
    experienceList?: any
    setExperienceList?: any
    isEdit: boolean
    navigation?: any
    route?: any
}

interface IState {
    title: string
    selfEmployed: string
    companyName: string
    location: string
    startDate: any
    endDate: any,
    id: any
    isLoading: boolean
}

class AddExperience extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            title: "",
            selfEmployed: "",
            companyName: "",
            location: "",
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
        const { id, title, selfEmployed, companyName, location, startDate, endDate, } = this.state;

        if (title !== "" && selfEmployed !== "" && companyName !== "" && location !== "" && startDate !== "" && endDate !== "") {
            this.setState({ isLoading: true })
            updateUserExperienceController(id, title, selfEmployed, companyName, location, new Date(startDate), new Date(endDate)).then((data) => {
                getUserProfileController(this.props).then((data) => {
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
            });
        }
    }
    componentDidMount() {
        if (this.props.route.params !== undefined) {
            const index = this.props.route.params.selectedItemIndex;
            const experienceList = this.props.experienceList;
            this.setState({
                title: experienceList[index].jobTitle,
                selfEmployed: experienceList[index].selfEmployeed,
                companyName: experienceList[index].companyName,
                location: experienceList[index].location,
                startDate: new Date(experienceList[index].startDate),
                endDate: new Date(experienceList[index].endDate),
                id: experienceList[index]._id,
            })
        }
    }
    render() {
        const { title, selfEmployed, companyName, location, startDate, endDate } = this.state;
        return (
            <Container style={{ flex: 1 }}>
                <ModalHeader
                    closeIcon={true}
                    bodyText={this.props.route.params !== undefined ? "Update Experience" : "Add Experience"}
                    rightText={"Add"}
                    rightLoader={this.state.isLoading}
                    isRightTextDisabled={title === "" || selfEmployed === "" || companyName === "" || location === "" || startDate === "" || endDate === ""}
                    rightOnPress={() => this.onSave()}
                    {...this.props}
                />
                <View style={styles.mainView}>
                    <FloatingInputField
                        label={"Title"}
                        value={title}
                        onChangeText={text => this.setState({ title: text })}
                        showSoftInputOnFocus={true}
                    />
                    <FloatingInputField
                        label={"Employement type"}
                        value={selfEmployed}
                        onChangeText={text => this.setState({ selfEmployed: text })}
                        showSoftInputOnFocus={true}
                    />
                    <FloatingInputField
                        label={"Company name"}
                        value={companyName}
                        onChangeText={text => this.setState({ companyName: text })}
                        showSoftInputOnFocus={true}
                    />
                    <FloatingInputField
                        label={"Location"}
                        value={location}
                        onChangeText={text => this.setState({ location: text })}
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

export default connect(mapStateToProps, mapDispatchToProps)(AddExperience);

const styles = StyleSheet.create({
    mainView: {
        marginLeft: Metrics.WIDTH * 0.05,
        marginRight: Metrics.WIDTH * 0.05,
    },
});