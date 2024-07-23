import React from 'react';
import { View, ViewStyle } from 'react-native';
import Text from "../Text/Text"
import { Input,InputProps } from '@rneui/themed';
import AppColors from '../../../common/assets/colors/AppColors';
import styles from "./styles/inputText.styles"
import { t } from 'i18next';
import { AnyType } from 'common/declarations/types';
import ComponentBuilder from 'common/builder/ComponentBuilder';
interface CustomInputProps extends InputProps {
  label?: string;
  errorMessage?: string;
  autoFocus?: boolean;
  value?: string;
  onChangeText?: (text: string) => void;
  error?:boolean;
  placeholder?:string;
  secureTextEntry?:boolean;
  ref?:React.ForwardedRef<AnyType>
  validator?: (value: string) => string | undefined;
  inputContainer?:ViewStyle
  inputStyle?:ViewStyle
}

const CustomInput =( props:CustomInputProps ) => {
  
  const {
    value,
    onChangeText,
    keyboardType = 'default',
    placeholder = "",
    secureTextEntry,
    autoCapitalize = 'none',
    maxLength = 10000,
    returnKeyType = 'done',
    errorMessage = '',
    error,
    label ='',
    containerStyle,
    leftIconContainerStyle,
    leftIcon,
    rightIcon,
    rightIconContainerStyle,
    onFocus = () => { },
    inputContainer,
    inputStyle,
  } = props;
  
  return (
    <View {...ComponentBuilder.createTestAttributes('input-text-container')}>
      <Input
        {...ComponentBuilder.createTestAttributes('input-text-field')}
        placeholder={t(placeholder)}
        placeholderTextColor={AppColors.GRAY1}
        allowFontScaling={false}
        labelStyle={styles.labelStyle}
        keyboardType={keyboardType}
        label={t(label)}
        autoFocus={true}
        leftIcon={leftIcon}
        containerStyle={containerStyle}
        rightIcon={rightIcon}
        rightIconContainerStyle={rightIconContainerStyle}
        leftIconContainerStyle={leftIconContainerStyle}
        inputContainerStyle={{...styles.inputContainer,...inputContainer}}
        inputStyle={{...styles.inputStyle,...inputStyle}}
        autoCapitalize={autoCapitalize}
        maxLength={maxLength}
        value={value}
        returnKeyType={returnKeyType}
        secureTextEntry={secureTextEntry}
        onChangeText={onChangeText}
        onFocus={onFocus} />
      {error &&
        <View style={styles.errorView}>
          <Text style={styles.errorText}>{errorMessage}</Text>
        </View>}
    </View>
  );
}

export default CustomInput;