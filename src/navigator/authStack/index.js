import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ScreenNames } from '../../constants/strings';
import OnBoardingScreen from '../../screens/auth/onBoardingScreen';
import OTPScreen from '../../screens/auth/otpScreen';
import PhoneInputScreen from '../../screens/auth/phoneInputScreen';
import SignUpScreen from '../../screens/auth/signUpScreen';

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
        name={ScreenNames.RegistrationScreen}
        component={SignUpScreen}
        options={navigationOptions}
      />
      <AuthStack.Screen
        name={ScreenNames.PhoneInpScreen}
        component={PhoneInputScreen}
        options={navigationOptions}
      />
      <AuthStack.Screen
        name={ScreenNames.OtpValidScreen}
        component={OTPScreen}
        options={navigationOptions}
      />
    </AuthStack.Navigator>
  );
};

export default Auth;
