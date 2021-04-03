import React from 'react';
import { View, TouchableOpacity, Text, Image, TextInput } from 'react-native';
import styles from './styles';
import Images from '../../../Assets/images';
import ImagePicker from 'react-native-image-crop-picker';
import { Translate } from '../../i18n/localization';
import ImageHelper from '../../Common/ImageHelper';
import CachedImage from "../../Component/CachedImage/index";
import FastImage from 'react-native-fast-image'

class DisplayImageUpload extends React.Component {

    launchCamera = async () => {
        this.props.onPress()
        ImagePicker.openCamera({
            width: 2000,
            height: 2000,
            cropping: true,
            compressImageQuality: 1
        }).then(async (image) => {
            // this.props.setProfileImage("")
            // if (image.size < 250000 || image.size > 2000000) {
            //     this.props.overSizerError()
            // }
            // else {
            //     this.props.setProfileImage(image.path);
            // }
            const imageHelper = new ImageHelper();
            const response = await imageHelper.resizeImageAndUpdateState(image, "ProfileImage", "ProfileImageError")
            this.props.setProfileImage("")
            if (response.ProfileImage === "") {
                this.props.profileImageError(response.ProfileImageError)
                return;
            }
            this.props.setProfileImage(response.ProfileImage);
        });
    }
    openGallery = async () => {
        this.props.onPress()
        ImagePicker.openPicker({
            width: 2000,
            height: 2000,
            cropping: true,
            compressImageQuality: 1
        }).then(async (image) => {
            const imageHelper = new ImageHelper();
            const response = await imageHelper.resizeImageAndUpdateState(image, "ProfileImage", "ProfileImageError")
            this.props.setProfileImage("")
            if (response.ProfileImage === "") {
                this.props.profileImageError(response.ProfileImageError)
                return;
            }
            this.props.setProfileImage(response.ProfileImage);
        });
    }

    render() {
        return (
            <View>
                <TouchableOpacity activeOpacity={1.0} onPress={this.props.onPress}>
                    <View style={styles.iconView}>
                        {
                            this.props.profileImage === ""
                                ?
                                <Image source={(Images.icons.addImage)} style={styles.imagePickerIconStyle} />
                                :
                                <FastImage source={{ uri: this.props.profileImage }} style={styles.selectedImageStyle} />
                        }
                    </View>
                </TouchableOpacity>
                {
                    this.props.showOptions &&
                    <View style={this.props.profileImage === "" ? styles.optionsView_1 : styles.optionsView_2}>
                        <TouchableOpacity activeOpacity={1.0} onPress={this.launchCamera}>
                            <Text style={styles.optionText}>{Translate('common.capturePhoto')}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={1.0} onPress={this.openGallery}>
                            <Text style={styles.optionText}>{Translate('common.gallery')}</Text>
                        </TouchableOpacity>
                        {
                            this.props.profileImage !== "" &&
                            <TouchableOpacity activeOpacity={1.0} onPress={() => this.props.setProfileImage("")}>
                                <Text style={styles.optionText}>{Translate('common.removeImage')}</Text>
                            </TouchableOpacity>
                        }
                        <TouchableOpacity activeOpacity={1.0} onPress={this.props.onPress}>
                            <Text style={styles.optionText}>{Translate('common.cancel')}</Text>
                        </TouchableOpacity>
                    </View>
                }
            </View>
        )
    }
}

export default DisplayImageUpload;
