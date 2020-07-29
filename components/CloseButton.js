import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {useSelector} from 'react-redux';
import {RectButton} from 'react-native-gesture-handler';

const CloseButton = ({onPress}) => {
  const theme = useSelector((state) => state.theme.theme);
  const SIZE = theme.measurements.spacing.l * 2;
  return (
    <RectButton {...{onPress}}>
      <View
        style={[
          styles.container,
          {
            width: SIZE,
            height: SIZE,
            borderRadius: SIZE / 2,
            marginBottom: theme.measurements.spacing.m,
          },
        ]}>
        <Text style={{color: theme.colors.secondary}}>
          <Icon name="x" size={SIZE * 0.7} color="black" />
        </Text>
      </View>
    </RectButton>
  );
};

export default CloseButton;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  
  },
});
