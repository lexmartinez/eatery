import React from 'react';
import { Colors } from '../../config/Constant';
import Icon from 'react-native-vector-icons/Feather';
import { Platform } from '../../config/Utilities';

const TabIcon = (props: TabIconProps) => {
    const { focused = 'false', size = Platform.select({ iosx: 28 , ios: 24, android: 24 }), name = '' } = { ...props }
    const color = focused ? Colors.primary_green : Colors.secondary_green
    return (<Icon name={name} size={size} color={color} />)
};

export default TabIcon;