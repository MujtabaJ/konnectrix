import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Colors, Metrics, Fonts } from "../../../Theme/index";
import { Translate } from "../../../i18n/localization";
import commonStyles from "./commonStyles";
import IconContainer from "./iconContainer";
import { connect } from 'react-redux';
import { mapDispatchToProps, mapStateToProps } from "../../../Redux/Dispatchers/index";
import { logoutUserController } from '../../../Network/Controllers/authController';

class SignOut extends React.Component<any, any> {

    logout = async () => {
        this.props.navigation.closeDrawer()
        await logoutUserController(this.props);
    }

    render() {
        return <View style={Styles.mainContainer}>
            <TouchableOpacity style={commonStyles.opacityContainer} onPress={() => this.logout()} >
                <IconContainer title={Translate("sideDrawer.signOut")} iconName="log-out-outline" icon />
            </TouchableOpacity>
        </View>
    }
};

const Styles = StyleSheet.create({
    mainContainer: {
        height: Metrics.HEIGHT * 0.06,
        borderTopWidth: Metrics.WIDTH * 0.003,
        borderTopColor: Colors.signOutBorder,
        justifyContent: 'center'
    },
})

export default connect(mapStateToProps, mapDispatchToProps)(SignOut);
