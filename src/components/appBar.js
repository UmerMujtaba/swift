import { View, Text, StyleSheet, TouchableOpacity, Image, Platform } from 'react-native';
import React from 'react';
import { rfs, rhp, rwp, wp } from '../constants/dimensions';
import { images } from '../assets/images';
import { colors } from '../constants/colors';

const AppBar = ({ start, end, onPress }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress} style={styles.iconContainer}>
        <Image source={images.leftArrow} style={styles.img} />
      </TouchableOpacity>
      <Text style={styles.stepsText}>{`Step ${start}/${end}`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: rhp(10),
    alignItems: 'center',
    paddingHorizontal: rwp(5),
    marginTop: Platform.OS === 'ios' ? rhp(15) : rhp(15),
    ...Platform.select({
      web: {
        justifyContent: 'flex-start',
        paddingHorizontal: 0,
      },
    }),
  },
  iconContainer: {
    alignSelf: 'flex-start',
  },
  img: {
    resizeMode: 'contain',
    height: Platform.OS === 'web' ? wp(1.5) : rhp(24),
    width: Platform.OS === 'web' ? wp(1.5) : rhp(24),
    marginTop: Platform.OS === 'web' ? rhp(0) : rhp(0),
  },
  stepsText: {
    color: colors.grey,
    fontFamily: 'BasisGrotesque-Regular',
    fontSize: 13,
    fontWeight: '500',
    marginLeft: 'auto',
  },
});

export default AppBar;
