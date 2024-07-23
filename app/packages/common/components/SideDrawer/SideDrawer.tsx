import React from 'react';
import { Button, SafeAreaView, View } from 'react-native';
import { AuthenticationService } from '../../services';

const SideDrawer = () => {
  return (
    <SafeAreaView>
   <View style={{flexGrow:1, marginTop:40}}>
    <Button title={'logout'} onPress={()=>AuthenticationService.handleLogout()}/>
   </View>
    </SafeAreaView>
  );
};

export default SideDrawer;