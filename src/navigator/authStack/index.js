import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {ScreenNames} from '../../constants/strings';
import OnBoardingScreen from '../../screens/auth/onBoardingScreen';
import GetStartedScreenOne from '../../screens/auth/getStartScreenOne';
import GetStartedScreenTwo from '../../screens/auth/getStartedScreenTwo';
import GetStartedScreenThree from '../../screens/auth/getStartedScreenThree';

const AuthStack = createNativeStackNavigator();

const navigationOptions = () => ({
  headerShown: false,
  animationEnabled: true,
  animationTypeForReplace: 'push',
  animation: 'slide_from_right',
});

const Auth = () => {
  return (
    <AuthStack.Navigator initialRouteName={ScreenNames.BoardingScreen}>
      <AuthStack.Screen
        name={ScreenNames.BoardingScreen}
        component={OnBoardingScreen}
        options={navigationOptions}
      />
      <AuthStack.Screen
        name={ScreenNames.StartScreenOne}
        component={GetStartedScreenOne}
        options={navigationOptions}
      />
      <AuthStack.Screen
        name={ScreenNames.StartScreenTwo}
        component={GetStartedScreenTwo}
        options={navigationOptions}
      />
      <AuthStack.Screen
        name={ScreenNames.StartScreenThree}
        component={GetStartedScreenThree}
        options={navigationOptions}
      />
    </AuthStack.Navigator>
  );
};

export default Auth;
