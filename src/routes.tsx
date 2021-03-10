import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './pages/Home';
import Search from './pages/Search';

const { Navigator, Screen } = createStackNavigator();

const Routes: React.FC = () => {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown : false }}>
        <Screen name="Home" component={ Home } />
        <Screen name="Search" component={ Search } />
      </Navigator>
    </NavigationContainer>
  );
}

export default Routes;