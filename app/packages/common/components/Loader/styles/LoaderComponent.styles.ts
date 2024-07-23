import { Dimensions, StyleSheet } from 'react-native';

const { width, height } = Dimensions.get('screen');

const styles = StyleSheet.create({
  spinnerWrapper: {
    height,
    width,
    position: 'absolute',
    zIndex: 10000,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
