import { StyleSheet } from 'react-native';
import APP_COLORS from '../../../../common/assets/colors';
import { APP_FONT, APP_FONT_SIZE } from '../../../../common/assets/fonts';

const styles = StyleSheet.create({
    inputContainer: {
      borderWidth: 1,
      borderRadius: 10,
      paddingStart: 10,
      borderColor:APP_COLORS.GRAY3
  },
  inputStyle: {
    fontSize: APP_FONT_SIZE().BODY,
    fontFamily: APP_FONT().LIGHT,
  },
  labelStyle: {
    marginBottom: 8,
    fontSize: APP_FONT_SIZE().SUB_BODY,
    fontWeight: '400',
    fontFamily: APP_FONT().EXTRA_LIGHT,
  },
  
  errorView: {
    marginHorizontal: 10,
    flexDirection: 'row',
    top:-16,
    alignItems:'center'
  },
  errorText:{
    fontSize: APP_FONT_SIZE().SUB_BODY,
    fontWeight: '400',
    fontFamily: APP_FONT().EXTRA_LIGHT,
    color: APP_COLORS.DANGER,
    marginHorizontal:5
  },
  disabled: {
  backgroundColor:APP_COLORS.DENIED}
})

export default styles;
