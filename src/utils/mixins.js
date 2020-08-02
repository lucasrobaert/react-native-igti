import { Dimensions, PixelRatio} from 'react-native';

const WINDOW_WIDTH = Dimensions.get('window').width;
const guidelineBaseWidht = 375;


export const scaleSize = (size) => (WINDOW_WIDTH/guidelineBaseWidht) * size;

export const scaleFont = (size) => size * PixelRatio.getFontScale();