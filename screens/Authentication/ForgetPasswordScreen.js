import React, {useRef} from 'react';
import {StyleSheet, Text, View, Dimensions} from 'react-native';
import Container from '../../components/Container';
import Button from '../../components/Button';
import TextInput from '../../components/Form/TextInput';
import {useFormik} from 'formik';
import Footer from '../../components/Footer';
import * as Yup from 'yup';
import {useSelector} from 'react-redux';

const ForgotPasswordSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
});

const {height} = Dimensions.get('window');

const ForgotPasswordScreen = ({navigation}) => {
  const theme = useSelector((state) => state.theme.theme);
  const {measurements} = theme;
  const {
    handleChange,
    handleBlur,
    handleSubmit,
    errors,
    touched,
    // eslint-disable-next-line react-hooks/rules-of-hooks
  } = useFormik({
    validationSchema: ForgotPasswordSchema,
    initialValues: {email: ''},
    onSubmit: (values) => navigation.push('PasswordChanged'),
  });

  const footer = (
    <Footer
      title="Don't have an account?"
      action="Sign Up here!"
      onPress={() => navigation.navigate('SignUp')}
    />
  );

  return (
    <Container headerDrop="center" {...{footer}}>
      <View
        style={[
          styles.container,
          {
            padding: measurements.spacing.xl,
          },
        ]}>
        <Text
          style={[
            theme.textVariants.title1,
            {fontSize: 0.04 * height, marginBottom: measurements.spacing.l},
          ]}>
          Forgot password?
        </Text>
        <Text
          style={[
            theme.textVariants.body,
            {
              marginBottom: measurements.spacing.l,
            },
          ]}>
          Enter the email address associated with your account
        </Text>
        <View>
          <View
            style={{
              marginBottom: measurements.spacing.m,
            }}>
            <TextInput
              icon="mail"
              placeholder="Enter your Email"
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              error={errors.email}
              touched={touched.email}
              autoCompleteType="email"
              autoCapitalize="none"
              returnKeyType="go"
              returnKeyLabel="go"
              onSubmitEditing={handleSubmit}
              {...{theme}}
            />
          </View>
          <View
            style={[
              styles.LogInButton,
              {
                marginTop: measurements.spacing.m,
              },
            ]}>
            <Button
              variant="primary"
              onPress={handleSubmit}
              label="Reset Password"
            />
          </View>
        </View>
      </View>
    </Container>
  );
};

export default ForgotPasswordScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  remeberMeAndForgotPasswordContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  LogInButton: {
    alignItems: 'center',
  },
});
