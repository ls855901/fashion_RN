import React from 'react';
import Animated, {interpolate, Extrapolate} from 'react-native-reanimated';
import {StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';

const Dot = ({index, currentIndex}) => {
  const theme = useSelector((state) => state.theme.theme);
  const opacity = interpolate(currentIndex, {
    inputRange: [index - 1, index, index + 1],
    outputRange: [0.5, 1, 0.5],
    extrapolate: Extrapolate.CLAMP,
  });

  const scale = interpolate(currentIndex, {
    inputRange: [index - 1, index, index + 1],
    outputRange: [1, 1.25, 1],
    extrapolate: Extrapolate.CLAMP,
  });

  return (
    <Animated.View
      style={[
        styles.dot,
        {
          backgroundColor: theme.colors.primary,
          opacity,
          transform: [{scale}],
        },
      ]}
    />
  );
};

const styles = StyleSheet.create({
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    margin: 4,
  },
});

export default Dot;
