import auth from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-community/async-storage';
import { storageKeys } from '../config/Constant';

const PROFILE_API = (userId: string) => `https://randomuser.me/api/?id=${userId}&nat=us,es&inc=name,cell,email,picture,login`;

export default {
    getProfile: (userId: string) => fetch(PROFILE_API(userId), { method: 'GET' }),
    doLogin: async (payload: any) => {
        try {
            const { email = '', password = '' } = { ...payload };
            const credentials = await auth().signInWithEmailAndPassword(email, password);
            const { user = {} } = { ...credentials };
            const { uid = '' } = user as any;
            await AsyncStorage.setItem(storageKeys.USER_ID, uid); 
            return credentials;
        } catch (error) {
            return error;
        }

    },
    doRegister: async (payload: any) => {
        try {
            const { email = '', password = '' } = { ...payload };
            const credentials = await auth().createUserWithEmailAndPassword(email, password);
            const { user = {} } = { ...credentials };
            const { uid = '' } = user as any;
            await AsyncStorage.setItem(storageKeys.USER_ID, uid); 
            return credentials;
        } catch (error) {
            return error;
        }

    },
    doLogout: async () => {
        return await AsyncStorage.removeItem(storageKeys.USER_ID);
    }
}