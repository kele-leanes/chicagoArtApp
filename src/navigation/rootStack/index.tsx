import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export const RootStack: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={() => <></>} />
    </Stack.Navigator>
  );
};
