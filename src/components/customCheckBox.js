import { View, Text, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import React, { useState } from 'react';
import { rfs, rhp, rwp, wp } from '../constants/dimensions';
import { Strings } from '../constants/strings';
import { colors } from '../constants/colors';

const CustomCheckbox = ({ onPress, style }) => {
  const [isChecked, setIsChecked] = useState(null);

  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
    if (onPress) {
      onPress(!isChecked);
    }
  };

  return (
    <View style={[styles.checkboxContainer, style]}>
      <TouchableOpacity onPress={toggleCheckbox} activeOpacity={0.4}>
        <View style={[styles.checkbox, isChecked && styles.checked]}>
          {isChecked && <Text style={styles.tick}>✓</Text>}
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={toggleCheckbox} activeOpacity={0.4} style={styles.textContainer}>
        <Text style={styles.label}>
          {Strings.termsTextStart}
          <Text style={[styles.label, styles.termsText]}>
            {Strings.termsConditions}
          </Text>
          {Strings.and}
          <Text style={[styles.label, styles.termsText]}>
            {Strings.PrivacyPolicy}
          </Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: rhp(5),
  },
  checkbox: {
    width: rwp(20),
    height: rhp(20),
    borderWidth: rwp(1),
    borderRadius: 4,
    backgroundColor: 'white',
    borderColor: colors.disabled,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: rwp(10),
    ...Platform.select({
      web: {
        width: rwp(5),
        borderWidth:1,
        height: rhp(20),
        marginRight: rwp(5),
      },
    }),
  },
  checked: {
    backgroundColor: colors.primary,
    borderColor: colors.disabled,
  },
  tick: {
    color: 'black',
    fontSize: rfs(12),
    textAlignVertical: 'center',
  },
  label: {
    fontWeight: '500',
    color: 'black',
    fontSize: Platform.OS === 'ios' ? rfs(14) : rfs(15),
    fontFamily: 'BasisGrotesque-Regular',
    textAlign: 'auto',
    marginRight: Platform.OS === 'ios' ? rwp(21) : rwp(30),
    ...Platform.select({
      web: {
        marginRight: rwp(0),
      },
    }),
  },
  textContainer: {
    flex: 1,
  },
  termsText: {
    color: colors.primary,
    fontFamily: 'BasisGrotesque-Medium',
    ...Platform.select({
      web: {
        textAlign: 'justify',
      },
    }),
  },

});

export default CustomCheckbox;
