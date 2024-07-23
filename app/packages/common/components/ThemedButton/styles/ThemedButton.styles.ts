import { Dimensions, Platform, StyleSheet } from 'react-native';
import  APP_COLORS  from '../../../assets/colors/AppColors';
import { APP_FONT_SIZE } from '../../../assets/fonts';
const { width, height } = Dimensions.get( 'screen');

const styles = StyleSheet.create({
  buttonStyle: {
    height: 45,
    borderRadius: 10,
    width:100,
    marginHorizontal:30,
    justifyContent: 'center',
    backgroundColor: APP_COLORS.BLUE
  },
  titleStyle: {
    color: APP_COLORS.WHITE_PERSIST,
    fontSize: APP_FONT_SIZE().BODY
    }
  })

export default styles
