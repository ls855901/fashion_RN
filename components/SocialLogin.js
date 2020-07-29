import React from 'react';
import {StyleSheet, Image, View} from 'react-native';
import Assets from '../config/Assets';
import {useSelector} from 'react-redux';

const SocialIcon = ({image, theme}) => {
  const SIZE = theme.measurements.borderRadii.l * 1.9;
  return (
    <View
      style={[
        styles.socialIconContainer,
        {
          width: SIZE,
          height: SIZE,
          borderRadius: theme.measurements.borderRadii.l,
          marginHorizontal: theme.measurements.borderRadii.s,
        },
      ]}>
      <Image
        source={image}
        resizeMode={'center'}
        style={{height: SIZE * 0.5, width: SIZE * 0.5}}
      />
    </View>
  );
};

const SocialLogin = () => {
  const theme = useSelector((state) => state.theme.theme);
  return (
    <View
      style={[
        styles.container,
        {
          marginBottom: theme.measurements.borderRadii.m,
        },
      ]}>
      <SocialIcon {...{theme}} image={Assets.icons.facebook} />
      <SocialIcon {...{theme}} image={Assets.icons.google} />
      <SocialIcon {...{theme}} image={Assets.icons.apple} />
    </View>
  );
};

export default SocialLogin;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  socialIconContainer: {
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
