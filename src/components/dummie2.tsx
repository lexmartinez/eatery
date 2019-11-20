import React from 'react';
import { Text, View } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { Actions } from 'react-native-router-flux';
import { storageKeys } from '../config/Constant';

export default class Dummie2 extends React.Component {
    constructor(props) {
        super(props);
    }

    static async getDerivedStateFromProps() {
        if (!['login', 'error'].includes(Actions.currentScene)) {
            try {
                const userId = await AsyncStorage.getItem(storageKeys.USER_ID);
                if (userId === null) { Actions.login();}
            } catch(e) {
                Actions.error();
            }
        }
    }

    render() {
        const { title = 'no-title' } = { ...this.props }
        return <View style={{ flex: 1, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center' }}>
            <Text>{title}</Text>
        </View>
    }
}