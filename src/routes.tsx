import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginAndRegister from './pages/LoginAndRegister'
import Home from './pages/Home';
import Search from './pages/Search';
import PokemonResult from './pages/PokemonResult';
import { SearchProvider } from './hooks/SearchContext';
import { LoginProvider } from './hooks/LoginContext';
import ItemResult from './pages/ItemResult';
const { Navigator, Screen } = createStackNavigator();

const Routes: React.FC = () => {
  return (
    <SearchProvider>
      <LoginProvider>
        <NavigationContainer>
          <Navigator screenOptions={{ headerShown : false }}>
            <Screen name="LoginAndRegister" component={ LoginAndRegister } />
            <Screen name="Home" component={ Home } />
            <Screen name="Search" component={ Search } />
            <Screen name="PokemonResult" component={ PokemonResult } />
            <Screen name="ItemResult" component={ ItemResult } />
          </Navigator>
        </NavigationContainer>
      </LoginProvider>
    </SearchProvider>
  );
}

export default Routes;