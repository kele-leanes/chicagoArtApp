import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from 'src/views/HomeScreen';

const Stack = createNativeStackNavigator();

export const RootStack: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: 'Artworks' }}
      />
    </Stack.Navigator>
  );
};
