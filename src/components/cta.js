import React from 'react';
import {Platform, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {rhp, rwp} from '../constants/dimensions';
import { colors } from '../constants/colors';

export const GradientButton = ({onPress, buttonText, style}) => {
  return (
    <TouchableOpacity
      style={[styles.gradientBtn, style]}
      onPress={onPress}
      activeOpacity={0.7}>
      <Text style={styles.btnGrdntTxt}>{buttonText}</Text>
    </TouchableOpacity>
  );
};

export const PlainButton = ({onPress, buttonText, style}) => {
  return (
    <TouchableOpacity
      style={[styles.plainBtn, style]}
      onPress={onPress}
      activeOpacity={0.4}>
      <Text style={styles.btnPlnTxt}>{buttonText}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  gradientBtn: {
    width: rwp(204),
    height: Platform.OS==='ios' ? rhp(53): rhp(55),
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    backgroundColor: colors.primary,
  },
  btnGrdntTxt: {
    color: 'white',
    fontSize: 15,
    fontWeight: '500',
    textAlign: 'center',
   fontFamily:'BasisGrotesque-Regular'
  },
  plainBtn: {
    width: rwp(119),
    height: Platform.OS==='ios' ? rhp(53): rhp(55),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    borderColor: colors.primary,
    borderWidth: 1,
  },
  btnPlnTxt: {
    color: colors.primary,
    fontSize: 15,
    fontWeight: '500',
    fontFamily:'BasisGrotesque-Regular'
  },
});
