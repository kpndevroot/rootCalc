import {Dimensions} from 'react-native';

const {height, width} = Dimensions.get('window');

const guidelineBaseWidth = 350;
const guidelineBaseHeight = 680;
const screenSize = Math.sqrt(width * height) / 100;

const setHeight = (h: number) => (height / 100) * h;
const setWidth = (w: number) => (width / 100) * w;
const verticalScale = (size: number) => (height / guidelineBaseHeight) * size;
const scale = (size: number) => (width / guidelineBaseWidth) * size;
const moderateScale = (size: number, factor = 0.5) =>
  size + (scale(size) - size) * factor;

export default {setHeight, setWidth, verticalScale};
