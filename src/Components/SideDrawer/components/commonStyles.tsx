import { StyleSheet } from "react-native";
import { Colors, Metrics, Fonts } from "../../../Theme/index";

export default StyleSheet.create({
    opacityContainer: {
        flexDirection: 'row',
        alignItems: "center",
    },
    textTitle: {
        marginLeft: Metrics.WIDTH * 0.05,
        marginRight: Metrics.WIDTH * 0.03,
        fontSize: Fonts.moderateScale(12)
    }
})