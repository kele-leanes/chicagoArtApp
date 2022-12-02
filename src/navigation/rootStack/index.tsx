import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { HomeScreen } from 'src/views/HomeScreen';
import { DetailScreen } from 'src/views/DetailScreen';

export type RootStackParamList = {
  Home: undefined;
  Details: {
    id: number;
    title: string;
  };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;

export const RootStack: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: 'Artworks' }}
      />
      <Stack.Screen
        name="Details"
        component={DetailScreen}
        options={props => ({ title: props.route.params?.title })}
      />
    </Stack.Navigator>
  );
};
