import { StyleSheet } from 'react-native';

import { Fonts, Metrics, Colors } from '../../Theme';

const styles = StyleSheet.create({
    iconView: {
        justifyContent: 'center',
        alignSelf: 'center',
        marginBottom: Metrics.HEIGHT * 0.02,
        height: Metrics.HEIGHT * 0.13,
        width: Metrics.HEIGHT * 0.13,
        backgroundColor: Colors.lightGrey,
        borderRadius: 500,
        // borderWidth: 1,
        // borderColor: Colors.mustardBrown,
        zIndex: 1,
    },
    imagePickerIconStyle: {
        alignSelf: 'center',
        width: Metrics.HEIGHT * 0.08,
        height: Metrics.HEIGHT * 0.06,
        marginLeft: Metrics.WIDTH * 0.02
    },
    selectedImageStyle: {
        alignSelf: 'center',
        width: Metrics.HEIGHT * 0.15,
        height: Metrics.HEIGHT * 0.15,
        borderRadius: 500,
        borderWidth: Fonts.moderateScale(3),
        borderColor: Colors.greenishBlue
    },
    optionsView_1: {
        flexDirection: 'column',
        justifyContent: 'center',
        zIndex: 1,
        height: Metrics.HEIGHT * 0.12,
        width: Metrics.WIDTH * 0.625,
        marginTop: Metrics.HEIGHT * -0.05,
        backgroundColor: Colors.darkGrey,
        borderRadius: 10
    },
    optionsView_2: {
        flexDirection: 'column',
        justifyContent: 'center',
        zIndex: 1,
        height: Metrics.HEIGHT * 0.15,
        width: Metrics.WIDTH * 0.625,
        marginTop: Metrics.HEIGHT * -0.05,
        backgroundColor: Colors.darkGrey,
        borderRadius: 10
    },
    optionText: {
        color: Colors.white,
        textAlign: 'center',
        fontSize: Fonts.moderateScale(12),
        paddingVertical:  Metrics.WIDTH * 0.01
    },
});

export default styles;
