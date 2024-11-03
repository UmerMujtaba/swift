import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { NavigationCheck } from './src/navigator';
import { useFonts } from 'expo-font';
import { customFonts } from './src/constants/ok';
import { ActivityIndicator, View } from 'react-native';
import { colors } from './src/constants/colors';

const App = () => {
  const [fontsLoaded] = useFonts(customFonts);
  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color={colors.gradientColor1} />
      </View>
    );
  }
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationCheck />
    </GestureHandlerRootView>
  );
};
export default App;
