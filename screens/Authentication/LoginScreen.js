import React, {useRef} from 'react';
import {StyleSheet, Text, View, Dimensions} from 'react-native';
import Container from '../../components/Container';
import Button from '../../components/Button';
import TextInput from '../../components/Form/TextInput';
import Checkbox from '../../components/Form/Checkbox';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import {useFormik} from 'formik';
import Footer from '../../components/Footer';
import * as Yup from 'yup';
import {useSelector} from 'react-redux';

const LoginSchema = Yup.object().shape({
  password: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
});

const {height} = Dimensions.get('window');

const LoginScreen = ({navigation}) => {
  const theme = useSelector((state) => state.theme.theme);
  const {colors, measurements} = theme;
  const password = useRef(null);
  const {
    handleChange,
    handleBlur,
    handleSubmit,
    values,
    errors,
    touched,
    setFieldValue,
    // eslint-disable-next-line react-hooks/rules-of-hooks
  } = useFormik({
    validationSchema: LoginSchema,
    initialValues: {email: '', password: '', remember: true},
    onSubmit: (values) => console.log(values),
  });

  const footer = (
    <Footer
      title="Don't have an account?"
      action="Sign Up here"
      onPress={() => navigation.navigate('SignUp')}
    />
  );

  return (
    <Container {...{footer}}>
      <View
        style={{
          padding: measurements.spacing.xl,
        }}>
        <Text
          style={[
            theme.textVariants.title1,
            {fontSize: 0.04 * height, marginBottom: measurements.spacing.l},
          ]}>
          Welcome back
        </Text>
        <Text
          style={[
            theme.textVariants.body,
            {
              marginBottom: measurements.spacing.l,
            },
          ]}>
          Use your credentials below and login to your account
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
              returnKeyType="next"
              returnKeyLabel="next"
              onSubmitEditing={() => password.current.focus()}
              {...{theme}}
            />
          </View>
          <View
            style={{
              marginBottom: measurements.spacing.m,
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
              onSubmitEditing={handleSubmit}
              returnKeyType="go"
              returnKeyLabel="go"
              {...{theme}}
            />
          </View>

          <View style={styles.remeberMeAndForgotPasswordContainer}>
            <Checkbox
              label="Remember me"
              checked={values.remember}
              onChange={() => setFieldValue('remember', !values.remember)}
            />
            <TouchableWithoutFeedback
              onPress={() => navigation.navigate('ForgotPassword')}>
              <Text style={[{color: colors.primary}]}>Forgot password</Text>
            </TouchableWithoutFeedback>
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
              label="Log into your account"
            />
          </View>
        </View>
      </View>
    </Container>
  );
};

export default LoginScreen;

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
