import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Auth from './authStack';
import {ScreenNames} from '../constants/strings';
import {navigationRef} from './navigationRef';

const NavigationStack = createNativeStackNavigator();

export const NavigationCheck = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <NavigationStack.Navigator initialRouteName={ScreenNames.AuthStack}>
        <NavigationStack.Screen
          name={ScreenNames.AuthStack}
          component={Auth}
          options={{headerShown: false}}
        />
      </NavigationStack.Navigator>
    </NavigationContainer>
  );
};
