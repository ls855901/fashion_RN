import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import {useSelector} from 'react-redux';

const Checkbox = ({label, onChange, checked}) => {
  const theme = useSelector((state) => state.theme.theme);
  const {colors, textVariants, measurements} = theme;
  return (
    <TouchableWithoutFeedback style={styles.button} onPress={onChange}>
      <View
        style={[
          styles.checkBoxIcon,
          // eslint-disable-next-line react-native/no-inline-styles
          {
            marginRight: measurements.borderRadii.m,
            backgroundColor: checked ? colors.primary : 'white',
            borderRadius: measurements.spacing.s,
            borderColor: colors.primary,
          },
        ]}>
        <Icon name="check" color="white" />
      </View>
      <Text style={textVariants.button}>{label}</Text>
    </TouchableWithoutFeedback>
  );
};

export default Checkbox;

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkBoxIcon: {
    height: 20,
    width: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
  },
});
