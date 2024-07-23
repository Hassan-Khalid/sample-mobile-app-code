import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { navigationRef } from 'common/services/NavigationService';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AppScreens from './navigator';
import SCREENS from '../common/constants/Screens';
import { SideDrawer, BottomTabBar } from '../common/components';

function BottomTab() {
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer ref={navigationRef}>
      <Tab.Navigator tabBar={BottomTabBar} screenOptions={{ headerShown: false }}>
        <Tab.Screen name="TabBar" component={Drawer} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

function Drawer() {
  const Drawer = createDrawerNavigator();
  return (
    <NavigationContainer ref={navigationRef}>
      <Drawer.Navigator drawerContent={SideDrawer} screenOptions={{ headerShown: false }}>
        <Drawer.Screen name="Drawer" component={App} options={{ swipeEnabled: false }} />
      </Drawer.Navigator>
    </NavigationContainer>

  );
}
function App() {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={SCREENS.LANDING}>
      {AppScreens.map((screen) => (
        <Stack.Screen key={screen.name} name={screen.name} component={screen.screen} options={{ animation: screen.animated ? 'default' : 'none' }} />
      ))}
    </Stack.Navigator>
  );
}

export default Drawer;
