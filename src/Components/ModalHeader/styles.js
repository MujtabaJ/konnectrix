import { StyleSheet, Platform } from 'react-native';
import { Fonts, Colors, Metrics } from '../../Theme/index';

const styles = StyleSheet.create({
  headerStyle: {
    height: Metrics.HEIGHT * 0.08,
    backgroundColor: Colors.white,
    // borderBottomWidth: 1,
    borderBottomColor: Colors.black,
    elevation: 10
  },
  left: {
    flex: 0.1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  body: {
    flex: 0.8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleHeader: {
    color: Colors.black,
    fontSize: Fonts.moderateScale(18),
    fontFamily: Fonts.type.CenturyGothic,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  right: {
    flex: 0.1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  rightText: {
    color: Colors.themeBlue,
    fontSize: Fonts.moderateScale(14),
    textAlign: 'center',
  },
  rightTextDisabled: {
    color: Colors.grey,
    fontSize: Fonts.moderateScale(14),
    textAlign: 'center',
  },
  iconStyle: {
    fontSize: Fonts.moderateScale(24),
  },
});

export default styles;
