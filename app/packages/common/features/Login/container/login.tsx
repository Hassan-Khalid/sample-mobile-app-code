import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import Text from "../../../components/Text/Text";
import { COMMON_LOGOS } from 'common/assets/Images';
import styles from '../styles/login.styles';
import InputText from '../../../../common/components/InputText/InputText';
import useLogin from '../hooks/useLogin';
import BottomActionButton from '../../../../common/components/BottomActionButton/BottomActionButton';


function Login() {
  const {onEmailInputChange,emailError,email,password,passwordError,errorMessage,onBlur,onPasswordInputChange, onForgotPress, createBottomButton} = useLogin();
  return (
    <View  style={styles.container}>
    <KeyboardAwareScrollView
      enableOnAndroid>
      <View style={styles.bannerContainer}>
      <Image source={COMMON_LOGOS.LOGIN_BG} resizeMode={'cover'} style={styles.topBanner}/>
      </View>
      <View style={styles.logoWrapper}>
        <Image source={COMMON_LOGOS.MAKULA_LOGO_DARK} />
        <View style={styles.innerHeadingContainer}>
          <Text style={styles.heading}>{'login.heroTitle'}</Text>
          <Text style={styles.subHeading}>{'login.heroSubtitle'}</Text>
        </View>
      </View>
      <View style={styles.inputContainer}>
      <InputText
        label={'login.email.label'}
        onBlur={onBlur}
        errorMessage={'login.email.invalidEmail'}
        error={emailError}
        value={email}
        keyboardType={'email-address'}
        onChangeText={onEmailInputChange}
        placeholder={'login.email.placeholder'}
      />
        <InputText
          secureTextEntry={true}
          onBlur={onBlur}
          errorMessage={errorMessage}
          error={passwordError}
          value={password}
          label={'login.password.label'}
          onChangeText={onPasswordInputChange}
          placeholder={"login.password.placeholder"} />
      </View>
      <View style={{...styles.forgotPasswordView}}>
        <TouchableOpacity onPress={()=>onForgotPress()}>
          <Text style={styles.forgotText}>{'login.forgotPassword.title'}</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAwareScrollView>
      <BottomActionButton buttonArray={createBottomButton()}/>
    
    </View>
  );
}

export default Login;
