import React from 'react';
import { View, Image, TouchableOpacity, Text as RNText } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import Text from "../../../components/Text/Text";
import { COMMON_LOGOS } from 'common/assets/Images';
import styles from '../styles/ForgotPassword.styles';
import InputText from '../../../../common/components/InputText/InputText';
import useForgotPassword ,{_state} from '../hooks/useForgotPassword';
import BottomActionButton from '../../../../common/components/BottomActionButton/BottomActionButton';
import { t } from 'i18next';

function ForgotPassword() {
  const {onEmailInputChange,emailError,screenState,onPressHandler,state,email,onBlur, createBottomButton} = useForgotPassword();
  
  const renderInputView = () => {
    if(state === _state.EMAIL){
      return (
        <View>
          <View style={styles.innerHeadingContainer}>
            <Text style={styles.heading}>{screenState.heading}</Text>
            <Text style={styles.subHeading}>{screenState.subHeading}</Text>
          </View>
          <InputText
            label={'login.email.label'}
            onBlur={onBlur}
            errorMessage={'login.email.invalidEmail'}
            error={emailError}
            value={email}
            keyboardType={'email-address'}
            onChangeText={onEmailInputChange}
            placeholder={"login.email.placeholder"}
          />
        </View>
      )
    }
    else {
      return (
        <View>
          <View style={styles.innerHeadingContainer}>
            <Text style={styles.heading}>{screenState.heading}</Text>
            <RNText style={styles.subHeading}>
              <Text style={styles.subHeading}>{'login.forgotPassword.resetSuccess.resend.resendEmailSubHeading'}</Text>
              <Text style={{...styles.subHeading,...styles.boldText}}>{' ' + email + ','}</Text>
              <Text style={styles.subHeading}>{'login.forgotPassword.resetSuccess.resend.resendEmailHeading'}</Text>
            </RNText>
          <View style={styles.resendView}>
              <RNText style={styles.resendText}>{t('login.forgotPassword.resetSuccess.resend.didnotGet')}</RNText>
                <RNText>{' '}</RNText>
                 <TouchableOpacity onPress={onPressHandler} >
                <RNText style={styles.resendBtnText}>{t('login.forgotPassword.resetSuccess.resend.resendEmail')}</RNText>
              </TouchableOpacity>
          </View>
          </View>
        </View>
      )
    }
    
  }
  
  return (
    <View  style={styles.container}>
      <KeyboardAwareScrollView
        enableOnAndroid>
        <View style={styles.bannerContainer}>
          <Image source={COMMON_LOGOS.LOGIN_BG} resizeMode='cover' style={styles.topBanner}/>
        </View>
        <View style={styles.logoWrapper}>
          <Image source={COMMON_LOGOS.MAKULA_LOGO_DARK} resizeMode={'contain'}/>
        </View>
        <View style={styles.inputContainer}>
          {renderInputView()}
        </View>
       
      </KeyboardAwareScrollView>
      <BottomActionButton buttonArray={createBottomButton()}/>
    
    </View>
  );
}

export default ForgotPassword;
