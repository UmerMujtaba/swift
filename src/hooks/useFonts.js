// src/constants/fonts.js
import * as Font from 'expo-font';
import { useEffect, useState } from 'react';

export const useFonts = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    const loadFonts = async () => {
      await Font.loadAsync({
        'BasisGrotesque-Black': require('../assets/fonts/BasisGrotesque-Black.ttf'),
        'BasisGrotesque-Bold': require('../assets/fonts/BasisGrotesque-Bold.ttf'),
        'BasisGrotesque-Regular': require('../assets/fonts/BasisGrotesque-Regular.ttf'),
        'BasisGrotesque-Medium': require('../assets/fonts/BasisGrotesque-Medium.ttf'),
        'BasisGrotesque-Light': require('../assets/fonts/BasisGrotesque-Light.ttf'),
        'PlusJakartaSans-Bold': require('../assets/fonts/PlusJakartaSans-Bold.ttf'),
        'PlusJakartaSans-Regular': require('../assets/fonts/PlusJakartaSans-Regular.ttf'),
        'PlusJakartaSans-Medium': require('../assets/fonts/PlusJakartaSans-Medium.ttf'),
        'PlusJakartaSans-SemiBold': require('../assets/fonts/PlusJakartaSans-SemiBold.ttf'),
        'PlusJakartaSans-ExtraBold': require('../assets/fonts/PlusJakartaSans-ExtraBold.ttf'),
        'PlusJakartaSans-ExtraLight': require('../assets/fonts/PlusJakartaSans-ExtraLight.ttf'),
      });
      setFontsLoaded(true);
    };

    loadFonts();
  }, []);

  return fontsLoaded;
};
