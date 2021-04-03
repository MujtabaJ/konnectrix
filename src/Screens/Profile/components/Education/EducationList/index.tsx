import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, FlatList } from "react-native";
import { Icon } from 'native-base';
import { Colors, Fonts, Metrics } from '../../../../../Theme/index';
import EducationCardForProfile from '../EducationCardForProfile';

interface IProps {
    navigation?: any
    educationList?: any
}

const EducationList = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.headingContainer}>
                <Text style={styles.educationHeadingText}>Education</Text>
                <Icon name='pencil' type='FontAwesome' style={styles.editIcon} onPress={() => props.navigation.navigate("EducationExperienceAccordions", { accordionExpanded: 'education' })} />
            </View>
            <FlatList
                data={props.educationList}
                keyExtractor={(item, index) => {
                    return index.toString();
                }}
                renderItem={({ item, index }) => (
                    <EducationCardForProfile
                        key={index}
                        item={item}
                    />
                )}
            />
        </View>
    )
}

export default EducationList;

const styles = StyleSheet.create({
    container: {
        marginHorizontal: Metrics.WIDTH * 0.05,
    },
    headingContainer: {
        marginTop: Metrics.HEIGHT * 0.01,
        flexDirection: 'row',
        alignItems: 'center',
    },
    educationHeadingText: {
        fontSize: Fonts.moderateScale(16),
        color: Colors.black,
        textAlign: 'left',
        flex: 1
    },
    editIcon: {
        fontSize: Fonts.moderateScale(22),
        color: Colors.black,
        textAlign: 'right',
        flex: 1
    },
});