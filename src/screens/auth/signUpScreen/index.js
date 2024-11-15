import { View, Text, StatusBar, TouchableWithoutFeedback, Keyboard, Platform, TextInput } from 'react-native';
import React, { useRef, useState } from 'react';
import { styles } from './styles';
import AppBar from '../../../components/appBar';
import { ScreenNames, Strings } from '../../../constants/strings';
import CustomTextInput from '../../../components/customTextInput';
import { images } from '../../../assets/images';
import CustomCheckbox from '../../../components/customCheckBox';
import { GradientButton } from '../../../components/cta';
import { navigate } from '../../../navigator/navigationRef';
import ProgressBar from '../../../components/progressBar';


const SignUpScreen = ({ navigation }) => {
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [isSecureCheck, setIsSecureCheck] = useState(true);
  const [rememberMe, setRememberMe] = useState(false);
  const firstRef = useRef(null);
  const secondRef = useRef(null);
  const [currentStep, setCurrentStep] = useState(1);

  const handleCheckboxPress = (isChecked, setRememberMe) => {
    setRememberMe(isChecked);
    console.log('Keep me signed in is checked:', isChecked);
  };

  const isButtonEnabled = Email.length > 0 && Password.length > 0 && rememberMe;

  const totalSteps = 3;

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const progress = (currentStep / totalSteps) * 100;

  const DedicatedView = Platform.OS === 'web' ? View : TouchableWithoutFeedback
  const handlePress = () => {
    Platform.OS !== 'web' && Keyboard.dismiss()
  }
  return (
    <DedicatedView style={{ flex: 1 }} onPress={handlePress}>
      <View style={[styles.container]}>
        <StatusBar translucent={true} backgroundColor={'transparent'} />
        <AppBar start={1} end={3} onPress={() => navigation.goBack()} />
        <ProgressBar progress={33.3}/>
        <Text style={styles.title}>{Strings.getStartedWithAccount} </Text>

        <CustomTextInput
          ref={firstRef}
          placeholder={Strings.enterEmail}
          keyboardType="email-address"
          returnKeyType="next"
          value={Email}
          onChangeText={setEmail}
          onSubmitEditing={() => secondRef.current.focus()}
        //selectionColor='red'
        />
        <CustomTextInput
          ref={secondRef}
          placeholder={Strings.password}
          keyboardType="default"
          returnKeyType="done"
          style={styles.inputText}
          secureTextEntry={isSecureCheck}
          value={Password}
          onChangeText={setPassword}
          suffixIconStyle={styles.iconStyle}
          eyeSource={isSecureCheck ? images.eyeOpenIcon : images.eyeHideIcon}
          eye
          eyePress={() => setIsSecureCheck(!isSecureCheck)}
        />

        <View style={styles.flexStyle} />
        <View style={styles.checkBoxView}>
          <CustomCheckbox
            label={Strings.termsTextStart}
            onPress={isChecked => handleCheckboxPress(isChecked, setRememberMe)}
          />

          <GradientButton
            buttonText={Strings.getStarted}
            style={[styles.btnStyle(isButtonEnabled)]}
            onPress={() => {
              if (isButtonEnabled) {
                navigate(ScreenNames.PhoneInpScreen);
                handleNext();
              }
            }}
          />
        </View>
      </View>
    </DedicatedView>
  );
};

export default SignUpScreen;

