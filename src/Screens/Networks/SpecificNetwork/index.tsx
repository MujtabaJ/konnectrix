import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Container, Content, Text, Icon, Thumbnail } from 'native-base';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { useSelector, useDispatch } from 'react-redux';
import HeaderComponent from '@Components/HeaderComponent';
import { Colors, Fonts, Metrics } from '../../../Theme/index';
import InformationContainer from './components/InformationContainer';
import { getNetworkDetailsController } from '../../../Network/Controllers/networkController';
import { getNetworkPostsController } from '../../../Network/Controllers/postController';
import HomeTab from './tabs/HomeTab';
import AboutTab from './tabs/AboutTab';
import PostsTab from './tabs/PostsTab';
import JobsTab from './tabs/JobsTab';

const SpecificNetwork = ({ route, navigation }) => {

    const [getNetworkDetails, setNetworkDetails] = useState<any>({});
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'first', title: 'Home' },
        { key: 'second', title: 'About' },
        { key: 'third', title: 'Posts' },
        // { key: 'fourth', title: 'Jobs' },
    ]);

    const reduxProps = useSelector(state => state);

    const dispatch = useDispatch();

    const renderScene = SceneMap({
        first: () => <HomeTab setIndex={setIndex} getNetworkDetails={getNetworkDetails} reduxProps={reduxProps} isLoading={isLoading} />,
        second: () => <AboutTab getNetworkDetails={getNetworkDetails} />,
        third: () => <PostsTab getNetworkDetails={getNetworkDetails} networkID={route.params.network} reduxProps={reduxProps} isLoading={isLoading} />,
        // fourth: () => <JobsTab getNetworkDetails={getNetworkDetails} />
    });

    useEffect(() => {
        const pageNo = 0;
        const pageSize = 0;
        dispatch({ type: 'SET_NETWORK_POSTS_LIST', payload: [] })
        async function fetchData() {
            if (route.params.networkId !== undefined) {
                const response = await getNetworkDetailsController(route.params.networkId, pageNo, pageSize);
                setNetworkDetails(response);
                setIsLoading(true);
                getNetworkPostsController(route.params.networkId, pageNo, pageSize).then(response => {
                    if (response.code === 102) {
                        dispatch({ type: 'SET_NETWORK_POSTS_LIST', payload: response.data.data })
                        setIsLoading(false);
                    }
                });
            }
        }
        fetchData();
    }, [])

    const renderTabBar = props => (
        <TabBar
            {...props}
            indicatorStyle={{ borderWidth: Fonts.moderateScale(2) }}
            style={{ backgroundColor: Colors.white, borderColor: Colors.black, borderWidth: Fonts.moderateScale(1) }}
            renderLabel={({ route, focused, color }) => (
                <Text style={{ fontSize: Fonts.moderateScale(12), margin: Metrics.WIDTH * 0.015 }}>
                    {route.title}
                </Text>
            )}
        />
    );

    const onChangeText = (text) => { }

    return (
        <Container>
            <Content>
                <HeaderComponent
                    navigation={navigation}
                    style={{ backgroundColor: '#083352', }}
                    backIcon={true}
                    bodyText={'Home'}
                    right={true}
                    placeholder={'Search'}
                    value={getNetworkDetails.networkTitle}
                    onChangeText={text => onChangeText(text)}
                />
                <InformationContainer getNetworkDetails={getNetworkDetails} />
                <TabView
                    navigationState={{ index, routes }}
                    renderScene={renderScene}
                    onIndexChange={setIndex}
                    renderTabBar={renderTabBar}
                    
                />
            </Content>
        </Container>
    )
}

export default SpecificNetwork;


const styles = StyleSheet.create({
    informationContainer: {
        marginHorizontal: Metrics.WIDTH * 0.05,
        marginTop: Metrics.HEIGHT * 0.03,
        marginBottom: Metrics.HEIGHT * 0.02,
    },
    imagesContainer: {
    },
    displayImageContainer: {
        flex: 1
    },
    followingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        marginVertical: Metrics.HEIGHT * 0.005,
        flex: 1
    },
    thumbnailStyle: {
        width: Metrics.HEIGHT * 0.1,
        height: Metrics.HEIGHT * 0.1,
        borderWidth: Fonts.moderateScale(1),
        borderColor: Colors.black
    },
    descriptionContainer: {
        marginTop: Metrics.HEIGHT * 0.02,
    },
    networkNameText: {
        fontSize: Fonts.moderateScale(16),
        color: Colors.black,
        fontWeight: 'bold'
    },
    followingText: {
        fontSize: Fonts.moderateScale(12),
        textAlign: 'right'
    },
    blackText: {
        fontSize: Fonts.moderateScale(12),
        color: Colors.black
    },
    connectionsText: {
        fontSize: Fonts.moderateScale(12),
        color: Colors.blue,
    },
    followingIconStyle: {
        fontSize: Fonts.moderateScale(24),
        color: Colors.green,
        marginRight: Metrics.WIDTH * 0.01,
    },
    linkIconStyle: {
        fontSize: Fonts.moderateScale(20),
        color: Colors.blue,
        marginLeft: Metrics.WIDTH * 0.01,
    },
    connectionsInformationContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: Metrics.HEIGHT * 0.015,

    },
});