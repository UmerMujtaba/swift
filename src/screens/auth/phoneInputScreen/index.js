import { View, Text, TouchableWithoutFeedback, Keyboard, Platform } from 'react-native';
import React, { useState } from 'react';
import AppBar from '../../../components/appBar';
import { styles } from './styles';
import { ScreenNames, Strings } from '../../../constants/strings';
import CountryCodeDropdownPicker from 'react-native-dropdown-country-picker'
import { GradientButton } from '../../../components/cta';
import { navigate } from '../../../navigator/navigationRef';
import ProgressBar from '../../../components/progressBar';


const PhoneInputScreen = ({ navigation }) => {
  const [selected, setSelected] = useState('+234');
  const [country, setCountry] = useState({ callingCode: '+234' });
  const [phone, setPhone] = useState('');

  const isPhoneNumberFilled = phone.length > 0;
  const DedicatedView = Platform.OS === 'web' ? View : TouchableWithoutFeedback
  const handlePress = () => {
    Platform.OS !== 'web' && Keyboard.dismiss()
  }
  return (
    <DedicatedView style={{flex:1}} onPress={handlePress}>
      <View style={styles.container}>
        <AppBar start={2} end={3} onPress={() => navigation.goBack()} />
        <ProgressBar progress={66.6}/>
        <Text style={styles.title}>{Strings.yourMobileNum} </Text>
        <Text style={styles.subTitle}>{Strings.useAsAccNum} </Text>
        <View style={styles.countryCodePhnRow}>
          <View style={styles.countryCol}>
            <Text style={styles.countryHeading}>{Strings.country}</Text>
            <View style={styles.countryInsideRow}>
              <CountryCodeDropdownPicker
                selected={selected}
                setSelected={(code) => {
                  setSelected(code);
                  setCountry({ callingCode: code });
                }}
                setCountryDetails={setCountry}
                phone={phone}
                setPhone={setPhone}
                countryCodeContainerStyles={styles.countryContainer}
                countryCodeTextStyles={styles.countryText}
                dropdownStyles={styles.dropDownContainer}
                searchStyles={styles.searchBar}
                phoneStyles={styles.phoneInputField}
              />
            </View>
          </View>
          {/* <CustomTextInput
          placeholder="Phone Number"
          keyboardType="phone-pad"
          value={phoneNumber}
          onChangeText={setPhoneNumber}
          style={[styles.inputStyle, { marginTop: rhp(1.5) }]}
        /> */}
        </View>
        <View style={styles.flex} />
        <Text style={styles.agreementText}>{Strings.agreementMsg}</Text>
        <GradientButton
          buttonText={Strings.submit}
          style={styles.btnStyle(isPhoneNumberFilled)}
          onPress={() => {
            if (isPhoneNumberFilled) {
              navigate(ScreenNames.OtpValidScreen, {
                phone,
                countryCode: country.callingCode || selected,
              });
            }
          }}
        />
      </View>
    </DedicatedView>
  );
};

export default PhoneInputScreen;
