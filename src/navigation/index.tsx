import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { RootStack } from './rootStack';

export const App = () => {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
};
