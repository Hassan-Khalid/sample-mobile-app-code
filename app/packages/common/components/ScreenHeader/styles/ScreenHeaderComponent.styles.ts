import Util from 'common/util/Util';
import { Platform, StyleSheet } from 'react-native';
import { APP_FONT, APP_FONT_SIZE } from 'common/assets/fonts';
import APP_COLORS from '../../../assets/colors';

const { MEDIUM_HEADER } = APP_FONT_SIZE();
const {  REGULAR } = APP_FONT();

const styles = StyleSheet.create({
  container: {
    backgroundColor: APP_COLORS.WHITE,
  },
  leftContainer: {
    marginLeft:10,
  },
  bodyContainer: {
    justifyContent:'center'
  },
  rightContainer: {
    marginRight:10,
    flexDirection:'row',
  },
  iOSTint: {
    color: APP_COLORS.BLUE
  },
  headingText: {
    alignSelf: Platform.OS === 'android' ? 'center' : 'auto',
    fontSize:  MEDIUM_HEADER,
    fontFamily:  REGULAR,
    fontWeight:'bold',
    color:APP_COLORS.BACKGROUND
  },
  offlineBanner: {
    backgroundColor: APP_COLORS.DANGER,
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: 'center'
  },
  offlineIcon: {
    color: APP_COLORS.WHITE_PERSIST,
    fontSize: 16
  },
  offlineText: {
    color: APP_COLORS.WHITE_PERSIST,
    fontSize: 14,
    marginLeft: 10
  },
  bodyWrapper: {
    justifyContent: 'center',
    width: '100%'
  },
  icon:{
    width:22,
    height:22,
    resizeMode:'contain'
  },
  searchInputContainer:{
    borderWidth:0,
    borderBottomWidth:0,
    right:0,
    justifyContent:'center',
    alignSelf:'center',
    alignItems:'center',
    marginRight:0,
    paddingRight:-20,
    // paddingHorizontal:20,
    marginVertical:-20
    // paddingVertical:0
    // left:-50,
    // width:Util.getWindowWidth(),
  },
  searchInput:{
    marginVertical:12,
    paddingLeft:0,
    paddingRight:0,
    borderRadius:0,
    borderWidth:0,
    marginLeft:-10,
    borderBottomWidth:0,
    width:Util.getWindowWidth() -140
  },
  crossIcon:{
      width:20,
      height:20,
    resizeMode:'contain'
  }
});

export default styles;
