import { Platform, StyleSheet } from 'react-native';
import APP_COLORS from '../../../assets/colors';
import Util from '../../../util/Util';
import { APP_FONT_SIZE } from '../../../assets/fonts';

const styles = StyleSheet.create({
  container: {
    backgroundColor:APP_COLORS.WHITE_PERSIST,
    position:'absolute',
    bottom:1,
    left:0,
    right:0,
    zIndex:999999,
    width:Util.getWindowWidth(),
    height:82,
    borderTopWidth:1,
    borderTopColor:APP_COLORS.GRAY3_LIGHT
  },
  tabContainer:{
    flexDirection:'row',
    flex:1,
    justifyContent:'space-evenly',
    
  },
  tab:{
    flex:1,
    alignContent:'center',
    justifyContent:'center',
    alignItems:'center',
  },
  tabInnerView:{
    alignItems:'center',
    
  },
  focusedText:{
    color:APP_COLORS.BLUE,
    margin:4,
    fontSize:APP_FONT_SIZE().BODY
  },
  unFocusedText:{
    margin:4,
    color:APP_COLORS.GRAY1,
    fontSize:APP_FONT_SIZE().BODY
  }
  
})

export default styles