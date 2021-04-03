import { StyleSheet, Platform } from 'react-native';
import { Fonts, Colors, Metrics } from '../../Theme/index';

const styles = StyleSheet.create({
  headerDashboard: {
    // position: 'absolute',
    right: 0,
    borderBottomWidth: 0,
    shadowOpacity: 0,
    elevation: 0,
    left: 0,
    // marginTop: Metrics.HEIGHT * 0.01,
    backgroundColor: 'transparent',
  },
  skipStep: {
    backgroundColor: Colors.darkGrey,
    height: 30,
    justifyContent: 'center',
    zIndex: 100,
    alignItems: 'center',
    flexDirection: 'row',
    width: Metrics.WIDTH,
    position: 'absolute',
    top: Platform.OS === 'ios' ? 64 : 56,
  },
  skipText: {
    color: Colors.white,
    fontFamily: Fonts.type.CenturyGothic,
    fontSize: 20,
  },
  titleHeader: {
    color: Colors.black,
    fontSize: Fonts.moderateScale(18),
    fontFamily: Fonts.type.CenturyGothic,
    textAlign: 'center',
    //alignSelf: 'center',
    width: Metrics.WIDTH * 0.6,
  },
  left: {
    flex: 0.2,
    // paddingLeft: Metrics.WIDTH * 0.05,
    paddingVertical: Metrics.WIDTH * 0.05,
  },
  body: {
    // flex: 0.6,
    // paddingVertical: Metrics.WIDTH * 0.05,
    alignItems: 'center',
  },
  right: {
    flex: 0.2,
    // paddingRight: Metrics.WIDTH * 0.05,
    paddingVertical: Metrics.WIDTH * 0.05,
  },
  backArrow: {
    width: Fonts.moderateScale(15),
    height: Fonts.moderateScale(15),
  },
  iconStyle: {
    width: Fonts.moderateScale(20),
    height: Fonts.moderateScale(15),
  },
  blackDownArrowIconStyle: {
    fontSize: Fonts.moderateScale(18)
  },
  whiteDownArrowIconStyle: {
    fontSize: Fonts.moderateScale(18),
    color: Colors.white
  },
  rightTextColor: {
    color: Colors.labelText,
    fontWeight: 'bold',
    fontSize: Fonts.moderateScale(14)
  },
  imageStyle: {
    marginTop: Metrics.HEIGHT * 0,
    width: Metrics.HEIGHT * 0.055,
    height: Metrics.HEIGHT * 0.06,
    alignItems:'center',justifyContent:'center',
  },
  searchBarStyle: {
    width: '100%',
    backgroundColor: '#fff',
    color: '#727272',
    height: 30,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#fff'
  },
});

export default styles;
