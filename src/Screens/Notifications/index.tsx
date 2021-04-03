import React, { useEffect } from "react";
import { FlatList, Text } from 'react-native';
import { Container, Content, } from 'native-base';
import { useSelector, useDispatch } from 'react-redux';
import NotificationsList from './components/NotificationsList';
import HeaderComponent from '../../Components/HeaderComponent';

const Notifications = ({ navigation }) => {
    const notifications = useSelector(state => state.Notifications);
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch({ type: 'SET_NOTIFICATIONS_BADGE', payload: 12 });
        navigation.dangerouslyGetParent().setOptions({ tabBarBadge: undefined });
    }, []);

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
                <NotificationsList
                    notificationsList={notifications.notificationsList}
                />
            </Content>
        </Container>
    );
}

export default Notifications;
