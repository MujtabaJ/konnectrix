import React, { Component } from "react";
import { View, Modal, TouchableOpacity, Image, StyleSheet } from "react-native";
import VideoPlayer from "../VideoPlayer";
import LikeComment from "../LikeComment";
import { Icon } from "native-base";
import { Metrics } from "../../Theme";

interface IProps {
    modalVisible: boolean
    closeModal: Function
    path: { uri: string, type: string }
}

class ImageViewer extends Component<IProps> {
    constructor(props) {
        super(props);
    }

    render() {
        return <Modal
            animationType="slide"
            transparent={false}
            visible={this.props.modalVisible}
            onRequestClose={() => { this.props.closeModal() }}
        >
            <View style={styles.mainContainer} >
                <TouchableOpacity style={styles.iconsContainer} onPress={() => { this.props.closeModal() }} >
                    <Icon type="FontAwesome" name="times" style={styles.closeIcon} />
                </TouchableOpacity>
                <View style={{ height: Metrics.HEIGHT * 0.5 }} >
                    {this.props.path.type === "image" &&
                        <Image source={{ uri: this.props.path.uri }} style={styles.postImageStyle} />
                    }
                    {this.props.path.type === "video" &&
                        <VideoPlayer fileDetails={{ path: this.props.path.uri }} style={{ height: Metrics.HEIGHT * 0.6 }} />
                    }
                </View>
                <View>
                    {/* <LikeComment /> */}
                </View>
            </View>
        </Modal>
    }
}

const styles = StyleSheet.create({
    postImageStyle: {
        height: Metrics.HEIGHT * 0.5,
        width: Metrics.WIDTH,
    },
    mainContainer: {
        flex: 1,
        backgroundColor: "black",
        justifyContent: 'space-between',
        // alignItems: 'center'
    },
    closeIcon: {
        color: "white"
    },
    iconsContainer: {
        alignSelf: "flex-end",
        marginRight: Metrics.WIDTH * 0.05,
        marginTop: Metrics.HEIGHT * 0.03,
    }
})

export default ImageViewer;