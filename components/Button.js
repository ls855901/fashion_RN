import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';
import {useSelector} from 'react-redux';

const Button = ({children, label, variant, onPress}) => {
  const theme = useSelector((state) => state.theme.theme);
  const {colors, textVariants} = theme;
  const backgroundColor =
    variant === 'primary'
      ? colors.primary
      : variant === 'transparent'
      ? 'transparent'
      : colors.grey;
  const color = variant === 'primary' ? 'white' : colors.secondary;
  return (
    <RectButton onPress={onPress} style={[styles.container, {backgroundColor}]}>
      {children ? (
        children
      ) : (
        <Text style={[textVariants.button, {color}]}>{label}</Text>
      )}
    </RectButton>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    borderRadius: 25,
    height: 50,
    width: 245,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
