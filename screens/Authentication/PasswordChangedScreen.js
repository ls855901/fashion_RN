import React from 'react';
import {StyleSheet, Text, View, Dimensions} from 'react-native';
import Container from '../../components/Container';
import Button from '../../components/Button';
import Icon from 'react-native-vector-icons/Feather';
import {useSelector} from 'react-redux';
import CloseButton from '../../components/CloseButton';

const {height} = Dimensions.get('window');

const PasswordChangedScreen = ({navigation}) => {
  const theme = useSelector((state) => state.theme.theme);
  const {measurements, colors} = theme;
  const SIZE = measurements.spacing.xl * 2;
  const dynamicCheckStyles = {
    width: SIZE,
    height: SIZE,
    borderRadius: SIZE / 2,
    backgroundColor: colors.primaryLight,
  };

  return (
    <Container
      headerDrop="right"
      footer={
        <View style={styles.footer}>
          <CloseButton onPress={() => navigation.navigate('Login')} />
        </View>
      }>
      <View style={styles.container}>
        <View
          style={[
            styles.bodyContainer,
            {
              padding: measurements.spacing.xl,
            },
          ]}>
          <View style={[styles.check, dynamicCheckStyles]}>
            <Icon name="check" size={SIZE * 0.35} color={colors.primary} />
          </View>
          <Text
            style={[
              theme.textVariants.title1,
              {fontSize: 0.04 * height, marginBottom: measurements.spacing.l},
            ]}>
            Your password was successfully changed
          </Text>
          <Text
            style={[
              theme.textVariants.body,
              {
                marginBottom: measurements.spacing.l,
              },
            ]}>
            Close the window to Login again
          </Text>
          <View
            style={[
              styles.LogInButton,
              {
                marginTop: measurements.spacing.m,
              },
            ]}>
            <Button
              variant="primary"
              onPress={() => navigation.navigate('Login')}
              label="Reset Password"
            />
          </View>
        </View>
      </View>
    </Container>
  );
};

export default PasswordChangedScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bodyContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  check: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  remeberMeAndForgotPasswordContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  LogInButton: {
    alignItems: 'center',
  },
  footer: {
    alignItems: 'center',
  },
});
