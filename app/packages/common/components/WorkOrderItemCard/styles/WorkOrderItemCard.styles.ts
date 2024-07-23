import { Dimensions,  StyleSheet } from 'react-native';
import  APP_COLORS  from '../../../assets/colors';
import { APP_FONT_SIZE } from 'common/assets/fonts';
const { width } = Dimensions.get( 'screen');

const styles = StyleSheet.create({
  container: {
    height: 180,
    borderRadius: 10,
    width:width-35,
    borderWidth:1,
    marginHorizontal:30,
    borderColor:APP_COLORS.GRAY3,
    backgroundColor: APP_COLORS.WHITE
  },
  innerContainer:{
    margin:15,
    flex:1,
    justifyContent:'space-between'
  },
  rowContainer:{
    flexDirection:'row',
    alignItems:'center',
  },
  innerView:{
    marginHorizontal:10
  },
  topViewContainer:{
    justifyContent:'space-between',
    alignItems:'center'
  },
  centerViewContainer:{
    flex:1,
    justifyContent:'space-evenly'
  },
  bottomViewContainer:{
    justifyContent:'space-between',
    alignItems:'center'
  },
  workOrderHeading:{
    fontWeight:'bold',
    fontSize:APP_FONT_SIZE().SUB_HEADER,
    flexWrap: 'wrap',
    color:APP_COLORS.BACKGROUND
  },
  workOrderSubHeading:{
    fontWeight:'400',
    flexShrink:1,
    fontSize:APP_FONT_SIZE().BODY,
    color:APP_COLORS.GRAY1_DARK
    
  },
  workOrderCompanyName:{
    flexShrink:1, flexWrap: 'wrap',
    fontWeight:'400',
    fontSize:APP_FONT_SIZE().BODY,
    color:APP_COLORS.GRAY1_DARK
  },
  workOrderMachineName:{
    fontWeight:'400',
    fontSize:APP_FONT_SIZE().BODY,
    color:APP_COLORS.GRAY1_DARK
  },
  titleStyle: {
    marginHorizontal:10,
    textAlign:'center',
    fontSize: APP_FONT_SIZE().BODY
  },
  statusView:{
    padding:8,
    borderRadius:10,
  },
  fileText:{
    color:APP_COLORS.GRAY1,
    fontSize:APP_FONT_SIZE().BODY,
    marginHorizontal:5
  },
  lightText:{
    color:APP_COLORS.GRAY1_DARK
  },
  statusText:{
    color:APP_COLORS.STATUS_1_TEXT,
    fontSize:APP_FONT_SIZE().SUB_BODY
  },
  avatar:{
    width:26,
    height:26,
    borderRadius:50,
    backgroundColor: APP_COLORS.GRAY3
  },
  image:{
    width:26,
    height:26
  },
  typeWOLogo:{
    width:30,
    height:30
  },
  fileIcon:{
    width:22,
    height:22
  },
  ticketTypeIconContainer:{
    width:30,
    justifyContent:'center',
    alignItems:'center',
    height:30,
    borderRadius:15
  }
})

export default styles
