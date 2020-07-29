import React, {useRef} from 'react';
import {StyleSheet, Image, View, Dimensions} from 'react-native';
import Slider from '../../components/Slider';
import SubSlide from '../../components/SubSlide';
import Dot from '../../components/Dot';
import config from '../../config/screens/Onboarding';
import Animated, {
  multiply,
  divide,
  interpolate,
  Extrapolate,
} from 'react-native-reanimated';
import {interpolateColor, useScrollHandler} from 'react-native-redash';
import {useSelector} from 'react-redux';

const {slides} = config;
const {width} = Dimensions.get('window');

const OnboardingScreen = ({navigation}) => {
  const theme = useSelector((state) => state.theme.theme);
  const scroll = useRef();
  const {scrollHandler, x} = useScrollHandler();
  const backgroundColor = interpolateColor(x, {
    inputRange: slides.map((_, index) => index * width),
    outputRange: slides.map(({color}) => color),
  });

  const onPressHandler = (index) => {
    console.log('press');

    scroll.current
      ?.getNode()
      .scrollTo({x: width * (index + 1), animated: true});
  };

  return (
    <View style={styles.main}>
      <Animated.View
        style={[
          styles.slider,
          {
            backgroundColor,
            borderBottomRightRadius: theme.measurements.borderRadii.xl,
          },
        ]}>
        {slides.map(({image}, index) => {
          const opacity = interpolate(x, {
            inputRange: [
              (index - 0.5) * width,
              index * width,
              (index + 0.5) * width,
            ],
            outputRange: [0, 1, 0],
            extrapolate: Extrapolate.CLAMP,
          });
          return (
            <Animated.View
              style={[
                styles.imageContainer,
                {
                  opacity,
                  borderBottomRightRadius: theme.measurements.borderRadii.xl,
                },
              ]}
              key={index}>
              <Image
                source={image}
                style={styles.image}
                resizeMode={'contain'}
              />
            </Animated.View>
          );
        })}

        <Animated.ScrollView
          ref={scroll}
          horizontal
          snapToInterval={width}
          decelerationRate="fast"
          showsHorizontalScrollIndicator={false}
          bounces={false}
          scrollEventThrottle={1}
          {...scrollHandler}>
          {slides.map(({title, image}, index) => (
            <Slider
              key={index}
              right={!!(index % 2)}
              headerStyle={theme.textVariants.hero}
              {...{title, image, index, x}}
            />
          ))}
        </Animated.ScrollView>
      </Animated.View>
      <View style={styles.footerContainer}>
        <Animated.View
          style={[
            styles.footerOverlay,
            {
              backgroundColor,
            },
          ]}
        />
        <View
          style={[
            styles.footerContent,
            {
              borderTopLeftRadius: theme.measurements.borderRadii.xl,
            },
          ]}>
          <View
            style={[
              styles.pagination,
              {
                height: theme.measurements.borderRadii.xl,
              },
            ]}>
            {slides.map((_, index) => (
              <Dot key={index} currentIndex={divide(x, width)} {...{index}} />
            ))}
          </View>
          <Animated.View
            style={[
              styles.footerContentMain,
              {
                transform: [{translateX: multiply(x, -1)}],
              },
            ]}>
            {config.slides.map(({subTitle, description}, index) => {
              const last = index === slides.length - 1;
              return (
                <SubSlide
                  onPress={() => {
                    if (last) {
                      navigation.navigate('Welcome');
                    } else {
                      onPressHandler(index);
                    }
                  }}
                  key={index}
                  {...{subTitle, description, x, last, theme}}
                />
              );
            })}
          </Animated.View>
        </View>
      </View>
    </View>
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'white',
  },
  slider: {
    height: config.SLIDER_HEIGHT,
  },
  footerContainer: {
    flex: 1,
  },
  imageContainer: {
    ...StyleSheet.absoluteFillObject,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },

  footerOverlay: {
    ...StyleSheet.absoluteFillObject,
  },
  footerContent: {
    flex: 1,
    backgroundColor: 'white',
  },
  footerContentMain: {
    flexDirection: 'row',
    width: width * slides.length,
  },
  pagination: {
    ...StyleSheet.absoluteFillObject,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
