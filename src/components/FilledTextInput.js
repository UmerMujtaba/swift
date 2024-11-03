import React, {forwardRef} from 'react';
import {
  TextInput,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import {rfs, rhp, rwp} from '../constants/dimensions';
import {colors} from '../constants/colors';

const FilledTextInput = forwardRef(
  (
    {
      placeholder,
      value,
      onChangeText,
      keyboardType,
      secureTextEntry,
      rightIcon,
      imageSource,
      suffixIconStyle,
      style,
      showSoftInputOnFocus,
      autoFocus,
      returnKeyType,
      copySource,
      copy,
      blurOnSubmit,
      autoCorrect,
      onSubmitEditing,
      copyPress,
      maxLength,
    },
    ref,
  ) => {
    return (
      <View style={[styles.container, style]}>
        {rightIcon && (
          <Image
            style={[{...suffixIconStyle}]}
            resizeMode="contain"
            source={imageSource}
          />
        )}
        <TextInput
          ref={ref}
          placeholder={placeholder}
          placeholderTextColor={colors.grey}
          onChangeText={onChangeText}
          value={value}
          keyboardType={keyboardType}
          secureTextEntry={secureTextEntry}
          style={styles.inputStyle}
          showSoftInputOnFocus={showSoftInputOnFocus}
          autoFocus={autoFocus}
          returnKeyType={returnKeyType}
          onSubmitEditing={onSubmitEditing}
          blurOnSubmit={blurOnSubmit}
          autoCorrect={autoCorrect}
          maxLength={maxLength}
        />
        {copy && (
          <TouchableOpacity onPress={copyPress} style={styles.roundedContainer}>
            <Image
              style={[styles.icon, suffixIconStyle]}
              resizeMode="contain"
              source={copySource}
            />
          </TouchableOpacity>
        )}
      </View>
    );
  },
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: rhp(20),
    backgroundColor: colors.bgColor,
    borderRadius: 8,
    fontSize: rfs(14),
    paddingHorizontal: rwp(16),
    color: 'black',
    height: rhp(48),
  },
  roundedContainer: {
    height: rhp(26),
    width: rwp(26),
    borderRadius: 15,
    backgroundColor: 'white',
    justifyContent: 'center',
    marginRight: rwp(1),
  },
  icon: {
    opacity: 0.8,
  },
  inputStyle: {flex: 1, color: 'black', fontSize: rfs(16), lineHeight: 16},
});

export default FilledTextInput;
