import React from "react";
import { View, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';
import { Container, Content, Text, Icon } from 'native-base';
import { Colors, Fonts, Metrics } from '../../../Theme/index';
import ModalHeader from '@Components/ModalHeader';
import { connect } from 'react-redux';
import { mapDispatchToProps, mapStateToProps } from "../../../Redux/Dispatchers/index";
import PhotoVideoPickerModal from '@Components/PhotoVideoPickerModal';
import PostTypeModal from './components/PostTypeModal';
import UserPostDetails from './components/UserPostDetails';
import NetworkSelectionModal from './components/NetworkSelectionModal';
import { createPostController } from '../../../Network/Controllers/postController';
import VideoPlayer from '../../../Components/VideoPlayer';

interface IProps {
    postsList?: any
    setPostsList?: any
    usersList?: any
    navigation?: any
    route?: any
    userConnectedNetworksList: any
    firstName: string
    lastName: string
    profilePicture: string
}

interface IState {
    modalVisible: boolean
    isPostTypeModalVisible: boolean
    isPostTypePublic: boolean
    isNetworkSelectionModalVisible: boolean
    selectedNetworksList: any
    postText: string
    mediaType: string
    fileDetails: any
    isLoading: boolean
    isPostButtonDisabled: boolean
}

class AddPost extends React.Component<IProps, IState> {

    constructor(props) {
        super(props);
        this.state = {
            modalVisible: false,
            isPostTypeModalVisible: false,
            isPostTypePublic: true,
            isNetworkSelectionModalVisible: false,
            postText: "",
            mediaType: "",
            fileDetails: "",
            selectedNetworksList: [],
            isLoading: false,
            isPostButtonDisabled: false
        };
    }

    pressThis = (type) => {
        this.setState({
            mediaType: type,
            modalVisible: true,
        })
    }

    componentDidMount() {
        //setting post type PUBLIC on loading
        this.onSetPostType(true)
    }

    onSetPostType = (bool) => {
        // if post type is public then array of selected networks will be populated with all user connected networks 
        // if post type is private then array of selected networks will be empty  
        const tempArray = []
        if (bool) {
            this.props.userConnectedNetworksList.map((item, index) => {
                tempArray.push(item._id);
            })
            this.onSelectNetworksList(tempArray)
        } else {
            tempArray.push(this.props.userConnectedNetworksList[0]._id);
            this.onSelectNetworksList(tempArray);
        }
        this.setState({ isPostTypePublic: bool })
    }

    onSelectNetworksList = (itemsArray) => {
        this.setState({ selectedNetworksList: itemsArray })
    }

    onSave = async () => {
        const { selectedNetworksList, postText, fileDetails, isLoading } = this.state;
        this.setState({ isLoading: true });
        await createPostController(selectedNetworksList[0], postText, fileDetails, this.props);
        this.setState({
            postText: "",
            mediaType: "",
            fileDetails: "",
            isLoading: false
        });
        this.props.navigation.goBack();
    }

    render() {
        return (
            <Container>
                <ModalHeader
                    backIcon={true}
                    bodyText={"Create Post"}
                    rightText={!this.state.isLoading && "Post"}
                    isRightTextDisabled={this.state.selectedNetworksList.length > 0 && (this.state.postText === "" && this.state.fileDetails === "")}
                    rightLoader={this.state.isLoading}
                    rightOnPress={() => this.onSave()}
                    {...this.props}
                />
                <Content>
                    <View style={styles.container}>
                        <UserPostDetails
                            profileImage={this.props.profilePicture}
                            username={`${this.props.firstName} ${this.props.lastName}`}
                            isPostTypePublic={this.state.isPostTypePublic}
                            onChangePostTypeModalVisibility={() => this.setState({ isPostTypeModalVisible: !this.state.isPostTypeModalVisible })}
                            onChangeNetworkSelectionModalVisibility={() => this.setState({ isNetworkSelectionModalVisible: !this.state.isNetworkSelectionModalVisible })}
                        />
                        <PostTypeModal
                            modalVisible={this.state.isPostTypeModalVisible}
                            setModalVisible={isPostTypeModalVisible => this.setState({ isPostTypeModalVisible })}
                            setPostType={bool => this.onSetPostType(bool)}
                        />
                        <NetworkSelectionModal
                            modalVisible={this.state.isNetworkSelectionModalVisible}
                            setModalVisible={isNetworkSelectionModalVisible => this.setState({ isNetworkSelectionModalVisible })}
                            userConnectedNetworksList={this.props.userConnectedNetworksList}
                            selectedNetworksList={this.state.selectedNetworksList}
                            onSelectNetworksList={itemsArray => this.onSelectNetworksList(itemsArray)}
                            isPostTypePublic={this.state.isPostTypePublic}
                        />
                        <View>
                            <TextInput
                                placeholder={"What's on your mind ?"}
                                multiline={true}
                                placeholderTextColor={Colors.black}
                                style={styles.textInput}
                                onChangeText={postText => this.setState({ postText })}
                                value={this.state.postText}
                            />
                        </View>
                        {this.state.fileDetails !== "" && this.state.mediaType === "photo" &&
                            <View>
                                <Icon name={'times-circle'} type='FontAwesome' style={styles.closeIcon} onPress={() => this.setState({ fileDetails: "" })} />
                                <Image source={{ uri: this.state.fileDetails.path }} style={styles.imageStyle} />
                            </View>
                        }
                        {this.state.fileDetails !== "" && this.state.mediaType === "video" &&
                            <View>
                                <Icon name={'times-circle'} type='FontAwesome' style={styles.closeIcon} onPress={() => this.setState({ fileDetails: "" })} />
                                <VideoPlayer fileDetails={this.state.fileDetails} />
                            </View>
                        }
                        <PhotoVideoPickerModal
                            modalVisible={this.state.modalVisible}
                            setModalVisible={modalVisible => this.setState({ modalVisible })}
                            mediaType={this.state.mediaType}
                            fileDetails={this.state.fileDetails}
                            setFileDetails={fileDetails => this.setState({ fileDetails })}
                        />
                    </View>
                </Content>
                <View style={styles.mediaInputContainer}>
                    <View style={styles.mediaContainer}>
                        <TouchableOpacity style={styles.row} onPress={() => this.pressThis('photo')}>
                            <Icon name={'image'} type='FontAwesome' style={styles.iconStyle} />
                            <Text style={styles.textStyle}>Photos</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.mediaContainer}>
                        <TouchableOpacity style={styles.row} onPress={() => this.pressThis('video')}>
                            <Icon name={'videocam-outline'} type='Ionicons' style={styles.iconStyle} />
                            <Text style={styles.textStyle}>Videos</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Container>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddPost);

const styles = StyleSheet.create({
    container: {
        marginHorizontal: Metrics.WIDTH * 0.075,
        paddingBottom: Metrics.HEIGHT * 0.01,
        flex: 1
    },
    textInput: {
        fontSize: Fonts.moderateScale(12)
    },
    imageStyle: {
        height: Metrics.HEIGHT * 0.7,
        backgroundColor: "black",
        resizeMode: 'contain',
    },
    closeIcon: {
        fontSize: Fonts.moderateScale(30),
        color: Colors.errorRed,
        marginLeft: Metrics.WIDTH * 0.77,
        marginTop: Metrics.HEIGHT * 0.005,
        position: 'absolute',
        zIndex: 1
    },
    mediaInputContainer: {
        flexDirection: 'row',
        borderTopWidth: Fonts.moderateScale(0.5),
        borderColor: Colors.themeBlue,
        height: Metrics.HEIGHT * 0.06,
    },
    mediaContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    iconStyle: {
        fontSize: Fonts.moderateScale(20),
        color: Colors.themeBlue,
        marginRight: Metrics.WIDTH * 0.02,
    },
    textStyle: {
        fontSize: Fonts.moderateScale(14),
        justifyContent: 'center',
        alignItems: 'center'
    },
    disabledIconStyle: {
        fontSize: Fonts.moderateScale(22),
        color: Colors.blue,
        marginRight: Metrics.WIDTH * 0.02
    },
    disabledITextStyle: {
        fontSize: Fonts.moderateScale(12),
    },
    row: {
        flexDirection: 'row',
    },
});