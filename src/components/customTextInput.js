import React, {forwardRef} from 'react';
import {
  TextInput,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import {rfs, rhp} from '../constants/dimensions';
import {colors} from '../constants/colors';

const CustomTextInput = forwardRef(
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
      eyeSource,
      eye,
      blurOnSubmit,
      autoCorrect,
      onSubmitEditing,
      eyePress,
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
        {eye && (
          <TouchableOpacity onPress={eyePress}>
            <Image
              style={[styles.icon, suffixIconStyle]}
              resizeMode="contain"
              source={eyeSource}
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
    marginTop: rhp(24),
    marginBottom: rhp(20),
    borderBottomWidth: 1,
    borderBottomColor: colors.disabled,
    fontSize: rfs(14),
    color: 'black',
    height: rhp(48),
  },
  icon: {
    opacity: 0.8,
  },
  inputStyle: {flex: 1, color: 'black', fontSize: rfs(16), lineHeight: 20},
});

export default CustomTextInput;
