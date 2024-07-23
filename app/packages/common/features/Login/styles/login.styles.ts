import { StyleSheet } from 'react-native';
import APP_COLORS from '../../../assets/colors';
import {  APP_FONT, APP_FONT_SIZE } from 'common/assets/fonts';
import Util from '../../../util/Util';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor:APP_COLORS.WHITE_PERSIST
  },
  bannerContainer: {
      flex: 1,
      maxHeight: Util.getWindowHeight() < 800 ? 280 : 350
    },
  topBanner: {
    resizeMode: 'cover',
    width:Util.getWindowWidth()
  },
  logoWrapper: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  inputContainer: {
    flexGrow: 1,
    marginHorizontal: 8,
  },
  innerHeadingContainer:{
    marginHorizontal:40
  },
  heading: {
    fontFamily: APP_FONT().BOLD,
    fontSize:APP_FONT_SIZE().HEADER,
    textAlign:'center',
    color:APP_COLORS.BACKGROUND,
  },
  subHeading: {
    fontFamily: APP_FONT().MEDIUM,
    marginVertical: 10,
    lineHeight: 20,
    color: APP_COLORS.GRAY1_DARK,
    fontSize: APP_FONT_SIZE().SUB_BODY,
  textAlign:'center'
  },
  forgotPasswordView: {
    marginHorizontal: 20
  },
  forgotText: {
    color: APP_COLORS.BLUE,
    fontSize: APP_FONT_SIZE().BODY,
    fontWeight: '500',
  },
  resendView: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  resendText: {
    fontSize: APP_FONT_SIZE().BODY,
    fontFamily: APP_FONT().REGULAR,
    marginHorizontal:5
},
  resendBtnText: {
    color: APP_COLORS. BLUE
}
}) ;
export default styles;