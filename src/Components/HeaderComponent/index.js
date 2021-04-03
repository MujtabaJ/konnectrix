import React, { useEffect, useState } from 'react';
import { TouchableOpacity, Text, View, Image, StatusBar, StyleSheet } from 'react-native';
import { Title, Header, Right, Badge, Left, Body, Icon, Input, Item, Button } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import { Colors, Fonts, Metrics } from '../../Theme';
import AsyncStorage from '@react-native-community/async-storage';
import { useSelector } from 'react-redux';
import GLOBALS from "./../../Constants/Settings";
const messageImage = require('../../Assets/messageicon.png');


const HeaderComponent = (props) => {
    const navigation = useNavigation();




    return (
        <React.Fragment>
            <LinearGradient colors={[props.color || Colors.darkBlue, props.color || Colors.lightBlue]} >
                <View style={styles.headerDashboard}>
                    <StatusBar backgroundColor={Colors.white} barStyle={Colors.darkContent} />
                    {props.backIcon &&
                        <TouchableOpacity style={styles.left} onPress={() => navigation.goBack()} >
                            <Left style={styles.profileImageContainer}>
                                <Icon name='chevron-left' type='FontAwesome' style={styles.blackDownArrowIconStyle} />
                            </Left>
                        </TouchableOpacity>
                    }
                    {props.menuIcon &&
                        <TouchableOpacity style={styles.left} onPress={() => navigation.openDrawer()} >
                            <Left style={styles.profileImageContainer}>
                                {props.profilePicture !== null
                                    ?
                                    <Image source={{ uri: props.profilePicture }} style={styles.image} />
                                    :
                                    <Image source={{ uri: GLOBALS.USER_AVATAR }} style={styles.image} />
                                }
                            </Left>
                        </TouchableOpacity>
                    }
                    <Body style={styles.body}>
                        {props.bodyText !== undefined &&
                            <Item style={styles.searchBarStyle} >
                                <Icon name="ios-search" style={styles.searchicon} />
                                <Input
                                    editable={false}
                                    placeholder="Search"
                                    onChangeText={text => props.onChangeText(text)}
                                    value={props.value}
                                    onFocus={props.onFocus}
                                    keyboardType={props.keyboardType}
                                // style={{ height: Metrics.HEIGHT * 0.08 }}
                                />
                            </Item>
                        }
                    </Body>
                    <Right style={styles.right}>
                        {props.right &&
                            <View >
                                <TouchableOpacity style={styles.profileImageContainer}
                                    onPress={() => { }}
                                >
                                    <Button transparent>
                                        <Image source={messageImage} style={styles.messageImageStyle} />
                                        <View  >
                                            <View style={styles.badgeCountView}>
                                                <Text style={styles.badgeText}>2</Text>
                                            </View>
                                        </View>
                                    </Button>
                                </TouchableOpacity>
                            </View>
                        }
                    </Right>
                </View>

            </LinearGradient>
        </React.Fragment>
    );
}

const styles = StyleSheet.create({

    headerDashboard: {
        flexDirection: 'row',
        backgroundColor: Colors.transparent,
        height: Metrics.HEIGHT * 0.09,
    },
    left: {
        flex: 0.125,
        // paddingHorizontal: Metrics.WIDTH * 0.009,
        justifyContent: 'center',
        alignItems: 'center',
    },
    body: {
        flex: 0.75,
        justifyContent: 'center',
        alignItems: 'center'
        // paddingHorizontal: Metrics.WIDTH * 0.004,
    },
    right: {
        flex: 0.125,
        justifyContent: 'center',
        alignItems: 'center'
        // paddingHorizontal: Metrics.WIDTH * 0.009,
    },
    backArrow: {
        fontSize: Fonts.moderateScale(16),
        justifyContent: 'center',
        alignItems: 'center'
    },
    blackDownArrowIconStyle: {
        fontSize: Fonts.moderateScale(22),
        justifyContent: 'center',
        alignItems: 'center',
        color: Colors.white
    },
    profileImageContainer: {
        width: Metrics.HEIGHT * 0.05,
        height: Metrics.HEIGHT * 0.05,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        height: Metrics.HEIGHT * 0.05,
        width: Metrics.HEIGHT * 0.05,
        borderRadius: 500,
        alignItems: 'center',
        justifyContent: 'center',

    },
    messageImageStyle: {
        height: Metrics.HEIGHT * 0.05,
        width: Metrics.HEIGHT * 0.05,
        borderRadius: 50,
        alignItems: 'center',
        // justifyContent: 'center',

    },
    searchBarStyle: {
        width: '100%',
        backgroundColor: Colors.white,
        color: '#727272',
        height: Metrics.HEIGHT * 0.045,
        borderRadius: 5,
        borderColor: 'transparent'
        // borderWidth: 1,
        // borderColor: Colors.white
    },
    searchicon: {
        fontSize: Fonts.moderateScale(16),
        color: Colors.black,
        marginLeft: Metrics.WIDTH * 0.01
    },
    chatbox: {
        fontSize: Fonts.moderateScale(16),
        color: Colors.white,
    },
    badgeCountView: {
        color: Colors.white,
        position: "absolute",
        alignItems: 'center',
        textAlign: 'center',
        textAlignVertical: 'top',
        justifyContent: 'center',
        backgroundColor: Colors.errorText,
        marginLeft: -Metrics.WIDTH * 0.04,
        marginTop: -Metrics.HEIGHT * 0.027,
        height: Metrics.HEIGHT * 0.0245,
        width: Metrics.HEIGHT * 0.0245,
        borderRadius: Metrics.HEIGHT * 0.5
    },
    badgeText: {
        color: Colors.white,
        fontSize: Fonts.moderateScale(9)
    }
});

export default HeaderComponent;
