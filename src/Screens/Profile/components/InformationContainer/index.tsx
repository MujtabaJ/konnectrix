import * as React from 'react';
import { View, StyleSheet, TouchableOpacity, Image, Alert } from 'react-native';
import { Text, Icon, Thumbnail } from 'native-base';
import { Colors, Fonts, Metrics } from '../../../../Theme/index';
import { connect } from 'react-redux';
import { mapDispatchToProps, mapStateToProps } from '../../../../Redux/Dispatchers';
import { createPostController } from '../../../../Network/Controllers/postController';
import PhotoVideoPickerModal from '../../../../Components/PhotoVideoPickerModal';
import { updateUserProfilePicController } from '../../../../Network/Controllers/userController';
import { getUserProfileController } from '../../../../Network/Controllers/authController';
import GLOBALS from "./../../../../Constants/Settings";

interface IProps {
    navigation?: any
    route?: any
    profilePicture: string
    displayImage: string
    title: string
    firstName: string
    school: string
    companyName: string
    location: string
    connectionsCount: string
    lastName: string
    emailAddress: string
    occupation: string
    phoneNumber: string
}

interface IState {
    modalVisible: boolean
    isPostTypeModalVisible: boolean
    mediaType: string
    fileDetails: any
}

class InformationContainer extends React.Component<IProps, IState> {

    constructor(props: IProps) {
        super(props);
        this.state = {
            modalVisible: false,
            isPostTypeModalVisible: false,
            mediaType: "",
            fileDetails: "",
        };
    }

    pressThis = (type) => {
        this.setState({
            mediaType: type,
            modalVisible: true,
        })
        this.setState({ fileDetails: "" });
    }

    componentDidMount() {

    }

    setModalVisible() {

    }

    saveFile(fileDetails) {
        this.setState({ fileDetails })
        this.onSave();
    }

    onSave = async () => {
        const { fileDetails } = this.state;
        if (fileDetails !== "") {
            await updateUserProfilePicController(fileDetails.path, this.props).then((data) => {
                this.setState({ mediaType: "", fileDetails: "" });
            })
            await getUserProfileController(this.props);
        }
    }


    render() {
        return (
            <View style={styles.informationContainer}>
                <View style={{ flexDirection: 'row' }}>
                    <View style={styles.displayImageContainer} >
                        <TouchableOpacity onPress={() => this.pressThis('photo')}>
                            {this.props.profilePicture !== null && this.state.fileDetails === "" &&
                                <Thumbnail
                                    source={{ uri: this.props.profilePicture }}
                                    style={styles.thumbnailStyle}
                                />
                            }
                            {this.props.profilePicture === null && this.state.fileDetails === "" &&
                                <Thumbnail
                                    source={{ uri: GLOBALS.USER_AVATAR }}
                                    style={styles.thumbnailStyle}
                                />
                            }
                            {this.state.fileDetails !== "" &&
                                <Thumbnail
                                    source={{ uri: this.state.fileDetails.path }}
                                    style={styles.thumbnailStyle}
                                />
                            }
                        </TouchableOpacity>
                    </View>
                    <View style={styles.descriptionContainer}>
                        <View style={styles.sameRow}>
                            <Text style={styles.userNameText} numberOfLines={1}>{`${this.props.firstName} ${this.props.lastName}`}</Text>
                            <Icon name='pencil' type='FontAwesome' style={styles.editIconStyle} onPress={() => this.props.navigation.navigate("AboutAccordion")} />
                        </View>
                        {this.props.phoneNumber !== "" && this.props.phoneNumber !== null &&
                            <Text style={styles.blackText} numberOfLines={1}>{this.props.phoneNumber}</Text>
                        }
                        {this.props.emailAddress !== "" && this.props.emailAddress !== null &&
                            <Text style={styles.blackText} numberOfLines={1}>{this.props.emailAddress}</Text>
                        }
                        {this.props.occupation !== "" && this.props.occupation !== null &&
                            <Text style={styles.blackText} numberOfLines={1}>{this.props.occupation}</Text>
                        }
                        {/* {this.props.school !== "" && this.props.companyName !== "" &&
                            <Text style={styles.blackText} numberOfLines={1}>{`${this.props.school} - ${this.props.companyName}`}</Text>
                        } */}
                        {this.props.location !== "" && this.props.location !== null &&
                            <Text style={styles.blackText} numberOfLines={1}>{this.props.location}</Text>
                        }
                        {/* <Text style={styles.blueText}>{this.props.connectionsCount} </Text> */}
                    </View>
                </View>

                <PhotoVideoPickerModal
                    modalVisible={this.state.modalVisible}
                    setModalVisible={modalVisible => this.setState({ modalVisible })}
                    mediaType={this.state.mediaType}
                    fileDetails={this.state.fileDetails}
                    setFileDetails={fileDetails => this.saveFile(fileDetails)}
                />
            </View>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(InformationContainer);

const styles = StyleSheet.create({
    informationContainer: {
        marginHorizontal: Metrics.WIDTH * 0.05,
        marginTop: Metrics.HEIGHT * 0.03,
        marginBottom: Metrics.HEIGHT * 0.02,
    },
    displayImageContainer: {
        width: Metrics.WIDTH * 0.275,
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    thumbnailStyle: {
        width: Metrics.WIDTH * 0.25,
        height: Metrics.WIDTH * 0.25,
        borderWidth: Fonts.moderateScale(1),
        borderRadius: 500,
        borderColor: Colors.black
    },
    descriptionContainer: {
        width: Metrics.WIDTH * 0.725,
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    userNameText: {
        fontSize: Fonts.moderateScale(12),
        color: Colors.black,
        fontWeight: 'bold',
        textAlign: 'left',
        // flex: 0.1
    },
    blackText: {
        fontSize: Fonts.moderateScale(12),
        color: Colors.black,
        marginVertical: Metrics.HEIGHT * 0.002,
        textAlign: 'left'
    },
    blueText: {
        fontSize: Fonts.moderateScale(12),
        color: Colors.blue
    },
    sameRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    editIconStyle: {
        fontSize: Fonts.moderateScale(22),
        color: Colors.black,
        textAlign: 'right',
        marginLeft: Metrics.WIDTH * 0.1
        // flex: 0.9
    },
});