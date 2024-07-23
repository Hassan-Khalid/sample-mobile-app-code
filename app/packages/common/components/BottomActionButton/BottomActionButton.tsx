import React from "react"
import { FlatList, View } from 'react-native';
import {ThemedButtonProps} from "../../declarations/types"
import ThemedButton  from '../ThemedButton/ThemedButton';
import styles from './styles/BottomActionButton.style';

type BottomActionButtonProps = {
  buttonArray:ThemedButtonProps[]
}

const BottomActionButton =  ({ buttonArray }:BottomActionButtonProps) => {
  return (
    <View style={{...styles.container,...styles.shadowContainer}}>
      <FlatList
        scrollEnabled={false}
        keyExtractor={(item, index) => `${index}`}
        contentContainerStyle={{...styles.buttonContainer}}
        data={buttonArray}
        renderItem={ ({ item })=> <ThemedButton {...item}/>}
      />
    </View>
  )
  
}

export default  BottomActionButton