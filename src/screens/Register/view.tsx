import React from 'react';
import { View, TouchableOpacity, Text, BackHandler, ActivityIndicator } from 'react-native';
import TextInput from '../../components/TextInput';
import Button from '../../components/Button';
import I18n from '../../config/i18n';
import { isEmail } from '../../config/Utilities';
import styles from './style';
import { Actions } from 'react-native-router-flux';
import AsyncStorage from '@react-native-community/async-storage';
import { Colors, storageKeys } from '../../config/Constant';

export default class Register extends React.Component<RegisterProps, RegisterState> {

    constructor(props: RegisterProps) {
        super(props);
        this.state = {
            name: '',
            email: '',
            password: '',
            rePassword: '',
            registerError: false
        };
        this.onRegister = this.onRegister.bind(this);
    }

    static async getDerivedStateFromProps(props: RegisterProps) {
        const { register = {}, error = {} } = props;
        const { error: isError = false, meta = {} } = { ...error };
        const { uid = null } = register;
        const { message = '' } = { ...meta };
        const userId = await AsyncStorage.getItem(storageKeys.USER_ID);
        if (isError) {
            if (`${message}`.includes('auth/')) {
                return { registerError: true };
            } else {
                Actions.error();
            }
        } else if (!!uid && !!userId) {
            Actions.pop();
            return { registerError: false };
        }
        return null;
    }

    onRegister() { 
        const { doRegister } = this.props;
        const { email, password, name } = this.state;
        this.setState({ registerError: false });
        !!doRegister && doRegister({ email, password, name })
    };

    render() {
        const { email, password, name, rePassword, registerError } = this.state;
        const { loading = false } = this.props;
        const disabled = () => !email || !password || !name || !rePassword ||
            !isEmail(email) || loading || password !== rePassword;
        return (
            <View style={styles.main}>
                <Text style={styles.title}>{I18n.t('profile.titleRegister')}</Text>
                <Text style={styles.subTitle}>{I18n.t('profile.textRegister')}</Text>
                <View style={styles.inputContainer}>
                    <View style={styles.inputLine}>
                        <TextInput value={name} placeholder={I18n.t('profile.name')}
                            onChange={(value: any) => this.setState({ name: value })}/>
                    </View>
                    <View style={styles.inputLine}>
                        <TextInput value={email} placeholder={I18n.t('profile.email')}
                            onChange={(value: any) => this.setState({ email: value })}/>
                    </View>
                    <View style={styles.inputLine}>
                        <TextInput value={password} placeholder={I18n.t('profile.password')} password={true}
                            onChange={(value: any) => this.setState({ password: value })}/>
                    </View>
                    <View style={styles.inputLine}>
                        <TextInput value={rePassword} placeholder={I18n.t('profile.rePassword')} password={true}
                            onChange={(value: any) => this.setState({ rePassword: value })}/>
                    </View>
                </View>
                {!!loading && <ActivityIndicator size={'large'} color={Colors.primary_green} />}
                <View style={styles.buttonLine}>
                    <Button text={I18n.t('profile.register')} onPress={this.onRegister} fullWidth={true} disabled={disabled()}/>
                </View>
            </View>
        )
    }
};