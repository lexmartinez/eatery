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

export default class Login extends React.Component<LoginProps, LoginState> {
    backHandler: any;

    constructor(props: LoginProps) {
        super(props);
        this.state = {
            email: '',
            password: '',
            loginError: false
        };
        this.onLogin = this.onLogin.bind(this);
    }

    componentDidMount() {
        this.backHandler = BackHandler.addEventListener('hardwareBackPress',() => Actions.currentScene === 'login');
    }

    componentWillUnmount() {
        this.backHandler.remove();
    }

    static async getDerivedStateFromProps(props: LoginProps) {
        const { login = {}, error = {} } = props;
        const { error: isError = false, meta = {} } = { ...error };
        const { uid = null } = login;
        const { message = '' } = { ...meta };
        const userId = await AsyncStorage.getItem(storageKeys.USER_ID);
        if (isError) {
            if (`${message}`.indexOf('auth/') !== -1) {
                return { loginError: true };
            } else {
                Actions.error();
            }
        } else if (!!uid && !!userId) {
            Actions.pop();
            return { loginError: false };
        }
        return null;
    }

    onLogin() { 
        const { doLogin } = this.props;
        const { email, password } = this.state;
        this.setState({ loginError: false });
        !!doLogin && doLogin({ email, password })
    };

    render() {
        const { email, password, loginError } = this.state;
        const { loading = false } = this.props;
        const disabled = () => !email || !password || !isEmail(email) || loading;
        return (
            <View style={styles.main}>
                <Text style={styles.title}>{I18n.t('profile.hiLogin')}</Text>
                <Text style={styles.subTitle}>{I18n.t('profile.textLogin')}</Text>
                <View style={styles.inputContainer}>
                    <View style={styles.inputLine}>
                        <TextInput value={email} placeholder={I18n.t('profile.email')}
                            onChange={(value: any) => this.setState({ email: value })}/>
                    </View>
                    <View style={styles.inputLine}>
                        <TextInput value={password} placeholder={I18n.t('profile.password')} password={true}
                            onChange={(value: any) => this.setState({ password: value })}/>
                    </View>
                    <View style={styles.forgotLine}>
                        <TouchableOpacity style={styles.forgot} onPress={Actions.demo}>
                            <Text style={styles.forgotText}>{I18n.t('profile.forgot')}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                {!!loginError && !loading &&
                    <Text style={styles.loginError}>{I18n.t('profile.loginError')}</Text>}
                {!!loading && <ActivityIndicator size={'large'} color={Colors.primary_green} />}
                <View style={styles.buttonLine}>
                    <Button text={I18n.t('profile.login')} onPress={this.onLogin} fullWidth={true} disabled={disabled()}/>
                </View>
                <View style={styles.registerLine}>
                    <Text style={styles.registerText}>{I18n.t('profile.registerText')}</Text>
                    <TouchableOpacity style={styles.register} onPress={Actions.register}>
                        <Text style={styles.registerButton}>{I18n.t('profile.signup')}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
};