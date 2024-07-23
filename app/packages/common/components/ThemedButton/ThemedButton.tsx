import React from 'react';
import { Button } from '@rneui/themed';
import styles from "./styles/ThemedButton.styles";
import Util from '../../util/Util';
import { t } from 'i18next';
import componentBuilder from 'common/builder/ComponentBuilder';

const btnSize = {
  large : {width:Util.getWindowWidth() - 50},
  medium : {width:Util.getWindowWidth() - 150},
  small :{width:Util.getWindowWidth() - 250}
  
}

const ThemedButton = (props) => {
  const {size}= props
  const _s = btnSize[size]
  
  return (
    <Button
      {...componentBuilder.createTestAttributes('button-component')}
      title={t(props.title)}
      onPress={ !props.loading && props.onPress}
      disabled={props.disabled}
      type={props.type}
      loading={props.loading}
      buttonStyle={[styles.buttonStyle, props.buttonStyle,_s]}
      titleStyle={[styles.titleStyle, props.titleStyle]}
    />
  );
};

export default ThemedButton
