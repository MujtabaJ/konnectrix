import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, FlatList } from "react-native";
import { Icon } from 'native-base';
import { Colors, Fonts, Metrics } from '../../../../../Theme/index';
import ExperienceCardForProfile from '../ExperienceCardForProfile';

const ExperienceList = (props) => {
    return (
        <View style={styles.outerContainer}>
            <View style={styles.innerContainer}>
                <View style={styles.headingContainer}>
                    <Text style={styles.educationHeadingText}>Experience</Text>
                    <Icon name='pencil' type='FontAwesome' style={styles.editIcon} onPress={() => props.navigation.navigate("EducationExperienceAccordions", { accordionExpanded: 'experience' })} />
                </View>
                <FlatList
                    data={props.experienceList}
                    keyExtractor={(item, index) => {
                        return index.toString();
                    }}
                    renderItem={({ item, index, separators }) => (
                        <ExperienceCardForProfile
                            key={index}
                            companyName={item.companyName}
                            jobTitle={item.jobTitle}
                            startDate={item.startDate}
                            endDate={item.endDate}
                        />
                    )}
                />
                <View style={styles.seeAllContainer}>
                    <Text style={styles.seeAllText} onPress={() => props.navigation.navigate("EducationExperienceAccordions", { accordionExpanded: 'all' })}>See all</Text>
                </View>
            </View>
        </View>
    )
}

export default ExperienceList;

const styles = StyleSheet.create({
    outerContainer: {
        borderBottomColor: Colors.grey,
        borderBottomWidth: Fonts.moderateScale(10),
    },
    innerContainer: {
        marginHorizontal: Metrics.WIDTH * 0.05,
        marginTop: Metrics.HEIGHT * 0.01,
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
    seeAllContainer: {
        justifyContent: 'center',
        // alignItems: 'center'
    },
    seeAllText: {
        fontSize: Fonts.moderateScale(12),
        color: Colors.blue,
        marginVertical: Metrics.HEIGHT * 0.02,
        textAlign: 'center',
        fontWeight: 'bold'
    }
});