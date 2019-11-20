import { connect } from 'react-redux';
import { getProfile, doLogout } from '../../reducers/profile/actions'
import { storageKeys } from '../../config/Constant';
import AsyncStorage from '@react-native-community/async-storage';
import ProfileView from './view';

const stateProp = ({ profile }: any) => {
    const { user = {}, loading = false, error = false } = { ...profile }
    return { user, loading, error }
}

const dispatchToProps = (dispatch: any) => ({
    getProfile: async () => {
      const userId = await AsyncStorage.getItem(storageKeys.USER_ID);
      !!userId && dispatch(getProfile(userId));
    },
    doLogout: async (callback: any) => {
      await AsyncStorage.removeItem(storageKeys.USER_ID);
      doLogout();
      callback();
    }
  });

export default connect(stateProp, dispatchToProps)(ProfileView)
