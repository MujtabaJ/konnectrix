import React from 'react';
import { View } from 'react-native';
import { Spinner } from 'native-base';
import PostCardList from './PostCardList';
import PostDetailsModal from './PostDetailsModal';
import MediaViewer from "../../Components/MediaViewer";
import { getSpecificPostController, commentPostController, likeUnlikePostController } from './../../Network/Controllers/postController';

class PostComponent extends React.Component<any, any> {

    constructor(props) {
        super(props);
        this.state = {
            modalVisible: false,
            modalMediaViewer: false,
            modalMediaPath: "",
            postsList: this.props.postsList,
            postData: "",
            commentValue: "",
            postComments: [],
            postIndex: ""
        };
    }

    onPressLike = async (postData, postIndex) => {
        /*-- CLONE POST ARRAY OF REDUX STORE TO TEMP ARRAY --*/
        let tempArray = [...this.props.postsList];
        /*-- DECREAMENT POST COUNT IF USER HAD LIKED POST EARLIER AND NOW HAS DILIKED--*/
        if (postData.isLikedByLoggedInUser) {
            tempArray[postIndex].likesCount = postData.likesCount - 1;
        }
        /*-- INCREMENT POST COUNT IF USER HAS LIKED POST --*/
        else {
            tempArray[postIndex].likesCount = postData.likesCount + 1;
        }
        /*-- INVERT LIKE BOOL IN TEMP ARRAY --*/
        tempArray[postIndex].isLikedByLoggedInUser = !postData.isLikedByLoggedInUser;
        /*-- UPDATE STATE OF 'postsList' WITH ABOVE DEFINED 'tempArray' AND SAME GOES FOR 'postData --*/
        this.setState({
            postsList: tempArray,
            postData: tempArray[postIndex]
        })
        // this.props.setFeedPostsList(tempArray);
        /*-- HIT API CONTOLLER FOR LIKE ACTIVITY --*/
        await likeUnlikePostController(postData.id, this.props)
    }

    onPressCommentIcon = (postData, postIndex) => {
        this.setState({
            modalVisible: true,
            postData,
            postIndex,
            postComments: postData.postComments,
        })
    }

    updatePostComments = (postData, postIndex) => {
        this.setState({
            commentValue: ""
        })
        commentPostController(postData.id, this.state.commentValue, this.props).then(commentPostResponse => {
            if (commentPostResponse.code === 101) {
                getSpecificPostController(postData.id, this.props).then((specificPostResponse) => {
                    let tempArray = [...this.props.postsList];
                    tempArray[postIndex] = specificPostResponse.data.data[0];
                    this.setState({
                        postsList: tempArray,
                        postData: tempArray[postIndex],
                        postComments: tempArray[postIndex].postComments,
                        modalVisible: true,
                        // commentValue: ""
                    })
                    this.props.setFeedPostsList(tempArray);
                })
            }
        })
    }

    onChangeComment = (text) => {
        this.setState({ commentValue: text })
    }

    openMediaModal = (path) => {
        this.setState({ modalMediaViewer: true, modalMediaPath: path })
    }

    render() {
        return (
            <View>
                {this.props.isLoading &&
                    <Spinner color='blue' />
                }
                <PostCardList
                    isShowBottomBorder={true}
                    postsList={this.state.postsList}
                    showMediaModal={this.openMediaModal}
                    isDisplayNetworkName={this.props.isDisplayNetworkName}
                    onPressLike={(postData, postIndex) => this.onPressLike(postData, postIndex)}
                    onPressCommentIcon={(postData, postIndex) => this.onPressCommentIcon(postData, postIndex)}
                />
                <PostDetailsModal
                    isShowBottomBorder={false}
                    postData={this.state.postData}
                    postIndex={this.state.postIndex}
                    showMediaModal={this.openMediaModal}
                    modalVisible={this.state.modalVisible}
                    postComments={this.state.postComments}
                    commentValue={this.state.commentValue}
                    profilePicture={this.props.profilePicture}
                    onChangeComment={text => this.onChangeComment(text)}
                    closeModal={() => this.setState({ modalVisible: false })}
                    onPressLike={(postData, postIndex) => this.onPressLike(postData, postIndex)}
                    updatePostComments={(postData, postIndex) => this.updatePostComments(postData, postIndex)}
                />
                <MediaViewer
                    path={this.state.modalMediaPath}
                    modalVisible={this.state.modalMediaViewer}
                    closeModal={() => { this.setState({ modalMediaViewer: false }) }}
                />
            </View>
        )
    }
}

export default PostComponent;