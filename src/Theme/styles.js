const React = require('react-native')
const { Platform } = React

export default {

  /* Layout */
  layoutDf: {
    flexGrow: 1,
    // backgroundColor: 'rgba(50, 174, 177, 1)',
    //backgroundColor: 'white'
  },
  layoutFx: {
    flex: 1,
    backgroundColor: 'rgba(255,255,255,1)',
    alignItems: 'center',
    justifyContent: 'center'
  },

  /* Header */
  navTransparent: {
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0)',
    borderBottomWidth: 0,
    elevation: 0
  },
  navDefault: {
    alignItems: 'center',
    backgroundColor: 'rgba(50, 174, 177, 1)',
    borderBottomWidth: 0,
    elevation: 0
  },
  nav: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(50, 174, 177, 1)'
  },
  navLeft: {
    flex: 1.5,
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  navIcon: {
    fontSize: 22,
    color: 'rgba(255, 255, 255, 1)'
  },
  navIconDark: {
    fontSize: 22,
    color: 'rgba(0, 0, 0, 1)'
  },
  navMiddle: {
    flex: 7,
    alignItems: 'center'
  },
  navMiddleTextLight: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 14,
    color: 'rgba(255, 255, 255, 1)',
    letterSpacing: 2
  },
  navMiddleTextDark: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 14,
    color: 'rgba(255, 255, 255, 1)',
    letterSpacing: 2
  },
  navLogo: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 14,
    alignSelf: 'center'
  },
  navRight: {
    flex: 1.5,
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  /* Font Size */
  navTextTiny: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 10,
    color: 'rgba(255, 255, 255, 1)'
  },
  navTextSmall: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 12,
    color: 'rgba(255, 255, 255, 1)'
  },
  navTextMedium: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 14,
    color: 'rgba(255, 255, 255, 1)'
  },
  navTextLarge: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 16,
    color: 'rgba(255, 255, 255, 1)'
  },
  /* Button */
  btnPrimary: {
    backgroundColor: 'rgba(51,51,51,1)',
    paddingVertical: 15,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5
  },
  btnPrimaryText: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 12,
    color: 'rgba(255,255,255,1)'
  },
  btnDefault: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(140, 198, 82, 1)',
    paddingVertical: 15,
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    borderRadius: 5
  },
  btnRegistration: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#4D4D4D',
    paddingVertical: 6,
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    borderRadius: 5
  },
  btnDefaultText: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 12,
    color: 'rgba(255,255,255,1)'
  },
  btnDefaultIcon: {
    fontSize: 24,
    color: 'rgba(255,255,255,1)'
  },
  /* BreadCrumb */
  breadCrumb: {
    alignItems: 'center',
    backgroundColor: 'rgba(50, 174, 177, 1)',
    paddingHorizontal: 20,
    paddingTop: 30,
    paddingBottom: 50
  },
  breadCrumbDefault: {
    backgroundColor: 'rgba(50, 174, 177, 1)',
    paddingHorizontal: 20,
    paddingTop: 15,
    paddingBottom: 20
  },
  breadCrumbTitle: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 24,
    color: 'rgba(255,255,255,1)',
    marginBottom: 5
  },
  breadCrumbDesc: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 12,
    color: 'rgba(255,255,255,0.8)'
  },
  /* Bg */
  crvBg: {
    width: '100%',
    position: 'absolute',
    zIndex: -1000
  },
  shadowLayout: {
    marginHorizontal: 20
  },
  bgShadow: {
    width: '100%',
    minHeight: 50,
    backgroundColor: 'rgba(255,255,255,1)',
    elevation: 10,
    shadowOffset: {
      width: 15,
      height: 15
    },
    shadowColor: '#000',
    shadowOpacity: 0.5,
    shadowRadius: 5,
    borderRadius: 10,
    padding: 25
  },

  /* Footer */
  fBtnIcon: {
    fontSize: 24,
    color: 'rgba(255,255,255,0.3)',
    marginBottom: 5
  },
  fBtnIconActive: {
    fontSize: 24,
    color: 'rgba(237, 50, 105, 1)'
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'rgba(43, 47, 58, 1)'
  },
  fBtn: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 15
  },
  fBtnText: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 10,
    color: 'rgba(0,0,0,0.3)',
    display: 'none'
  },
  fBtnActive: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 15,
    color: 'rgba(237, 50, 105, 1)'
  },
  fBtnTextActive: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 10,
    display: 'none',
    color: 'rgba(237, 50, 105, 1)'
  },
  fPop: {
    flex: 1.5
  },
  fPopFx: {
    position: 'absolute',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  }
}
