import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { navigationRef } from 'common/services/NavigationService';
import AppScreens from './navigator';

function App() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer ref={navigationRef}>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          {AppScreens.map((screen) => (
            <Stack.Screen key={screen.name} name={screen.name} component={screen.screen} options={{ animation: screen.animated ? 'default' : 'none' }} />
          ))}
        </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
