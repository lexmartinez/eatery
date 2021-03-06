import React from 'react';
import { ScrollView, View, Text, Image } from 'react-native';
import { Code } from 'react-content-loader/native';
import { Actions } from 'react-native-router-flux';
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
        const { loading, results } = { ...this.props };
        return !loading ? (
            <ScrollView style={styles.main} showsVerticalScrollIndicator={false}>
                {(results || []).map((restaurant) => {
                    const { name = '', address = '', image_url = ''} = { ...restaurant };
                    return (
                        <View style={styles.card}>
                            <Text style={styles.title}>{name}</Text>
                            <Text style={styles.address}>{address}</Text>
                        </View>
                    )
                })}
            </ScrollView>
        ) : (
            <View style={styles.mainEmpty}>
                {new Array(5).fill('').map((e, index) => (<Code width={350} key={`${e}${index}`} />))}
            </View>
        );
    }
}