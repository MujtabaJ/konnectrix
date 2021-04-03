import React, { useState } from "react";
import { View, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';
import { Container, Content, Header, Tabs, Tab, Text, Icon } from 'native-base';
import { Colors, Fonts, Metrics } from '../../../../Theme/index';
import JobsList from '@Components/JobsList';
import jsonData from '@Components/JsonData';

const PostsTab = (props) => {

    const onJobApply = (jobStatus, index) => {

    }

    return (
        <View style={styles.container}>
            <JobsList jobsListJson={jsonData.jobsList}
            onJobApply={onJobApply}
             />
        </View>
    )
}

export default PostsTab;

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        borderTopColor: Colors.grey,
        borderTopWidth: Fonts.moderateScale(12),
        borderBottomColor: Colors.grey,
        borderBottomWidth: Fonts.moderateScale(4),
    },
})