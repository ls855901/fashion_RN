import React from 'react';
import {StyleSheet, Image, View, Dimensions} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Assets from '../config/Assets';
import {KeyboardAwareScrollView} from '@codler/react-native-keyboard-aware-scroll-view';
import {useSelector} from 'react-redux';

const {width, height: wHeight} = Dimensions.get('window');
const aspectRatio = 625 / 1120;
const height = width * aspectRatio;

const Container = ({children, footer, headerDrop}) => {
  const insets = useSafeAreaInsets();
  const theme = useSelector((state) => state.theme.theme);
  const {colors, measurements} = theme;

  const borderBottomRadius =
    headerDrop === 'right'
      ? {borderBottomRightRadius: measurements.borderRadii.xl}
      : headerDrop === 'center'
      ? {}
      : {borderBottomLeftRadius: measurements.borderRadii.xl};

  const borderTopRadius =
    headerDrop === 'right'
      ? {borderTopRightRadius: 0}
      : headerDrop === 'center'
      ? {borderTopRadius: 0}
      : {borderTopLeftRadius: 0};

  return (
    <KeyboardAwareScrollView enableOnAndroid scrollEnabled={false}>
      <View
        style={[
          styles.container,
          {
            backgroundColor: colors.secondary,
          },
        ]}>
        <View style={styles.whiteBackground}>
          <View style={[styles.imageContainer, borderBottomRadius]}>
            <Image
              style={{
                width,
                height,
                ...borderBottomRadius,
              }}
              source={Assets.pattern}
            />
          </View>
        </View>
        <View style={styles.imageOverlayContainer}>
          <Image style={styles.image} source={Assets.pattern} />
          <View
            style={[
              styles.imageOverlay,
              {
                borderRadius: measurements.borderRadii.xl,
                ...borderTopRadius,
              },
            ]}>
            {children}
          </View>
        </View>

        {/* Footer */}
        <View
          style={[
            styles.footerContainer,
            {
              paddingBottom: insets.bottom,
              paddingTop: measurements.spacing.m,
            },
          ]}>
          {footer}
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default Container;

const styles = StyleSheet.create({
  container: {
    height: wHeight,
  },
  whiteBackground: {backgroundColor: 'white'},
  imageContainer: {
    overflow: 'hidden',
    height: height * 0.61,
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    width,
    height,
    top: -height * 0.61,
  },
  imageOverlayContainer: {flex: 1, overflow: 'hidden'},
  imageOverlay: {
    flex: 1,
    backgroundColor: 'white',
  },
});
