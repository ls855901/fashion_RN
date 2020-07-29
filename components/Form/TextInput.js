import React, {forwardRef} from 'react';
import {StyleSheet, TextInput as RNTextInput, View} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const iconSize = 16;

const TextInput = forwardRef(({icon, touched, error, theme, ...props}, ref) => {
  const {colors, measurements} = theme;
  const SIZE = measurements.borderRadii.m * 2;
  const color = !touched ? colors.body : error ? colors.danger : colors.primary;

  return (
    <View
      style={[
        styles.container,
        {borderColor: color, borderRadius: measurements.spacing.s},
      ]}>
      <View style={{padding: measurements.spacing.s}}>
        <Icon name={icon} {...{color}} size={iconSize} />
      </View>
      <View style={{width: '80%'}}>
        <RNTextInput
          {...{ref}}
          underlineColorAndroid="transparent"
          placeholderTextColor={color}
          {...props}
        />
      </View>
      {touched && (
        <View
          style={[
            styles.validityIcon,
            {
              height: SIZE,
              width: SIZE,
              borderRadius: measurements.borderRadii.l,
              backgroundColor: !error ? colors.primaryColor : colors.danger,
            },
          ]}>
          <Icon
            name={!error ? 'check' : 'x'}
            size={iconSize}
            color="white"
            style={{textAlign: 'center'}}
          />
        </View>
      )}
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 48,
    borderWidth: StyleSheet.hairlineWidth,
  },
  validityIcon: {
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
});

export default TextInput;
