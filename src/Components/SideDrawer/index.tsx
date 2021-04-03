import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { DrawerContentScrollView } from "@react-navigation/drawer";
import { connect } from "react-redux";
import { mapDispatchToProps, mapStateToProps } from "../../Redux/Dispatchers";
import ProfileHeader from "./components/ProfileHeader";
import Networks from "./components/Networks";
import About from "./components/About";
import Help from "./components/Help";
import Settings from "./components/Settings";
import SignOut from "./components/SignOut";
import { Content } from "native-base";
import CreateNetworkModal from "../CreateNetworkModal";

const SideDrawer = (props) => {


    const [modalVisible, setmodalVisible] = useState(false);

    const setModalVisible = (visible) => {
        setmodalVisible(visible)
    }

    return <View style={Styles.mainContainer} >
        <ProfileHeader {...props} />
        <DrawerContentScrollView {...props} >
            <Networks {...props} modalVisible={modalVisible} setModalVisible={setModalVisible} />
            <About />
            <Help />
            <Settings />
        </DrawerContentScrollView>
        
        <Content>
            <CreateNetworkModal
                {...props}
                modalVisible={modalVisible}
                setModalVisible={setModalVisible}
            />
        </Content>
        <SignOut {...props} />
    </View>;
};

const Styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(SideDrawer);
