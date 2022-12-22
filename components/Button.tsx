/* eslint-disable prettier/prettier */
import React from 'react';
import { TouchableOpacity, Text, ViewStyle, StyleProp } from 'react-native';
interface Props {
    title: string;
    onPress: () => void;
    style?: StyleProp<ViewStyle>;
}
export const Button = (props: Props) => {
    const { title = '', onPress = () => { }, style = {} } = props;
    return (
        <TouchableOpacity onPress={onPress} style={style}>
            <Text>{title}</Text>
        </TouchableOpacity>
    );
};
