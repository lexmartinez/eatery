import React from 'react';
import { TextInput } from 'react-native';
import { Colors } from '../../config/Constant';
import styles from './style';

const InputText = (props: TextInputProps) => {
    const { value = '', onChange = () => {}, style = {}, placeholder = '', password = false } = { ...props };
    const inputStyle = { ...styles.input, ...style };
    return (<TextInput style={inputStyle} onChangeText={onChange} placeholder={placeholder}
                placeholderTextColor={Colors.secondary_grey} secureTextEntry={password}>{value}</TextInput>)
};

export default InputText;