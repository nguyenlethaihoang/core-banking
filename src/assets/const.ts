import {scaleSize} from '@core/utils';
import {Dimensions} from 'react-native';
const {width: WindowWidth, height: WindowHeight} = Dimensions.get('window');

export const BASE_URL = 'https://api.github.com';
export const STORE_KEY = {
    TOKEN: 'token',
    REFRESH_TOKEN: 'refreshToken',
    USER_ID: 'userId',
};

export const COLORS = {
    white_1: '#F5F9FD',
    white_2: '#FCFDFF',
    white_3: '#E9F0F7',

    black_1: '#193566',
    black_2: '#1D325E',

    gray_1: '#EBF3FA', // background
    gray_2: '#B6BAC1',
    gray_3: '#E9E9E9',
    gray_4: '#6D7FA0',

    dark_gray_1: '#8A9BBD',
    dark_gray_2: '#8F9BB2',

    light_blue_1: '#B4D1FC',
    light_blue_2: '#AED2F7',

    dark_blue_1: '#677A9C',
    dark_blue_2: '#334C78',
    error_1: '#FF4906',
};

export const SIZES = {
    // global sizes
    base: 8,
    font: 14,
    radius: 12,
    padding: 24,
    padding2: 36,

    // font sizes
    largeTitle: scaleSize(50),
    h1: scaleSize(30),
    h2: scaleSize(22),
    h3: scaleSize(16),
    h4: scaleSize(14),
    body1: scaleSize(30),
    body2: scaleSize(20),
    body3: scaleSize(16),
    body4: scaleSize(14),

    // app dimensions
    WindowWidth,
    WindowHeight,
};

export const FONTS = {
    largeTitle: {fontFamily: 'Roboto-Regular', fontSize: SIZES.largeTitle, lineHeight: 55},
    h1: {fontFamily: 'Roboto-Black', fontSize: SIZES.h1, lineHeight: 36},
    h2: {fontFamily: 'Roboto-Bold', fontSize: SIZES.h2, lineHeight: 30},
    h3: {fontFamily: 'Roboto-Bold', fontSize: SIZES.h3, lineHeight: 22},
    h4: {fontFamily: 'Roboto-Bold', fontSize: SIZES.h4, lineHeight: 22},
    body1: {fontFamily: 'Roboto-Regular', fontSize: SIZES.body1, lineHeight: 36},
    body2: {fontFamily: 'Roboto-Regular', fontSize: SIZES.body2, lineHeight: 30},
    body3: {fontFamily: 'Roboto-Regular', fontSize: SIZES.body3, lineHeight: 22},
    body4: {fontFamily: 'Roboto-Regular', fontSize: SIZES.body4, lineHeight: 22},
};
