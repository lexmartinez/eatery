import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { Colors } from '../../../config/Constant';
import Button from '../../Button';
import Icon from 'react-native-vector-icons/Feather';
import { Actions } from 'react-native-router-flux';
import styles from './style'

const BaseModal = (props: BaseModalProps) => {
    const { image = null, title = '', message = '', button = '', onAction = () => {}, style = {} } = { ...props };
    const modalStyles = { ...styles, ...style };
    const onPress = () => {
        onAction();
        Actions.pop();
    }
    return (
        <View style={modalStyles.main}>
            <TouchableOpacity onPress={Actions.pop} style={modalStyles.close}>
                <Icon name={'x'} size={40} color={Colors.primary_green} />
            </TouchableOpacity>
            <View style={modalStyles.imageContainer}>
                <Image source={image} style={modalStyles.image} resizeMode={'contain'} />
            </View>
            <View style={modalStyles.container}>
                <Text style={modalStyles.title}>{title}</Text>
                <Text style={modalStyles.text}>{message}</Text>
            </View>
            {!!button && <Button text={button} onPress={onPress}/>}
        </View>
    )
};

export default BaseModal;