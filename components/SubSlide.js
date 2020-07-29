import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import OnboardingConfig from '../config/screens/Onboarding';
import Button from '../components/Button';
import {useSelector} from 'react-redux';

const SubSlide = ({subTitle, description, last, onPress}) => {
  const theme = useSelector((state) => state.theme.theme);
  const {textVariants} = theme;
  return (
    <View style={styles.container}>
      <Text style={textVariants.title1}>{subTitle}</Text>
      <Text style={textVariants.body}>{description}</Text>
      <Button
        onPress={onPress}
        label={last ? "Let's get Started" : 'Next'}
        variant={last ? 'primary' : 'default'}
      />
    </View>
  );
};

export default SubSlide;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: OnboardingConfig.SUBSLIDE_PADDING,
  },
});
