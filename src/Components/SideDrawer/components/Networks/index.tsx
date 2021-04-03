import React, { useState, useEffect } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, Touchable } from "react-native";
import AsyncStorage from '@react-native-community/async-storage';
import { Fonts, Metrics, Colors } from "../../../../Theme/index";
import { users } from "../../../../MockData/index.json";
import { Translate } from "../../../../i18n/localization";
import IconContainer from "../iconContainer";
import CreateNetwork from "./CreateNetwork";
import MyNetworks from "./MyNetworks";
import { useSelector, useDispatch } from 'react-redux';

const Networks = (props) => {

    const [expand, setExpand] = useState<boolean>(true)
    const [myNetworksList, setMyNetworksList] = useState<Array<string>>([])

    const userConnectedNetworksList = useSelector(state => state.Networks.userConnectedNetworksList);

    useEffect(() => {
        setMyNetworksList(userConnectedNetworksList);
    }, [])    

    return (
        <View style={Styles.mainContainer}>
            <View style={Styles.miniContainer} >
                <TouchableOpacity style={Styles.opacityContainer} onPress={() => { setExpand(prevState => !prevState) }}>
                    <IconContainer title={Translate("sideDrawer.networks")} chevron open={expand} icon={false} />
                </TouchableOpacity>
            </View>
            {expand && <View style={Styles.menuContainer} >
                <CreateNetwork {...props} modalVisible={props.modalVisible} setModalVisible={props.setModalVisible}/>
                {myNetworksList &&
                    <MyNetworks myNetworks={myNetworksList} />
                }
            </View>}
        </View >
    )
};

const Styles = StyleSheet.create({
    mainContainer: {
        justifyContent: 'center',
    },
    miniContainer: {
        borderBottomColor: Colors.dividerLines,
        borderBottomWidth: Metrics.WIDTH * 0.003,
    },
    menuContainer: {
        // height: Metrics.HEIGHT * 0.15,
        // backgroundColor: "pink"
    },
    opacityContainer: {
        flexDirection: 'row',
        alignItems: "center",
        height: Metrics.HEIGHT * 0.06,
    },
})

export default Networks;
