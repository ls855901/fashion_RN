import React from 'react';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import OnboardingScreen from '../screens/Authentication/OnboardingScreen';
import WelcomeScreen from '../screens/Authentication/WelcomeScreen';
import LoginScreen from '../screens/Authentication/LoginScreen';
import SignUpScreen from '../screens/Authentication/SignUpScreen';
import ForgetPasswordScreen from '../screens/Authentication/ForgetPasswordScreen';
import {StatusBar} from 'react-native';
import PasswordChangedScreen from '../screens/Authentication/PasswordChangedScreen';

const Stack = createStackNavigator();

const AuthenticationStack = () => {
  return (
    <Stack.Navigator
      // initialRouteName="PasswordChanged"
      headerMode="none"
      screenOptions={{
        gestureEnabled: true,
        gestureDirection: 'horizontal',
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}>
      <Stack.Screen name="Onboarding" component={OnboardingScreen} />
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
      <Stack.Screen name="ForgotPassword" component={ForgetPasswordScreen} />
      <Stack.Screen name="PasswordChanged" component={PasswordChangedScreen} />
    </Stack.Navigator>
  );
};

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" />
      <AuthenticationStack />
    </NavigationContainer>
  );
};

export default AppNavigator;
