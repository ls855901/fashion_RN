import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import SocialLogin from './SocialLogin';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import {useSelector} from 'react-redux';

const Footer = ({onPress, title, action}) => {
  const theme = useSelector((state) => state.theme.theme);
  return (
    <View style={styles.footerContainer}>
      <SocialLogin />
      <TouchableWithoutFeedback {...{onPress}}>
        <View style={styles.footerContainer}>
          <View
            style={[
              styles.signUpTextContainer,
              {
                marginBottom: theme.measurements.spacing.m,
              },
            ]}>
            <Text style={[theme.textVariants.button, {color: 'white'}]}>
              {`${title} `}
            </Text>
            <Text
              style={[
                theme.textVariants.button,
                {
                  marginLeft: theme.measurements.borderRadii.s,
                  color: theme.colors.primary,
                },
              ]}>
              {action}
            </Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};
export default Footer;

const styles = StyleSheet.create({
  footerContainer: {alignItems: 'center'},
  signUpTextContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
