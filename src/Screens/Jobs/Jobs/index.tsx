import React, { Component } from "react";
import { View, Text, StyleSheet, ToastAndroid } from 'react-native';
import JobsList from "../../../Components/JobsList";
import jsonData from '../../../Components/JsonData';
import { Container, Content } from "native-base";
import HeaderComponent from "../../../Components/HeaderComponent";

class Jobs extends React.Component<any, any>  {
    constructor(props) {
        super(props);
        this.state = {
            jobsList: jsonData.jobsList,

        };
    }

    onJobApply = (jobStatus, index) => {
        let overrideJobsList = [...this.state.jobsList];
        if (jobStatus == "Apply") {
            overrideJobsList[index].jobStatus = "Applied"
            this.setState({ jobsList: overrideJobsList })
            this.showToastWithGravity("You have applied for this job successfully");
        } else {
            this.showToastWithGravity("You have been already applied for this job!");
        }
    }

    showToastWithGravity = (message) => {
        ToastAndroid.showWithGravity(
            message,
            ToastAndroid.SHORT,
            ToastAndroid.CENTER,
        );
    };

    render() {
        return (
            <Container>
                <HeaderComponent
                    style={{ backgroundColor: '#083352', }}
                    backIcon={false}
                    menuIcon={true}
                    bodyText={'Home'}
                    right={true}
                    placeholder={'Search'}
                />
                <Content>
                    <JobsList
                        jobsListJson={jsonData.jobsList}
                        onJobApply={this.onJobApply}
                    />
                </Content>
            </Container>

        );
    }
}

export default Jobs;
