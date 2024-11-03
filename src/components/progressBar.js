import React, {useEffect, useRef} from 'react';
import {View, StyleSheet, Animated} from 'react-native';
import {rhp} from '../constants/dimensions';

const ProgressBar = ({progress, style}) => {
  const animatedWidth = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(animatedWidth, {
      toValue: progress,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  }, [progress, animatedWidth]);

  return (
    <View style={styles.barBackground}>
      <Animated.View
        style={[
          styles.barFront,
          styles.barProgress(animatedWidth, progress),
          style,
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  barBackground: {
    marginTop: rhp(12),
    height: rhp(4),
    backgroundColor: '#EFEFEF',
    borderRadius: 8,
  },
  barFront: {
    height: rhp(4),
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
    backgroundColor: '#4681AA',
  },
  barProgress: (animatedWidth, progress) => ({
    width: animatedWidth.interpolate({
      inputRange: [0, 100],
      outputRange: ['0%', '100%'],
    }),
    borderTopRightRadius: progress === 100 ? 8 : 0,
    borderBottomRightRadius: progress === 100 ? 8 : 0,
  }),
});

export default ProgressBar;
