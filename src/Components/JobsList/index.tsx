import { Body, Button, Card, CardItem, Icon, Input, Left, Right, Text, Thumbnail, View } from 'native-base';
import React from 'react';
import { Colors, Fonts, Metrics } from '../../Theme';
import colors from '../../Theme/Colors';
import { Translate } from '../../i18n/localization';
import { StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';


const JobsList = (props) => {

    return (

        <View >
            <View style={styles.cardStyle} >


                <FlatList
                    data={props.jobsListJson}
                    renderItem={({ item, index }) => (
                        <CardItem style={styles.cardItemJobsList} key={index}>
                            <Left >
                                <View >
                                    <View >
                                        <Thumbnail source={item.avatar} style={styles.cardItemJobsListAvatar} />
                                    </View>
                                </View>
                                <Body>
                                    <Text style={styles.cardItemJobsListTitle} >{item.jobTitle}</Text>
                                    <Text style={styles.cardItemJobsListTitleCompany} >{item.jobCompanyName}</Text>
                                </Body>
                                <Right >
                                    <Card style={styles.buttonCard}>
                                        <TouchableOpacity style={styles.applyButton} onPress={() => { props.onJobApply(item.jobStatus, index) }}>

                                            <Text style={styles.ApplyButtonText}>{item.jobStatus}</Text>

                                        </TouchableOpacity>
                                    </Card>
                                </Right>
                            </Left>
                        </CardItem>
                    )}
                />




            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    cardStyle: {
        borderRadius: 0,
        paddingLeft: 0,
        paddingRight: 0,
        marginLeft: 0,
        marginRight: 0,
        width: Metrics.WIDTH
    },
    cardItemJobsList: {
        borderColor: colors.lightGrey,
        borderBottomWidth: 2,
        marginBottom: Metrics.HEIGHT * 0.01,
        marginEnd: "3%",
        marginStart: "3%",
    },
    flexFour: {
        flex: 1,
    },
    cardItemJobsListAvatar: {
        width: Metrics.WIDTH * 0.16,
        height: Metrics.HEIGHT * 0.09,
        borderRadius: Metrics.HEIGHT * 0.5,
        resizeMode: 'contain',
    },
    cardItemJobsListTitle: {
        fontSize: Fonts.moderateScale(13),
        fontWeight: 'bold'
    },
    cardItemJobsListTitleCompany: {
        fontSize: Fonts.moderateScale(11),
    },
    applyButton: {
        width: Metrics.WIDTH * 0.159,
        // borderTopWidth: Metrics.HEIGHT * 0.0008,
        // borderBottomWidth: Metrics.HEIGHT * 0.002,
        // borderLeftWidth: Metrics.HEIGHT * 0.002,
        // borderRightWidth: Metrics.HEIGHT * 0.002,
        // borderColor: colors.themeBlue,
        // borderRadius: Metrics.HEIGHT * 0.01,
        // marginVertical: Metrics.HEIGHT * 0.003,
        height: Metrics.HEIGHT * 0.05,
        justifyContent: 'center',
        alignItems: 'center',
        // marginTop:-1,
    },
    buttonCard: {
        width: Metrics.WIDTH * 0.1659612,
        borderTopWidth: Metrics.HEIGHT * 0.0008,
        // borderBottomWidth: Metrics.HEIGHT * 0.002,
        borderLeftWidth: Metrics.HEIGHT * 0.002,
        borderRightWidth: Metrics.HEIGHT * 0.002,
        borderRadius: Metrics.HEIGHT * 0.01,
        height: Metrics.HEIGHT * 0.0512,
        // paddingBottom: Metrics.HEIGHT * 0.0551,
        borderColor: colors.themeBlue,
    },
    ApplyButtonText: {
        color: colors.themeBlue,
        fontWeight: "bold",
        fontSize: Fonts.moderateScale(11)
    },
});

export default JobsList;