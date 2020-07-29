import Fonts from '../config/Fonts';
import {Dimensions} from 'react-native';

const {height} = Dimensions.get('window');

const defaultColorsKey = 'light';

//Add differnet Colors Schemes here
const colors = {
  light: {
    primary: '#2CB9B0',
    primaryLight: '#E7F9F7',
    secondary: '#0C0D34',
    hero: 'white',
    body: 'rgba(12, 13, 52, 0.7)',
    grey: '#F4F0EF',
    danger: '#FF0058',
  },
};

const measurements = {
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  borderRadii: {
    s: 4,
    m: 10,
    l: 25,
    xl: 75,
  },
};

const textVariants = {
  hero: {
    fontFamily: Fonts.bold,
    fontSize: 0.1 * height,
    textAlign: 'center',
    fontWeight: 'bold',

    color: colors[defaultColorsKey].hero,
  },
  title1: {
    marginTop: 0.03 * height,
    fontFamily: Fonts.semiBold,
    fontSize: 0.03 * height,
    color: colors[defaultColorsKey].secondary,
    lineHeight: 0.05 * height,
    marginBottom: 0.01 * height,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  title2: {
    marginTop: 0.035 * height,
    fontFamily: Fonts.semiBold,
    fontSize: 0.035 * height,
    color: colors[defaultColorsKey].title,
    lineHeight: 0.055 * height,
    marginBottom: 0.015 * height,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  body: {
    fontFamily: Fonts.regular,
    fontSize: 0.02 * height,
    color: colors[defaultColorsKey].body,
    lineHeight: 0.03 * height,
    marginBottom: 0.07 * height,
    textAlign: 'center',
  },
  button: {
    fontSize: 0.019 * height,
    fontFamily: Fonts.regular,
    textAlign: 'center',
  },
};

export const themes = {
  light: {
    colors: colors[defaultColorsKey],
    measurements,
    textVariants,
  },
  //   dark: {
  //     colors: colors.dark,
  //     measurements,
  //     textVariants,
  //   },
};
