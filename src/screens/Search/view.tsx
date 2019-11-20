import React from 'react';
import { View, ImageBackground, TouchableOpacity, Text, TextInput } from 'react-native';
import I18n from '../../config/i18n';
import styles from './style';
import { Actions } from 'react-native-router-flux';
import AsyncStorage from '@react-native-community/async-storage';
import Icon from 'react-native-vector-icons/Feather';
import { Colors, storageKeys } from '../../config/Constant';
import { checkPermission } from '../../config/Utilities';
import { Permissions } from '../../config/Constant';
import { openSettings } from 'react-native-permissions';
import Geolocation from '@react-native-community/geolocation';

const BACKGROUND_PATH = '../../assets/images/background.jpg';
export default class Search extends React.Component<SearchProps, SearchState> {

    constructor(props: SearchProps) {
        super(props);
        this.state = {
            city: ''
        };
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
        const { doSearch } = this.props;
        const { city } = this.state;
        !!doSearch && !!city && doSearch({ city }, Actions.results)
    }

    onLocate() {
        const { doSearch } = this.props;
        checkPermission(Permissions.LOCATION, () => {
            Geolocation.getCurrentPosition(info => !!doSearch && doSearch(info, Actions.results));
        }, openSettings);
    }

    render() {
        const { city } = this.state
        return (
            <View style={styles.main}>
                <ImageBackground style={styles.background} source={require(BACKGROUND_PATH)}>
                    <View style={styles.inputButton}>
                        <View style={styles.cityButton}>
                            <TextInput style={styles.cityText} placeholder={I18n.t('home.search')}
                                placeholderTextColor={Colors.secondary_grey} value={city}
                                onChangeText={(value) => { this.setState({ city: value })}}
                            />
                        </View>
                        <TouchableOpacity style={styles.searchButton} onPress={this.onSearch} disabled={!city}>
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