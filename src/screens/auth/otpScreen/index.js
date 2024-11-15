import { View, Text, TouchableOpacity, Platform, TouchableWithoutFeedback, Keyboard } from 'react-native';
import React, { useState } from 'react';
import AppBar from '../../../components/appBar';
import { styles } from './styles';
import { Strings } from '../../../constants/strings';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import { rfs,rwp } from '../../../constants/dimensions';
import { GradientButton } from '../../../components/cta';
import ProgressBar from '../../../components/progressBar';
import { colors } from '../../../constants/colors';

const OTPScreen = ({ route, navigation }) => {
  const { phone, countryCode } = route.params;
  const [otpCode, setOtpCode] = useState(null);
  const CELL_COUNT = 6;
  const [value, setValue] = useState('');
  const [results, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const isOtpComplete = value.length === CELL_COUNT;
  const DedicatedView = Platform.OS === 'web' ? View : TouchableWithoutFeedback
  const handlePress = () => {
    Platform.OS !== 'web' && Keyboard.dismiss()
  }
  return (
    <DedicatedView style={{flex:1}} onPress={handlePress}>
    <View style={styles.container}>
      <AppBar start={3} end={3} onPress={() => navigation.goBack()} />
      <ProgressBar
        progress={100}
        style={{ borderBottomLeftRadius: 8, borderBottomTopRadius: 8 }}
      />
      <Text style={styles.title}>{Strings.verifyPhn} </Text>
      <Text style={styles.subTitle}>{Strings.otpHeading} </Text>

      <View style={styles.countryCodeStyle}>
        <Text style={styles.phnText}>{`${countryCode} ${phone}`}</Text>
        <TouchableOpacity>
          <Text style={styles.editText}>{Strings.editNumber}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.otpContainer}>
        <CodeField
          ref={ref}
          {...results}
          caretHidden={false}
          value={value}
          onChangeText={text => {
            setValue(text);
            setOtpCode(text);
          }}
          cellCount={CELL_COUNT}
          rootStyle={styles.codeFieldRoot}
          keyboardType="number-pad"
          textContentType="oneTimeCode"
          autoComplete={Platform.select({
            android: 'sms-otp',
            default: 'one-time-code',
          })}
          testID="my-code-input"
          renderCell={({ index, symbol, isFocused }) => (
            <View style={styles.cell}>
              <Text
                key={index}
                style={[styles.cellText]}
                onLayout={getCellOnLayoutHandler(index)}>
                {symbol || (isFocused ? <Cursor /> : null)}
              </Text>
            </View>
          )}
        />
      </View>
      <View style={styles.bottomTextRow}>
        <Text style={styles.codeText}>{Strings.codeReceive}</Text>
        <TouchableOpacity>
          <Text
            style={[
              styles.codeText,
              {
                color: colors.primary,
                marginLeft: rwp(2),
                fontFamily: 'PlusJakartaSans-SemiBold',
                fontSize: Platform.OS ==='ios' ? rfs(14) : rfs(15)
              },
            ]}>
            {Strings.resendCode}
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.flexStyle} />
      <GradientButton
        buttonText={Strings.verify}
        style={styles.btnStyle(isOtpComplete)}
      />
    </View>
    </DedicatedView>
  );
};

export default OTPScreen;
