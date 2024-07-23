import React, {  useMemo } from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import { Header } from '@rneui/themed';
import {  ScreenHeader } from 'common/declarations/types';
import styles from '../styles/ScreenHeaderComponent.styles';
import Text from "../../Text/Text"
import { COMMON_LOGOS } from 'common/assets/Images';
import { NavigationService } from '../../../services';
import useScreenHeader from 'common/components/ScreenHeader/hooks/useScreenHeader';
import CustomInput from 'common/components/InputText/InputText';
import ComponentBuilder from 'common/builder/ComponentBuilder';



const ScreenHeaderComponent = (props: ScreenHeader) => {
const {setSearchState,renderSearchBar,handleSearchTextChange,searchInputValue,toggleHandler} = useScreenHeader(props)

  const LeftComponent = ()=> {
    if(renderSearchBar){
      return (
        <View style={styles.leftContainer}>
         <Image source={COMMON_LOGOS.IC_SEARCH} resizeMode={'contain'} style={styles.icon} />
        </View>
      )
    }
    else {
      return (
        <View style={styles.leftContainer}>
          <TouchableOpacity onPress={() => NavigationService.openDrawer()}>
            <Image source={COMMON_LOGOS.IC_LIST} resizeMode={'contain'} style={styles.icon} />
          </TouchableOpacity>
        </View>
      )
    }
  }
  const CenterComponent = ()=>{
    if(renderSearchBar){
      return (
        <View style={styles.bodyContainer}>
        <SearchBarView/>
        </View>
      )
    }
    return (
      <View style={styles.bodyContainer}>
        <Text style={styles.headingText}>{props.title}</Text>
      </View>
    )
  }
  const RightComponent = ()=> {
    const rightLogo = renderSearchBar ? COMMON_LOGOS.IC_CROSS : COMMON_LOGOS.IC_SEARCH
    
      return (
        <View style={styles.rightContainer}>
          <TouchableOpacity onPress={toggleHandler}>
            <Image source={rightLogo} resizeMode={'contain'} style={renderSearchBar ? styles.crossIcon : styles.icon}/>
          </TouchableOpacity>
        </View>
      )
    
  }
  
  const SearchBarView = () =>{
    return(
        <CustomInput
         {...ComponentBuilder.createTestAttributes('Search_bar_work_order')}
          value={searchInputValue}
          placeholder={'Search here'}
          containerStyle={styles.searchInputContainer}
          inputContainer={styles.searchInput}
          onChangeText={handleSearchTextChange}
          blurOnSubmit={false}
      />
    )
  }
    return (
      <Header
        {...ComponentBuilder.createTestAttributes('header_component')}
        containerStyle={styles.container}
        placement={'left'}
        leftComponent={useMemo(()=> <LeftComponent />,[renderSearchBar,searchInputValue])}
        centerComponent={<CenterComponent />}
        rightComponent={useMemo(()=><RightComponent />,[renderSearchBar,searchInputValue])}
      />
    );
  // }
};

export default ScreenHeaderComponent;
