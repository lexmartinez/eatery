import React from 'react';
import { ScrollView, View, Text, Image, TouchableOpacity, StatusBar } from 'react-native';
import { Code } from 'react-content-loader/native';
import { Actions } from 'react-native-router-flux';
import I18n from '../../config/i18n';
import TextInput from '../../components/TextInput';
import { labelize } from '../../config/Utilities';
import styles from './style';

export default class Profile extends React.Component<ProfileProps> {

    constructor(props: ProfileProps) {
        super(props);
        this.onLogOut = this.onLogOut.bind(this)
    }

    componentDidMount() {
        const { getProfile } = this.props
        !!getProfile && getProfile()
    }

    static getDerivedStateFromProps(props: ProfileProps) {
        const { error, getProfile } = props
        if (!!error && Actions.currentScene === '_profile') {
            Actions.error({ onAction: getProfile, button: I18n.t('error.retry') });
        }
        return null;
    }

    async onLogOut() {
        const { doLogout } = this.props
        try {
            !!doLogout && doLogout(() => { Actions.reset('root') })
        } catch (e) {
            Actions.error();
        }
    }
    
    render() {
        const { user = {} } = { ...this.props }
        const { uuid = null, name = '', lastName = '', email = '', phone = '', avatar = '' } = { ...user }
        return (!!uuid) ? (
            <ScrollView style={styles.main} showsVerticalScrollIndicator={false}>
                <View style={styles.avatarContainer}>
                    <Image source={{ uri: avatar }} style={styles.avatar} resizeMode={'contain'} />
                    <View style={styles.avatarInfo}>
                        <Text style={styles.avatarTitle}>{I18n.t('profile.hi', { name })}</Text>
                        <Text style={styles.avatarSubtitle}>{I18n.t('profile.sub')}</Text>
                    </View>
                </View>
                <View style={styles.infoContainer}>
                    <View style={styles.infoLine}>
                        <Text style={styles.infoLabel}>{labelize(I18n.t('profile.name'))}</Text>
                        <TextInput value={`${name} ${lastName}`}/>
                    </View>
                    <View style={styles.infoLine}>
                        <Text style={styles.infoLabel}>{labelize(I18n.t('profile.email'))}</Text>
                        <TextInput value={email}/>
                    </View>
                    <View style={styles.infoLine}>
                        <Text style={styles.infoLabel}>{labelize(I18n.t('profile.phone'))}</Text>
                        <TextInput value={phone}/>
                    </View>
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button} onPress={this.onLogOut}>
                        <Text style={styles.buttonText}>{I18n.t('profile.logout').toUpperCase()}</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        ) : (
            <View style={styles.mainEmpty}>
                {new Array(5).fill('').map((e, index) => (<Code width={350} key={`${e}${index}`} />))}
            </View>
        );
    }
}