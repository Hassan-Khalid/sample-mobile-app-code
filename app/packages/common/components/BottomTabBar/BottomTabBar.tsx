import React from 'react';
import { FlatList, Image, TouchableOpacity, View } from 'react-native';
import styles from './styles/BottomTabBar.styles';
import Text from "../Text/Text"
import useBottomTabBar, { BottomTabs } from 'common/components/BottomTabBar/hooks/useBottomTabBar';
import { useSelector } from 'react-redux';
import { bottomTabSelector } from 'common/redux/selector/userSelector';



function BottomTabBar () {
 const {setCurrentTab} = useBottomTabBar()
  const  bottomTab  = useSelector(bottomTabSelector);
  
  
  const TabsView = ({item})=>{
  
    const {title,icon} = BottomTabs[item]
    const isFocused =  item === bottomTab ? icon.focused : icon.unFocused
    const textStyle = item === bottomTab ? styles.focusedText : styles.unFocusedText
    return(
      <View style={styles.tab}>
        <TouchableOpacity style={styles.tabInnerView} onPress={()=>setCurrentTab(item)} activeOpacity={0.8}>
          <Image source={isFocused} resizeMode={'contain'}/>
          <Text style={textStyle}>{title}</Text>
        </TouchableOpacity>
      </View>
    )
  }
  
  return (
    <View style={styles.container}>
      <FlatList
        scrollEnabled={false}
        contentContainerStyle={styles.tabContainer}
        data={Object.keys(BottomTabs)}
        renderItem={TabsView}/>
    </View>
  )
};

export default BottomTabBar;