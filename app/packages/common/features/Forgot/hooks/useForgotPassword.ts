import { useCallback, useEffect, useState } from 'react';
import { ThemedButtonProps } from 'common/declarations/types';
// @ts-ignore
import { forgotPassword } from '../../../../apollo/services';
import { useToast } from "react-native-toast-notifications";
import { NavigationService } from '../../../services';
import SCREENS from '../../../constants/Screens';
import Util from '../../../util/Util';

export enum _state {
  EMAIL = 'EMAIL',
  RESEND = 'RESEND'
}
const useForgotPassword = ()=> {
  const [email, setEmail] = useState<string>('test@test.com')
  const [emailError, setEmailError] = useState(false);
  const [loading,setLoading ] = useState(false);
  const [state, setComponentState] = useState(_state.EMAIL);
  const componentState = {
    'EMAIL': {
      heading: 'login.forgotPassword.title',
      subHeading: 'login.forgotPassword.message',
      button: 'login.forgotPassword.reset'
    },
    'RESEND': {
      heading: 'login.forgotPassword.resetSuccess.message',
      subHeading: `An email has been sent to ${email}, check the inbox and click the reset link.`,
      button: 'login.thanks',
    }
  }
  const [screenState, setScreenState] = useState(componentState.EMAIL)
  const { mutation } = forgotPassword();
  const toast = useToast();
  const onEmailInputChange = (email: string) => {
    setEmail(email)
  }
  const validateEmail = () => {
    if (Util.validateEmail(email) || !email) {
      setEmailError(false);
    } else {
      setEmailError(true);
    }
  }
  
  const onBlur = () =>{
    validateEmail();
  }
  
  const onPressHandler = () => {
    setLoading(true)
    if(!emailError) {
      mutation({ email: String(email).toLowerCase() }
      ).then((response) => {
        if (response.data.forgotPassword) {
          setComponentState(_state.RESEND)
          setLoading(false)
          toast.show(response.data.forgotPassword, {
            duration: 2000,
            type: "success",
            placement: "top",
            animationType: "slide-in",
          })
        }
      }).catch((e) => {
        setLoading(false)
        toast.show(e.graphQLErrors[0].message, {
          duration: 2000,
          type: "danger",
          placement: "top",
          animationType: "slide-in",
        })
        // eslint-disable-next-line no-console
        console.log('res', e.graphQLErrors[0].message)
      })
    }
  }
  
  const checkButtonState = () => {
    if ((email && !emailError) || state === _state.RESEND) {
      return false
    }
    return true
  }
  const setstate = () => {
    if (state === _state.EMAIL) {
      setScreenState(componentState.EMAIL);
      return componentState.EMAIL.button
    } else {
      setScreenState(componentState.RESEND);
      return componentState.RESEND.button
    }
  }
  
  const onHandlerPress = () => {
    if (state === _state.EMAIL) {
      onPressHandler();
    } else {
      NavigationService.navigate(SCREENS.LOGIN);
    }
  }
  const checkLoadingState = useCallback(() => {
    return loading
  },[loading])
  const createBottomButton = ()=>{
    const bottomBtn = <ThemedButtonProps>{}
    bottomBtn.title = screenState.button;
    bottomBtn.onPress = onHandlerPress
    bottomBtn.size='large';
    bottomBtn.loading = checkLoadingState()
    bottomBtn.disabled = checkButtonState()
    
    return [bottomBtn]
}
  useEffect(() => {
    validateEmail()
  }, [email]);
  
  
  useEffect(() => {
    setstate()
  }, [state]);
  
  
  return {
    onEmailInputChange,
    emailError,
    email,
    onBlur,
    state,
    onPressHandler,
    createBottomButton,
    setComponentState,
    screenState,
    loading,
    validateEmail,
    setLoading,
    setEmailError
    
  }
}
export default useForgotPassword;