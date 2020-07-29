import React from 'react';
import {StyleSheet, Text, Image, View} from 'react-native';
import Button from '../../components/Button';
import welcomeConfig from '../../config/screens/Welcome';
import onboardingConfig from '../../config/screens/Onboarding';
import {useSelector} from 'react-redux';

const WelcomeScreen = ({navigation}) => {
  const theme = useSelector((state) => state.theme.theme);
  return (
    <View style={styles.main}>
      <View
        style={[
          styles.topContainer,
          {
            borderBottomRightRadius: theme.measurements.borderRadii.xl,
          },
        ]}>
        <Image
          source={welcomeConfig.image}
          style={styles.image}
          resizeMode={'contain'}
        />
      </View>
      <View
        style={[
          styles.bottomContainer,
          {
            borderTopLeftRadius: theme.measurements.borderRadii.xl,
          },
        ]}>
        <View style={styles.bottomUnderlay} />
        <View
          style={[
            styles.footerContainer,
            {
              borderTopLeftRadius: theme.measurements.borderRadii.xl,
            },
          ]}>
          <Text style={theme.textVariants.title2}>
            {welcomeConfig.subTitle}
          </Text>
          <Text style={[theme.textVariants.body, {marginBottom: 0}]}>
            {welcomeConfig.description}
          </Text>
          <Button
            variant="primary"
            label="Have an account? Login"
            onPress={() => navigation.navigate('Login')}
          />
          <Button label="Join us, it's Free" />
          <Button variant="transparent" label="Forgot password?" />
        </View>
      </View>
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'white',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  topContainer: {
    flex: 1,
    backgroundColor: welcomeConfig.color,
  },
  bottomContainer: {
    flex: 1,
  },
  bottomUnderlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: welcomeConfig.color,
  },
  footerContainer: {
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingHorizontal: onboardingConfig.SUBSLIDE_PADDING,
  },
});
