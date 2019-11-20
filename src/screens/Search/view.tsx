import React from 'react';
import { View, ImageBackground, TouchableOpacity, Text } from 'react-native';
import I18n from '../../config/i18n';
import styles from './style';
import { Actions } from 'react-native-router-flux';
import AsyncStorage from '@react-native-community/async-storage';
import Icon from 'react-native-vector-icons/Feather';
import { Colors, storageKeys } from '../../config/Constant';

const BACKGROUND_PATH = '../../assets/images/background.jpg';
export default class Search extends React.Component<SearchProps, SearchState> {

    constructor(props: SearchProps) {
        super(props);
        this.state = {};
        this.onSearch = this.onSearch.bind(this);
        this.onLocate = this.onLocate.bind(this);
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

    onSearch() { 

    }

    onLocate() {
        
    }

    render() {
        const { loading = false } = this.props;
        return (
            <View style={styles.main}>
                <ImageBackground style={styles.background} source={require(BACKGROUND_PATH)}>
                    <View style={styles.inputButton}>
                        <TouchableOpacity style={styles.cityButton}>
                            <Text style={styles.cityText}>{I18n.t('home.search')}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.searchButton} onPress={this.onSearch}>
                            <Icon name={'search'} size={30} color={Colors.primary_green} />
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={styles.nearButton} onPress={this.onLocate}>
                        <Icon name={'map-pin'} size={20} color={Colors.primary_white} />
                        <Text style={styles.nearText}>{I18n.t('home.nearby')}</Text>
                    </TouchableOpacity>
                </ImageBackground>
            </View>
        )
    }
};