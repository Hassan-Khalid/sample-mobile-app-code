import {Platform,StyleSheet} from 'react-native';
import APP_COLORS from "../../../assets/colors"

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    ZIndex: 9999,
    bottom: 1,
    left: 0,
    right: 0,
    borderWidth: 1,
    height: 80,
    borderTopWidth: 0,
    justifyContent: 'center',
    backgroundColor: APP_COLORS.WHITE_PERSIST,
    shadowColor: APP_COLORS.GRAY1_DARK,
    borderTopColor: APP_COLORS.GRAY1_DARK,
  },
  shadowContainer: {
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius:5,
      },
      android: {
        elevation: 4,
      }
    })
  },
  buttonContainer: {
    flexGrow:1,
    backgroundColor: APP_COLORS.WHITE_PERSIST,
    alignItems:'center',
    flexDirection:'row',
    justifyContent: 'space-evenly'
  }
})
export default styles
