import { Icon } from "native-base";
import React, { Component } from "react";
import { Colors, Metrics, Fonts } from "../../Theme";
import { Translate } from "../../i18n/localization";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

class LikeComment extends Component<any, any> {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return <View style={styles.bottomButtonsRow}>
            <TouchableOpacity style={styles.likeComponent} onPress={() => this.props.onPressLike(this.props.postData, this.props.postIndex)} >
                <Icon name="ios-thumbs-up-outline" style={this.props.postData.isLikedByLoggedInUser ? styles.likeIconStyle : styles.commonIconStyle} />
                <Text style={this.props.postData.isLikedByLoggedInUser ? styles.likeTextStyle : styles.dislikeTextStyle}>{this.props.postData.commentsCount !== undefined ? `${this.props.postData.likesCount} ` : ""}{Translate("home.like")}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.commentComponent} onPress={() => { this.props.enableCommentIcon && this.props.onPressCommentIcon(this.props.postData, this.props.postIndex) }}>
                <Icon name="md-chatbox-outline" style={styles.commonIconStyle} />
                <Text style={styles.commentShareTextStyle}>{this.props.postData.commentsCount !== undefined ? `${this.props.postData.commentsCount} ` : ""}{Translate("home.comment")}</Text>
            </TouchableOpacity>
        </View>;
    }
};

const styles = StyleSheet.create({
    mainContainer: {},
    bottomButtonsRow: {
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: 'row',
        borderColor: Colors.grey,
        borderBottomWidth: 1,
        borderTopWidth: 1,
        marginTop: Metrics.HEIGHT * 0.01,
        paddingVertical: Metrics.HEIGHT * 0.01
    },
    likeComponent: {
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-evenly",
        width: Metrics.WIDTH * 0.2,
        marginHorizontal: Metrics.WIDTH * 0.1,
    },
    commentComponent: {
        flexDirection: "row",
        width: Metrics.WIDTH * 0.3,
        justifyContent: "space-evenly",
        marginHorizontal: Metrics.WIDTH * 0.1,
    },
    commonIconStyle: {
        color: Colors.black,
        fontSize: Fonts.moderateScale(16),
    },
    commentShareTextStyle: {
        color: Colors.black,
        fontSize: Fonts.moderateScale(10),
    },
    likeTextStyle: {
        color: Colors.themeBlue,
        fontSize: Fonts.moderateScale(10),
        fontWeight: 'bold'
    },
    dislikeTextStyle: {
        color: Colors.black,
        fontSize: Fonts.moderateScale(10),
    },
    likeIconStyle: {
        fontSize: Fonts.moderateScale(16),
        color: Colors.themeBlue,
    },
})

export default LikeComment;
