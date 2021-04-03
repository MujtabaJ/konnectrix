import React from 'react';
import { Image, StyleSheet, TouchableOpacity } from 'react-native'
import { Thumbnail, Text, Button, Icon, View, } from 'native-base';
import { Translate } from '../../i18n/localization';
import { Fonts, Colors, Metrics } from '../../Theme/index';
// import Video from 'react-native-video';
import VideoPlayer from "../../Components/VideoPlayer";
import GLOBALS from "./../../Constants/Settings";
import { TimeDifference } from '../../Handlers';
import LikeComment from "../../Components/LikeComment";

class PostCardItem extends React.Component {

    render() {
        const postData = this.props.postData;
        return (
            postData.user !== undefined &&
            <View style={this.props.isShowBottomBorder && styles.mainContainer}>
                <View style={[styles.userInformationContainer, styles.commonMarginHorizontalStyle]}>
                    <View style={styles.userImageContainer}>
                        {postData.user.profilePicture !== null && postData.user.profilePicture !== undefined
                            ?
                            <Thumbnail source={{ uri: postData.user.profilePicture }} style={styles.userImageStyle} />
                            :
                            <Thumbnail source={{ uri: GLOBALS.USER_AVATAR }} style={styles.userImageStyle} />
                        }
                    </View>
                    <View style={styles.userDetailsContainer}>
                        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: "center" }}>
                            <Text style={styles.usernameTextStyle}>{`${postData.user.firstName} ${postData.user.lastName}  `}</Text>
                            {this.props.isDisplayNetworkName &&
                                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: "center", }}>
                                    <Icon name="caret-right" type="FontAwesome" style={styles.commonIconStyle} />
                                    <Text style={styles.usernameTextStyle}>{`  ${postData.network.networkTitle}`}</Text>
                                </View>
                            }
                        </View>
                        {postData.user.occupation !== null && postData.user.occupation !== "" &&
                            <Text style={styles.commonGrayFontStyle}>{postData.user.occupation}</Text>
                        }
                        <Text style={styles.commonGrayFontStyle}>{TimeDifference(postData.createdDate)}</Text>
                    </View>
                </View>
                {postData.postBody !== "" && postData.postBody !== null && postData.postBody !== undefined &&
                    <Text style={[styles.postText, styles.commonMarginHorizontalStyle]}> {postData.postBody}</Text>
                }
                {postData.postImage !== "" && postData.postImage !== null && postData.postImage !== undefined && postData.postImage.length > 0 && <React.Fragment>
                    {postData.postType === "image" &&
                        <TouchableOpacity style={postData.postType === "image" && styles.alignCenter} onPress={() => { this.props.showMediaModal({ uri: postData.postImage[0], type: postData.postType }) }} >
                            <Image source={{ uri: postData.postImage[0] }} style={styles.postImageStyle} />
                        </TouchableOpacity>
                    }
                    {postData.postType === "video" &&
                        postData.postType && <VideoPlayer style={{ marginTop: Metrics.HEIGHT * 0.01 }} fileDetails={{ path: postData.postImage[0] }} fullScreenModal={() => { this.props.showMediaModal({ uri: postData.postImage[0], type: postData.postType }) }} />
                    }
                </React.Fragment>
                }
                <LikeComment postData={postData} {...this.props} />
                {/* <View style={styles.bottomButtonsRow}>
                    <TouchableOpacity style={styles.likeComponent} onPress={() => this.props.onPressLike(postData, this.props.postIndex)} >
                        <Icon name="ios-thumbs-up-outline" style={postData.isLikedByLoggedInUser ? styles.likeIconStyle : styles.commonIconStyle} />
                        <Text style={postData.isLikedByLoggedInUser ? styles.likeTextStyle : styles.dislikeTextStyle}>{postData.commentsCount !== undefined ? `${postData.likesCount} ` : ""}{Translate("home.like")}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.commentComponent} onPress={() => { this.props.enableCommentIcon && this.props.onPressCommentIcon(postData, this.props.postIndex) }}>
                        <Icon name="md-chatbox-outline" style={styles.commonIconStyle} />
                        <Text style={styles.commentShareTextStyle}>{postData.commentsCount !== undefined ? `${postData.commentsCount} ` : ""}{Translate("home.comment")}</Text>
                    </TouchableOpacity>
                </View> */}
            </View>
        )
    }
}

export default PostCardItem;

const styles = StyleSheet.create({
    backgroundVideo: {
        // position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        height: Metrics.HEIGHT,
        width: Metrics.WIDTH,
    },
    mainContainer: {
        marginTop: Metrics.HEIGHT * 0.02,
        borderBottomWidth: Metrics.HEIGHT * 0.015,
        borderBottomColor: Colors.lightGrey,
        borderColor: Colors.lightGrey,
    },
    userInformationContainer: {
        flexDirection: 'row'
    },
    alignCenter: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    userImageContainer: {
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    userImageStyle: {
        width: Metrics.WIDTH * 0.14,
        height: Metrics.WIDTH * 0.14,
        borderRadius: 500,
    },
    userDetailsContainer: {
        marginLeft: Metrics.WIDTH * 0.03,
        justifyContent: 'center',
    },
    commonGrayFontStyle: {
        fontSize: Fonts.moderateScale(10),
        color: Colors.darkGrey
    },
    commonMarginHorizontalStyle: {
        marginHorizontal: Metrics.WIDTH * 0.03
    },
    postImageStyle: {
        height: Metrics.HEIGHT * 0.35,
        width: Metrics.WIDTH,
        marginHorizontal: Metrics.WIDTH * 0.01,
        marginTop: Metrics.HEIGHT * 0.01,
        // resizeMode: 'stretch',
    },
    usernameTextStyle: {
        fontWeight: 'bold',
        fontSize: Fonts.moderateScale(12),
    },
    postText: {
        fontSize: Fonts.moderateScale(12),
        marginTop: Metrics.HEIGHT * 0.01,
    },
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
    commonIconStyle: {
        color: Colors.black,
        fontSize: Fonts.moderateScale(16),
    },
    commentShareTextStyle: {
        color: Colors.black,
        fontSize: Fonts.moderateScale(10),
    },
    likeTextStyle: {
        color: Colors.blue,
        fontSize: Fonts.moderateScale(10),
        fontWeight: 'bold'
    },
    dislikeTextStyle: {
        color: Colors.black,
        fontSize: Fonts.moderateScale(10),
    },
    likeIconStyle: {
        fontSize: Fonts.moderateScale(16),
        color: Colors.blue,
    },
    addHorizontalMargin: {
        marginHorizontal: Metrics.WIDTH * 0.1
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
    }
});