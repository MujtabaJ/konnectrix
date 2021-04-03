import React, { useState } from "react";
import { View, Text, Picker, Image, ScrollView, TouchableOpacity, StyleSheet } from "react-native";
import DropdownItem from "./DropdownItem";
import { Fonts, Metrics, Colors } from "../../Theme";


interface IDropdownProps {
    title: string
    open?: boolean
    dropdownItems: Array<string>
    onChangeNetworkType:Function 
}

const Dropdown = (props: IDropdownProps) => {

    const [expand, setExpand] = useState<boolean>(false)
    const [selectedValue, setSelectedValue] = useState("java");

    return <View style={Styles.mainContainer} >
        <View style={Styles.headingParent} >
            <TouchableOpacity style={Styles.headingContainer} onPress={() => { setExpand(prevState => !prevState) }} >
                <Text onPress={() => { setExpand(prevState => !prevState) }} style={Styles.titleText}>{props.title}</Text>
                <View style={Styles.chevronContainer} >
                    <Image source={require('../../Assets/Dropdown/drop_down_icon.png')} style={{ ...Styles.image, transform: [{ rotate: expand ? "0deg" : "180deg" }] }} />
                </View>
            </TouchableOpacity>
        </View>
        {expand && <View style={Styles.dropdownItemsParent} >
            {/* <ScrollView style={Styles.dropdownItemsContainer} > */}
            {/* {props.dropdownItems.map((element, index) => {
                    return <DropdownItem title={element} key={index} />
                })} */}

            <Picker
            
                mode="dropdown"
                selectedValue={selectedValue}
                style={{ width: Metrics.WIDTH * 0.93, backgroundColor: 'beige' }}
                onValueChange={(itemValue, itemIndex) => {
                    props.onChangeNetworkType(itemValue)
                }}
            >
                <Picker.Item label="Private" value="private" />
                <Picker.Item label="Public" value="public" />
            </Picker>
            {/* </ScrollView> */}
        </View>}
    </View>;
};

const Styles = StyleSheet.create({
    mainContainer: {
        marginBottom: Metrics.WIDTH * 0.1,
        height: Metrics.dropdownHeight,
        justifyContent: "center",
        // marginVertical: Metrics.WIDTH * 0.03,
        // backgroundColor: "pink",
        borderBottomWidth: Metrics.HEIGHT * 0.001
    },
    titleText: {
        fontSize: Fonts.moderateScale(15)
    },
    chevronContainer: {
        height: Metrics.WIDTH * 0.04,
        width: Metrics.HEIGHT * 0.04,
    },
    headingContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: Metrics.HEIGHT * 0.01,
    },
    headingParent: {
    },
    image: {
        width: "100%",
        height: "100%"
    },
    dropdownItemsParent: {
        position: "relative",
        // zIndex: 100
    },
    dropdownItemsContainer: {
        position: "relative",
        zIndex: 1,
        width: "100%",
        maxHeight: Metrics.HEIGHT * 0.15,
        overflow: "scroll",
        // borderRadius: Metrics.WIDTH * 0.01,
        borderWidth: 2,
        borderColor: "black",
        backgroundColor: Colors.white,
        // marginBottom: -150
    },
})

export default Dropdown;
