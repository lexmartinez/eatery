import React from 'react';
import { ScrollView, View } from 'react-native';
import { Code } from 'react-content-loader/native';
import { Actions } from 'react-native-router-flux';
import I18n from '../../config/i18n';
import TextInput from '../../components/TextInput';
import { labelize } from '../../config/Utilities';
import styles from './style';

export default class Results extends React.Component<ResultsProps> {

    constructor(props: ResultsProps) {
        super(props);
    }

    static getDerivedStateFromProps(props: ProfileProps) {
        const { error } = props
        if (!!error && Actions.currentScene === 'results') {
            Actions.error();
        }
        return null;
    }
    
    render() {
        const { loading } = { ...this.props };
        return !loading ? (
            <ScrollView style={styles.main} showsVerticalScrollIndicator={false}>
                
            </ScrollView>
        ) : (
            <View style={styles.mainEmpty}>
                {new Array(5).fill('').map((e, index) => (<Code width={350} key={`${e}${index}`} />))}
            </View>
        );
    }
}