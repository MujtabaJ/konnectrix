import React, { useEffect, useState } from "react";
import { SafeAreaView, StyleSheet, Text, View, Modal, FlatList, TouchableOpacity } from "react-native";
import { Icon } from 'native-base';
import { Fonts, Metrics, Colors } from "../../../../../Theme";
import CheckBox from "@Components/CheckBox";

interface IDropdownProps {
    modalVisible: boolean
    isPostTypePublic: boolean
    setModalVisible: any
    userConnectedNetworksList: any
    selectedNetworksList: any
    onSelectNetworksList: any
}

const PostTypeModal = (props: IDropdownProps) => {

    const [selectedNetworksList, setselectedNetworksList] = useState(props.selectedNetworksList)

    const onPressNetwork = (_id) => {
        if (selectedNetworksList.includes(_id) && selectedNetworksList.length === 1) {
            const index = selectedNetworksList.indexOf(_id);
            if (index > -1) {
                selectedNetworksList.splice(index, 1)
                setselectedNetworksList([...selectedNetworksList]);
            }
        } else {
            setselectedNetworksList([_id]);
        }
    }

    const isChecked = (_id) => {
        if (selectedNetworksList.includes(_id)) {
            return true;
        } else {
            return false;
        }
    }

    useEffect(() => {
        setselectedNetworksList(props.selectedNetworksList);
    }, [props.selectedNetworksList])

    const onPressCancel = () => {
        props.onSelectNetworksList(selectedNetworksList);
        props.setModalVisible(false);
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={props.modalVisible}
                onRequestClose={() => {
                    props.setModalVisible(false);
                }}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={styles.headingStyle}>Networks  List</Text>
                        </View>
                        <FlatList
                            data={props.userConnectedNetworksList}
                            keyExtractor={(item, index) => {
                                return index.toString();
                            }}
                            renderItem={({ item, index, separators }) => (
                                <TouchableOpacity key={index} onPress={() => !props.isPostTypePublic && onPressNetwork(item._id)} activeOpacity={props.isPostTypePublic ? 1 : 0.2}>
                                    <View style={styles.networkItem}>
                                        <Text style={styles.textStyle} numberOfLines={1}>{item.networkTitle}</Text>
                                        <CheckBox style={styles.checkBox} checked={isChecked(item._id)} disabled={props.isPostTypePublic} />
                                    </View>
                                </TouchableOpacity>
                            )}
                        />
                        <TouchableOpacity style={styles.cancelButtonStyle}>
                            <Text style={styles.buttonTextStyle} onPress={() => onPressCancel()}>Close</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </SafeAreaView>
    )
};

export default PostTypeModal;

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'rgba(0,0,0,0.7)',
    },
    modalView: {
        justifyContent: "center",
        backgroundColor: "white",
        borderRadius: Fonts.moderateScale(16),
        width: Metrics.WIDTH * 0.75,
        maxHeight: Metrics.HEIGHT * 0.5,
    },
    headingStyle: {
        color: Colors.black,
        textAlign: "center",
        paddingTop: Metrics.HEIGHT * 0.01,
        fontWeight: 'bold',
        fontSize: Fonts.moderateScale(14),
        marginBottom: Metrics.HEIGHT * 0.015,
    },
    networkItem: {
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textStyle: {
        color: Colors.black,
        flex: 0.9,
        justifyContent: 'center',
        paddingVertical: Metrics.HEIGHT * 0.01,
        fontSize: Fonts.moderateScale(12),
    },
    cancelButtonStyle: {
        marginTop: Metrics.HEIGHT * 0.015,
        backgroundColor: Colors.errorRed,
        borderBottomLeftRadius: Fonts.moderateScale(16),
        borderBottomRightRadius: Fonts.moderateScale(16),
        width: Metrics.WIDTH * 0.75
    },
    buttonTextStyle: {
        color: Colors.white,
        textAlign: "center",
        padding: Metrics.HEIGHT * 0.01,
        fontSize: Fonts.moderateScale(12)
    },
    checkBox: {
        flex: 0.1,
    },
});

