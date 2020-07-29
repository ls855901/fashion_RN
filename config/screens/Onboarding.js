import {Dimensions} from 'react-native';
import Assets from '../Assets';

const {height} = Dimensions.get('window');

export default {
  SLIDER_HEIGHT: 0.61 * height,
  SUBSLIDE_PADDING: 44,
  slides: [
    {
      title: 'Relaxed',
      subTitle: 'Find Your Outfits',
      description:
        "Confused about your outfit? Don't worry! Find the best outfit here!",
      color: '#BFEAF5',
      image: Assets.slides[0],
    },
    {
      title: 'Playful',
      subTitle: 'Hear it First, Wear it First',
      description:
        'Hating the clothes in your wardrobe? Explore hundreds of outfit ideas',
      color: '#BEECC4',
      image: Assets.slides[1],
    },
    {
      title: 'Excentric',
      subTitle: 'Your Style, Your Way',
      description:
        'Create your individual & unique style and look amazing everyday',
      color: '#FFE4D9',
      image: Assets.slides[2],
    },
    {
      title: 'Funky',
      subTitle: 'Look Good, Feel Good',
      description:
        'Discover the latest trends in fashion and expore your personality',
      color: '#FFDDDD',
      image: Assets.slides[3],
    },
  ],
};
