import {Text as NText,TextStyle, TextProps} from "react-native"
import React from "react";
import {useTranslation} from 'react-i18next';
import { AnyType } from 'common/declarations/types';
import AppColors from 'common/assets/colors/AppColors';

interface _TextProps extends TextProps{
  style?:TextStyle,
  children:React.ReactNode | AnyType,
}

const Text = (props:_TextProps)=>{
  const {t} = useTranslation();
  return(
    <NText style={{...props.style,...{color:AppColors.BACKGROUND}}} {...props} >
      {t(props.children)}
    </NText>
  )
}

export default Text;