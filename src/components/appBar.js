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
    height: rhp(54),
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: rwp(5),
    marginTop: Platform.OS === 'ios' ? rhp(15) : rhp(0),
    ...Platform.select({
      web: {
        justifyContent: 'flex-start',
        paddingHorizontal: 0,
      },
    }),
  },
  iconContainer: {
    alignSelf: 'flex-start',
    marginRight: rwp(5),
  },
  img: {
    resizeMode: 'contain',
    height: rhp(24),
    width: rwp(24),
    marginTop: rhp(15),
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
