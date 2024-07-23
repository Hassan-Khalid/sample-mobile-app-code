import React from 'react'

import { useToast } from "react-native-toast-notifications";
import { ToastProps } from '../../declarations/types';
import { t } from 'i18next';
const Toast = ({message,type,
                 placement='top',
                 duration =2000,
                 animationType ='slide-in',
               }:ToastProps) => {
  const toast = useToast()
  return toast.show(t(message), {
    type: type,placement: placement,duration: duration, animationType: animationType
  });
  
}

export default Toast