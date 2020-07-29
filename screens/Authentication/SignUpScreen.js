import React, {useRef} from 'react';
import {StyleSheet, Text, View, Dimensions} from 'react-native';
import Container from '../../components/Container';
import Button from '../../components/Button';
import TextInput from '../../components/Form/TextInput';
import {useFormik} from 'formik';
import Footer from '../../components/Footer';
import * as Yup from 'yup';
import {useSelector} from 'react-redux';

const SignUpSchema = Yup.object().shape({
  password: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long')
    .required('Required'),
  passwordConfirmation: Yup.string()
    .equals([Yup.ref('password')], "Passwords don't match")
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
});

const {height} = Dimensions.get('window');

const SignUpScreen = ({navigation}) => {
  const theme = useSelector((state) => state.theme.theme);
  const {handleChange, handleBlur, handleSubmit, errors, touched} = useFormik({
    validationSchema: SignUpSchema,
    initialValues: {email: '', password: '', passwordConfirmation: ''},
    onSubmit: (values) => console.log(values),
  });

  const password = useRef();
  const passwordConfirmation = useRef();

  const footer = (
    <Footer
      title="Already have an account?"
      action="Login here"
      onPress={() => navigation.navigate('Login')}
    />
  );

  return (
    <Container headerDrop="right" {...{footer}}>
      <View
        style={{
          padding: theme.measurements.spacing.xl,
        }}>
        <Text
          style={[
            theme.textVariants.title1,
            {fontSize: 0.04 * height},
            {
              marginBottom: theme.measurements.spacing.l,
            },
          ]}>
          Create Account
        </Text>
        <Text
          style={[
            theme.textVariants.body,
            {
              marginBottom: theme.measurements.spacing.l,
            },
          ]}>
          Let's us know what your name, email and your password
        </Text>
        <View>
          <View
            style={{
              marginBottom: theme.measurements.spacing.m,
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
              returnKeyType="next"
              returnKeyLabel="next"
              onSubmitEditing={() => password.current.focus()}
              {...{theme}}
            />
          </View>
          <View
            style={{
              marginBottom: theme.measurements.spacing.m,
            }}>
            <TextInput
              ref={password}
              icon="lock"
              placeholder="Enter your Password"
              secureTextEntry
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              error={errors.password}
              touched={touched.password}
              autoCompleteType="password"
              autoCapitalize="none"
              onSubmitEditing={() => passwordConfirmation.current.focus()}
              returnKeyType="next"
              returnKeyLabel="next"
              {...{theme}}
            />
          </View>
          <View
            style={{
              marginBottom: theme.measurements.spacing.m,
            }}>
            <TextInput
              ref={passwordConfirmation}
              icon="lock"
              placeholder="Confirm your Password"
              secureTextEntry
              onChangeText={handleChange('passwordConfirmation')}
              onBlur={handleBlur('passwordConfirmation')}
              error={errors.passwordConfirmation}
              touched={touched.passwordConfirmation}
              autoCompleteType="password"
              autoCapitalize="none"
              onSubmitEditing={handleSubmit}
              returnKeyType="go"
              returnKeyLabel="go"
              {...{theme}}
            />
          </View>
          <View
            style={[
              styles.LogInButton,
              {
                marginTop: theme.measurements.spacing.m,
              },
            ]}>
            <Button
              variant="primary"
              onPress={handleSubmit}
              label="Create your account"
            />
          </View>
        </View>
      </View>
    </Container>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  remeberMeAndForgotPasswordContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  LogInButton: {
    alignItems: 'center',
  },
});
