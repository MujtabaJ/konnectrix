import React from 'react';
import { StyleSheet, TouchableOpacity, Modal, TextInput, FlatList, ScrollView, Keyboard } from 'react-native'
import { Container, Thumbnail, Text, View } from 'native-base';
import { Fonts, Colors, Metrics } from '../../Theme/index';
import PostCardItem from './PostCardItem';
import GLOBALS from "./../../Constants/Settings";
import { TimeDifference } from '../../Handlers';
import ModalHeader from '@Components/ModalHeader';

class PostViewComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            scrollToEnd: false,
        };
    }

    updatePostComments = (postData, postIndex) => {
        this.setState({ scrollToEnd: true })
        this.props.updatePostComments(postData, postIndex);
    }

    render() {
        const { postData, commentValue } = this.props;
        return (
            <Modal
                animationType="slide"
                transparent={false}
                visible={this.props.modalVisible}
                onRequestClose={() => { this.props.closeModal() }}>
                {
                    <Container keyboardShouldPersistTaps='always' keyboardDismissMode='on-drag'>
                        <ModalHeader
                            closeIcon={true}
                            isModal={true}
                            closeModal={() => this.props.closeModal()}
                        />
                        <ScrollView
                            style={{ marginTop: Metrics.HEIGHT * 0.03 }}
                            ref={ref => { this.scrollView = ref }}
                            keyboardShouldPersistTaps="handled"
                            onContentSizeChange={() => this.state.scrollToEnd && this.scrollView.scrollToEnd({ animated: true })}>
                            {/* POST CARD */}
                            <PostCardItem
                                postData={postData}
                                onPressLike={() => this.props.onPressLike(postData, this.props.postIndex)}
                                postIndex={this.props.postIndex}
                                disbaleCommentIcon={true}
                                isShowBottomBorder={this.props.isShowBottomBorder}
                                showMediaModal={this.props.showMediaModal}
                            />
                            {/* POST COMMENTS */}
                            <FlatList
                                data={this.props.postComments}
                                keyExtractor={(item, index) => {
                                    return index.toString();
                                }}
                                renderItem={({ item, index, separators }) => (
                                    <View key={index} style={styles.commentContainer}>
                                        <View style={styles.commentUserImageContainer}>
                                            {item.profilePicture !== null
                                                ?
                                                <Thumbnail source={{ uri: item.profilePicture }} style={styles.commentUserImageStyle} />
                                                :
                                                <Thumbnail source={{ uri: GLOBALS.USER_AVATAR }} style={styles.commentUserImageStyle} />
                                            }
                                        </View>
                                        <View style={styles.commentsListContainer}>
                                            <View style={styles.commentUserNameContainer}>
                                                <Text style={{ ...styles.commonBlackFontStyle, fontWeight: 'bold' }}>{`${item.firstName} ${item.lastName}  `}</Text>
                                            </View>
                                            <View >
                                                <Text style={styles.commonGrayFontStyle}>{TimeDifference(item.createdDate)}</Text>
                                                <Text style={{ ...styles.commonBlackFontStyle, marginTop: Metrics.HEIGHT * 0.005, flexWrap: 'wrap', flexShrink: 1, width: Metrics.WIDTH * 0.8, }} numberOfLines={2}>{item.comment}</Text>
                                            </View>
                                        </View>
                                    </View>
                                )}
                            />
                        </ScrollView>
                        <View style={styles.bottomRowContainer}>
                            <View style={styles.bottomRowUserImageContainer}>
                                {this.props.profilePicture
                                    ?
                                    <Thumbnail source={{ uri: this.props.profilePicture }} style={styles.commentUserImageStyle} />
                                    :
                                    <Thumbnail source={{ uri: GLOBALS.USER_AVATAR }} style={styles.commentUserImageStyle} />
                                }
                            </View>
                            <View style={styles.commentInputContainer}>
                                <TextInput
                                    style={{ flex: 1, fontSize: Fonts.moderateScale(12) }}
                                    placeholder='Leave your thoughts here...'
                                    value={commentValue}
                                    multiline={true}
                                    onChangeText={text => { this.props.onChangeComment(text) }}
                                />
                            </View>
                            <View style={styles.postButtonContainer}>
                                <TouchableOpacity
                                    onPress={() => this.updatePostComments(postData, this.props.postIndex)}
                                    disabled={commentValue === ""}
                                >
                                    <Text style={(commentValue === "") ? styles.disabledPostTextStyle : styles.enabledPostTextStyle}>POST</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </Container>
                }
            </Modal>
        )
    }
}

export default PostViewComponent;

const styles = StyleSheet.create({
    // COMMENTS SECTION
    commentContainer: {
        marginHorizontal: Metrics.WIDTH * 0.03,
        marginTop: Metrics.HEIGHT * 0.025,
        flexDirection: 'row'
    },
    commentsListContainer: {
        backgroundColor: Colors.lightGrey,
        paddingVertical: Metrics.HEIGHT * 0.015,
        paddingLeft: Metrics.WIDTH * 0.025,
        marginLeft: Metrics.WIDTH * 0.01,
        borderRadius: Fonts.moderateScale(8),
    },
    commentUserImageContainer: {
        width: Metrics.WIDTH * 0.1,
        marginTop: Metrics.HEIGHT * 0.01,
        alignItems: 'center'
    },
    commentUserNameContainer: {
        marginBottom: Metrics.HEIGHT * 0.005,
    },
    commonBlackFontStyle: {
        fontSize: Fonts.moderateScale(12),
        color: Colors.black
    },
    commonGrayFontStyle: {
        fontSize: Fonts.moderateScale(10),
        color: Colors.darkGrey
    },
    //COMMENT INPUT
    bottomRowContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        borderTopWidth: 1,
        borderTopColor: Colors.grey,
        marginVertical: Metrics.HEIGHT * 0.0001
    },
    bottomRowUserImageContainer: {
        paddingVertical: Metrics.WIDTH * 0.02,
        alignSelf: "flex-start",
        width: Metrics.WIDTH * 0.125,
        justifyContent: 'center',
        alignItems: 'center'
    },
    commentUserImageStyle: {
        width: Metrics.HEIGHT * 0.05,
        height: Metrics.HEIGHT * 0.05,
        borderRadius: 500
    },
    commentInputContainer: {
        flexDirection: 'row',
        width: Metrics.WIDTH * 0.75,
        borderColor: Colors.grey,
        fontSize: Fonts.moderateScale(14),
    },
    postButton: {
        paddingHorizontal: Metrics.WIDTH * 0.02,
        paddingVertical: Metrics.WIDTH * 0.02,
        // height: Metrics.HEIGHT * 0.0455,
        justifyContent: 'flex-start',
    },
    postButtonContainer: {
        width: Metrics.WIDTH * 0.125,
        justifyContent: 'center',
        alignItems: 'center',
    },
    enabledPostTextStyle: {
        fontSize: Fonts.moderateScale(14),
        color: Colors.themeBlue,
        fontWeight: 'bold'
    },
    disabledPostTextStyle: {
        fontSize: Fonts.moderateScale(14),
        color: Colors.grey,
        fontWeight: 'bold'
    },
});