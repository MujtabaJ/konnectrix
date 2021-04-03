import React, { Component } from "react";
import { View, Text, ImageBackground, Image, ToastAndroid, StyleSheet } from "react-native";
import CustomButton from "../../Components/CustomButton";
import { Metrics, Colors, Fonts } from "../../Theme";
import { Translate } from "../../i18n/localization";
import { connectNetworkController } from "../../Network/Controllers/networkController";
import { connect } from "react-redux";
import { mapDispatchToProps, mapStateToProps } from "../../Redux/Dispatchers";
import { getCoverImage } from "../../Handlers";

class NetworkJoinRequest extends Component<any, any> {
    constructor(props) {
        super(props);
        this.state = {
            toggleOverlay: false,
            networkDetails: "",
        }
    }

    componentDidMount() {
        this.setState({
            networkDetails: this.props.route.params.networkDetails,
        })
    }

    async onJoinNetworkClick() {
        const placeHolder = this.props.route.params.networkDetails;
        connectNetworkController(placeHolder._id).then((data) => {
            // this.showToastWithGravity(data.message);
        }).catch((error) => {
            // this.showToastWithGravity(error);
        });
        this.setState({ toggleOverlay: true })
    }

    showToastWithGravity = (message) => {
        ToastAndroid.showWithGravity(
            message,
            ToastAndroid.SHORT,
            ToastAndroid.CENTER,
        );
    };

    onDoneButtonClick() {
        this.setState({ toggleOverlay: false })
    }

    render() {
        return <ImageBackground source={require('../../Assets/Login/bg_login.png')} style={Styles.mainContainer} >
            {this.state.toggleOverlay && <View style={Styles.overlayView} />}
            <View style={Styles.section1} >
                {getCoverImage(this.state.networkDetails.profilePicture,Styles.logoImage)}
                {/* <Image source={{ uri: this.state.networkDetails.profilePicture }} style={Styles.logoImage} /> */}
                <View style={Styles.mainTextContainer} >
                    <Text style={Styles.mainTextStyle} >{this.state.networkDetails.networkTitle}</Text>
                </View>
            </View>
            <View >
                <View style={Styles.borderStyle}></View>
                <View style={Styles.userDataSection}>
                    <View style={Styles.userDetailContainer} >
                        <Text style={{fontSize:Fonts.moderateScale(11),width:'50%'}}>{Translate("joinNetworkRequest.name")}</Text>
                        <Text style={{fontSize:Fonts.moderateScale(11),width:'50%'}}>{this.props.firstName} {this.props.lastName} </Text>
                    </View>
                    <View style={Styles.userDetailContainer} >
                        <Text style={{fontSize:Fonts.moderateScale(11),width:'50%'}}>{Translate("joinNetworkRequest.phoneNumber")}</Text>
                        <Text style={{fontSize:Fonts.moderateScale(11),width:'50%'}}>{this.props.phoneNumber}</Text>
                    </View>
                </View>
                <View style={Styles.section2}>
                    <CustomButton title={Translate("joinNetworkRequest.joinNetworkButton")} buttonContainerStyle={Styles.joinButton} buttonTextStyle={Styles.joinButtonText} onPress={() => this.onJoinNetworkClick()} />
                </View>
            </View>
            {this.state.toggleOverlay && <View style={Styles.section3} >
                <Text style={Styles.thankYouTextStyle}>{Translate("joinNetworkRequest.thankYouText")}</Text>
                <Text style={Styles.thankYouDescriptionTextStyle}>{Translate("joinNetworkRequest.thankYouDescription1")}</Text>
                <Text style={Styles.thankYouDescriptionTextStyle2}>{Translate("joinNetworkRequest.thankYouDescription2")}</Text>
                <CustomButton title={Translate("joinNetworkRequest.doneButton")} buttonContainerStyle={Styles.doneButton} buttonTextStyle={Styles.doneButtonText} onPress={() => this.onDoneButtonClick()} />
            </View>}
        </ImageBackground>
    }
}

const Styles = StyleSheet.create({
    thankYouTextStyle:{
        fontWeight:'bold',
        fontSize: Fonts.moderateScale(15),
        marginBottom:5
    },
    thankYouDescriptionTextStyle:{
        // fontWeight:'bold',
        fontSize: Fonts.moderateScale(13),
        marginBottom:5
    },
    thankYouDescriptionTextStyle2:{
        // fontWeight:'bold',
        fontSize: Fonts.moderateScale(13),
        marginBottom:5,
        textAlign: "center"
    },
    mainContainer: {
        height: Metrics.HEIGHT,
        width: Metrics.WIDTH,
    },
    section1: {
        height: Metrics.HEIGHT * 0.2,
        flexDirection: 'row',
        justifyContent: "space-evenly",
        alignItems: "center",
    },
    logoImage: {
        width: Metrics.HEIGHT * 0.1,
        height: Metrics.HEIGHT * 0.1
    },
    mainTextContainer: {
        width: Metrics.WIDTH * 0.65
    },
    mainTextStyle: {
        fontWeight: "bold",
        fontSize: Fonts.moderateScale(18)
    },
    userDetailContainer: {
        flexDirection: "row",
        marginVertical: Metrics.HEIGHT * 0.01,
        marginHorizontal: Metrics.WIDTH * 0.1,
    },
    joinButton: {
        width: Metrics.WIDTH * 0.4,
        backgroundColor:Colors.joinNetworkButtonColor
    },
    joinButtonText: {
        fontSize: Fonts.moderateScale(12),
        fontWeight: "normal"
    },
    userDetailContent: {
        marginLeft: Metrics.WIDTH * 0.01
    },
    section2: {
        // borderTopColor: Colors.borderTopColorJN,
        // borderTopWidth: Metrics.HEIGHT * 0.004,
        alignItems: "center",
        height: Metrics.HEIGHT * 0.4,
        justifyContent: "space-around",
    },
    userDataSection: {
        // borderTopColor: Colors.borderTopColorJN,
        // borderTopWidth: Metrics.HEIGHT * 0.004,
        marginTop:Metrics.HEIGHT * 0.05
        // alignItems: "center",
        // height: Metrics.HEIGHT * 0.4,
        // justifyContent: "space-around",
    },
    borderStyle: {
        borderTopColor: Colors.borderTopColorJN,
        borderTopWidth: Metrics.HEIGHT * 0.004,
        
        // alignItems: "center",
        // height: Metrics.HEIGHT * 0.4,
        // justifyContent: "space-around",
    },
    section3: {
        alignItems: "center",
        height: Metrics.HEIGHT * 0.4,
        // justifyContent: "center"
    },
    doneButton: {
        width: Metrics.WIDTH * 0.23
    },
    doneButtonText: {
        fontSize: Fonts.moderateScale(16),
        fontWeight: "normal"
    },
    overlayView: {
        height: Metrics.HEIGHT * 0.6,
        width: Metrics.WIDTH,
        zIndex: 100,
        position: 'absolute',
        left: 0,
        top: 0,
        opacity: 0.5,
        backgroundColor: 'black',
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(NetworkJoinRequest);
