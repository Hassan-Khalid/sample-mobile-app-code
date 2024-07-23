import React from 'react';
import FastImage from 'react-native-fast-image'
import { AnyType } from 'common/declarations/types';
import componentBuilder from 'common/builder/ComponentBuilder';

function Image(props:AnyType) {
  return (
    <FastImage {...props} {...componentBuilder.createTestAttributes('fast-image')}/>
    
  );
}

export default Image;