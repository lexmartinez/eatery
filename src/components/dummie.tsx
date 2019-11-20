import React from 'react';
import { Text, View } from 'react-native';

export default (props) => {
    const { title = 'no-title' } = { ...props }
    return <View style={{ flex: 1, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center' }}>
        <Text>{title}</Text>
    </View>
}