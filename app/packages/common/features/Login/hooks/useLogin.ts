
import { useCallback, useEffect, useState } from 'react';
import NavigationService from '../../../../common/services/NavigationService';
import SCREENS from '../../../../common/constants/Screens';
import { ThemedButtonProps } from 'common/declarations/types';
import Util from "../../../util/Util";
import {useUserLogin} from '../../../../apollo/services';
import AuthenticationService from '../../../../common/services/AuthenticationService';

import { useToast } from "react-native-toast-notifications";
import {t} from 'i18next';


// admin@admin.com
// cJM0nQjwAk
const useLogin = () => {
  const [email, setEmail] = useState<string>('hassan.khalid@makula.io')
  const [password, setPassword] = useState<string>('WgUihIcLob')
  const [loading, setLoading] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('')
  const { submitLogin } = useUserLogin();
  
  const toast = useToast();
  
  const validateEmail = useCallback( () => {
    if (Util.validateEmail(email)) {
      setEmailError(false);
    }
    else{
      setEmailError (true) ;
    }
  }, [email]);
  
  const validatePassword = useCallback( () => {
  if (password.length !== 0) {
    if (password.length < 8 && password.length > 8) {
      setPasswordError(true)
    } else {
      setPasswordError(false);
    }
  }
}, [password])
  
  const onBlur = () =>{
    validatePassword();
    validateEmail();
  }
  
  const onEmailInputChange = (email:string)=> {
    setEmail(email)
    validateEmail();
  }
  const onPasswordInputChange = (password:string)=> {
    setPassword(password)
  }

  const onLoginPress = ()=> {
    setLoading(true);
    submitLogin(
      {userCredentials: {
          username: String(email).toLowerCase(), password: Util.encodeStringToBase64(password),
        }}).
    then((res) => {
      AuthenticationService.handleAuthentication(res.data.loginOemDashboard)
      setLoading (false);
      toast.show(t("login.welcome"), {
        type: "success",placement: "top", duration: 2000, animationType: "slide-in",
      });
      NavigationService.navigateTop(SCREENS.LANDING)
    }).catch
    ((e) => {
      // eslint-disable-next-line no-console
      console.log(JSON.stringify(e))
      
      setPasswordError(true);
      if (e.graphQLErrors && e.graphQLErrors.length > 0) {
      setErrorMessage(e?.graphQLErrors[0].message || '');
      }
      setLoading(false);
    });
  }
  const onForgotPress = ()=> {
    NavigationService.navigate(SCREENS.FORGOT_PASSWORD)
  }
  
  const checkButtonState = useCallback(()=>{
    return !((email.length !== 0 && password.length >= 8) && !emailError);
  }, [email, emailError, password])
  
  const checkLoadingState = useCallback(() => {
    return loading;
  }, [loading])
  
  const createBottomButton = () => {
    let login = <ThemedButtonProps>{}
    login.title = 'login.loginLabel';
    login.onPress = onLoginPress;
    login.type = 'solid';
    login.size = 'large'
    login.loading = checkLoadingState()
    login.disabled = checkButtonState()
    return [login]
  }
  
  useEffect (() => {
    checkButtonState()
  }, [email, password]);
  
  
  return {
    email,
    loading,
    emailError,
    onBlur,
    onEmailInputChange,
    onPasswordInputChange,
    password,
    passwordError,
    errorMessage,
    onForgotPress,
    createBottomButton,
    onLoginPress
  }
}

export default useLogin;