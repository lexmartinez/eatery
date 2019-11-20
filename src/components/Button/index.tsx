import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { Colors } from '../../config/Constant';
import styles from './style';

const Button = (props: ButtonProps) => {
    const { text = '', onPress = () => {}, style = {}, uppercase = true, fullWidth = false, disabled = false } = { ...props };
    const containerStyles = { ...( !!fullWidth? styles.fullContainer : styles.container), ...style.container };
    if (!!disabled) {
        containerStyles['backgroundColor'] = Colors.secondary_green;
    }
    const textStyles = { ...styles.text, ...style.text };
    return (
        <TouchableOpacity style={containerStyles} onPress={onPress} disabled={disabled}>
            <Text style={textStyles}>{ !!uppercase ? `${text}`.toUpperCase() : `${text}`}</Text>
        </TouchableOpacity>
    )
};

export default Button;