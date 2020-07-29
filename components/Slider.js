import React from 'react';
import {StyleSheet, Text, Dimensions, View} from 'react-native';
import OnboardingConfig from '../config/screens/Onboarding';

const {width} = Dimensions.get('window');

const TITLE_CONTAINER_HEIGHT = 100;

const Slider = ({title, right, headerStyle}) => {
  const transform = [
    {
      translateY: (OnboardingConfig.SLIDER_HEIGHT - TITLE_CONTAINER_HEIGHT) / 2,
    },
    {
      translateX: right
        ? width / 2 - TITLE_CONTAINER_HEIGHT / 2
        : -width / 2 + TITLE_CONTAINER_HEIGHT / 2,
    },
    {rotate: right ? '-90deg' : '90deg'},
  ];

  return (
    <View style={styles.main}>
      <View style={[styles.titleContainer, {transform}]}>
        <Text style={headerStyle}>{title}</Text>
      </View>
    </View>
  );
};

export default Slider;

const styles = StyleSheet.create({
  main: {
    width,
  },

  titleContainer: {
    height: TITLE_CONTAINER_HEIGHT,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
