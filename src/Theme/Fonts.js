import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

//Guideline sizes are based on standard ~5" screen mobile device
const guidelineBaseWidth = 350;
const guidelineBaseHeight = 680;

const scale = size => (width / guidelineBaseWidth) * size;
const verticalScale = size => (height / guidelineBaseHeight) * size;
const moderateScale = (size, factor = 0.5) =>
  size + (scale(size) - size) * factor;

const type = {
  CenturyGothic: 'CenturyGothic',
  MyriadPro: "MyriadPro"
};

const size = {
  h1: 38,
  h2: 34,
  h3: 30,
  h4: 26,
  h5: 20,
  h6: 19,
  input: 18,
  regular: 17,
  medium: 14,
  small: 12,
  tiny: 8.5,
  loginButton: 17
};

const style = {
  h1: {
    fontFamily: type.CenturyGothic,
    fontSize: size.h1,
  },
  h2: {
    fontWeight: 'bold',
    fontSize: size.h2,
  },
  h3: {
    fontFamily: type.CenturyGothic,
    fontSize: size.h3,
  },
  h4: {
    fontFamily: type.CenturyGothic,
    fontSize: size.h4,
  },
  h5: {
    fontFamily: type.CenturyGothic,
    fontSize: size.h5,
  },
  h6: {
    fontFamily: type.CenturyGothic,
    fontSize: size.h6,
  },
  normal: {
    fontFamily: type.CenturyGothic,
    fontSize: size.regular,
  },
  description: {
    fontFamily: type.CenturyGothic,
    fontSize: size.medium,
  },
};

export default {
  type,
  size,
  style,
  scale,
  verticalScale,
  moderateScale,
};
