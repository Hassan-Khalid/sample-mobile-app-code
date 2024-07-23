import React from "react";
import {  View ,Image, ImageBackground } from 'react-native';
import styles from './styles/SplashScreen.styles';
import { COMMON_LOGOS } from 'common/assets/Images';
import componentBuilder from 'common/builder/ComponentBuilder';


const SplashScreenComponent = () => {
  return (
    <View style={styles.container}>
      <View>
      <ImageBackground {...componentBuilder.createTestAttributes('image-background')} source={COMMON_LOGOS.LOGIN_BG}  resizeMode={'contain'}/>
      <Image  {...componentBuilder.createTestAttributes('logo-makula')}source={COMMON_LOGOS.MAKULA_LOGO_LIGHT} resizeMode={'contain'}/>
      </View>
    </View>
  )
}

export default SplashScreenComponent
