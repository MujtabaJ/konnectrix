import React, { useEffect } from "react";
import { View, Text, StyleSheet } from 'react-native';
import { Container, Content, } from 'native-base';
import { useSelector } from 'react-redux';
import TotalConnections from './components/TotalConnections';
import ConnectionInvitationsList from './components/ConnectionInvitationsList';
import ConnectionsList from './components/ConnectionsList';
import { Colors, Fonts, Metrics } from '../../Theme/index';
import HeaderComponent from '@Components/HeaderComponent';
import { Translate } from "@i18n/localization";

const Connections = ({ navigation }) => {
    const connections = useSelector(state => state.Connections);

    useEffect(() => {
        navigation.dangerouslyGetParent().setOptions({ tabBarVisible: true });
    }, []);

    const onPressButton = (val) => {
        if (val === true) {
            console.log('ACCEPTED');
        } else {
            console.log('REJECTED');
        }
    }

    const onChangeText = (text) => {

    }

    return (
        <Container>
            <HeaderComponent
                navigation={navigation}
                style={{ backgroundColor: '#083352', }}
                backIcon={false}
                menuIcon={true}
                bodyText={'Home'}
                right={true}
                placeholder={'Search'}
                // value={'value'}
                onChangeText={text => onChangeText(text)}
            />
            <Content>
                <TotalConnections
                    totalConnections={connections.totalConnections}
                />
                <View style={styles.invitationContainer}>
                    <View style={styles.invitionHeader}>
                        <Text style={styles.invitationText}>{Translate("Connections.Invitation")}</Text>
                        <Text style={styles.seeAllText}>{Translate("common.Seeall")}</Text>
                    </View>
                    <ConnectionInvitationsList
                        connectionInvitationList={connections.connectionInvitationList}
                        onPressButton={(val) => onPressButton(val)}
                    />
                </View>
                <View style={styles.connectionHeader}>
                    <Text style={styles.invitationText}>{Translate("Connections.Connections")}</Text>
                </View>
                <ConnectionsList
                    connectionsList={connections.connectionsList}
                    onPressButton={(val) => onPressButton(val)}
                />
            </Content>
        </Container>
    );
};

export default Connections;

const styles = StyleSheet.create({
    invitationContainer: {
        borderTopWidth: Metrics.HEIGHT * 0.015,
        borderTopColor: Colors.grey,
        borderBottomWidth: Metrics.HEIGHT * 0.015,
        borderBottomColor: Colors.grey,
    },
    invitionHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomColor: Colors.blue,
        borderBottomWidth: Fonts.moderateScale(1),
        paddingVertical: Metrics.WIDTH * 0.04,
    },
    connectionHeader: {
        paddingVertical: Metrics.WIDTH * 0.02,
    },
    invitationText: {
        fontSize: Fonts.moderateScale(12),
        marginHorizontal: Metrics.WIDTH * 0.05
    },
    seeAllText: {
        fontSize: Fonts.moderateScale(12),
        color: Colors.blue,
        marginHorizontal: Metrics.WIDTH * 0.05
    }
});