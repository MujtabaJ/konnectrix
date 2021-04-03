import { Dimensions, Platform, PixelRatio } from 'react-native';

const { width, height } = Dimensions.get('window');

// Used via Metrics.baseMargin
const metrics = {
  WIDTH: width,
  HEIGHT: height,
  OS: Platform.OS,
  XsmallFont: width * height * 0.000045,
  smallFont: width * height * 0.00005,
  mediumFont: width * height * 0.000055,
  largeFont: width * height * 0.000065,
  XlargeFont: width * height * 0.00007,
  marginHorizontal: 10,
  marginVertical: 10,
  section: 25,
  marginTopLogo: height * 0.05,
  baseMargin: 10,
  doubleBaseMargin: 20,
  smallMargin: 5,
  doubleSection: 50,
  horizontalLineHeight: 1,
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,
  navBarHeight: Platform.OS === 'ios' ? 64 : 54,
  keyboardAvoidingBehaviour: Platform.OS === "ios" ? "padding" : "height",
  buttonRadius: 4,
  icons: {
    tiny: 15,
    small: 20,
    medium: 30,
    large: 45,
    xl: 50,
  },
  images: {
    small: 20,
    medium: 40,
    large: 60,
    logo: 100,
  },
  // Heights
  inputHeight: height * 0.06,
  buttonHeight: height * 0.06,
  dropdownHeight: height * 0.06,
  // Login
  maxWidthLogin: 500,
  // Registration
  maxWidthRegistration: 500,
  // Drawer
  maxWidthDrawer: 500,
  //Create Networks
  maxWidthContainer: 430,
  maxWidthInternalContainerCN: 430,
  // My Networks
  maxWidthNetworkItem: 550
};

export default metrics;
