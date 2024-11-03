import { View, Text, StatusBar, Image, ActivityIndicator } from 'react-native';
import React from 'react';
import { styles } from './styles';
import { images } from '../../../assets/images';
import { LinearGradient } from 'expo-linear-gradient';
import { ScreenNames, Strings } from '../../../constants/strings';
import { GradientButton, PlainButton } from '../../../components/cta';
import { navigate } from '../../../navigator/navigationRef';
import { colors } from '../../../constants/colors';

const OnBoardingScreen = () => {
  return (
    <View style={[styles.container]}>
      <StatusBar translucent={true} backgroundColor={'transparent'} />
      <LinearGradient
        colors={[colors.gradientColor1, colors.gradientColor2]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.gradientView}
      >
        <Image source={images.logoTextImage2} style={styles.logoImage} />
        <Image source={images.phoneImage} style={styles.bgImageStyle} />
        <View style={styles.flexStyle} />
        <View style={styles.bottomContainer}>
          <Text style={[styles.heading]}>{Strings.mobileBanking}</Text>
          <Text style={styles.subHeading}>{Strings.getSendingText}</Text>
          <View style={[styles.btnContainer, styles.btnContainer]}>
            <PlainButton buttonText={Strings.login}
              style={styles.btn}
            />
            <GradientButton
              buttonText={Strings.getStarted}
              onPress={() => navigate(ScreenNames.StartScreenOne)}
              style={styles.btn2}
            />
          </View>
        </View>
      </LinearGradient>
    </View>
  );
};

export default OnBoardingScreen;
