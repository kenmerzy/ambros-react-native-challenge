/* eslint-disable prettier/prettier */
import { Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export const responsive = (number: number = 0) => {
    return (number / 375) * width;
};
