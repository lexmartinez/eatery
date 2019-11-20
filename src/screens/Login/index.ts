import { connect } from 'react-redux';
import { doLogin } from '../../reducers/profile/actions'
import LoginView from './view';

const stateProp = ({ profile }: any) => {
    const { loginData: login = {}, loading = false, error = false, errorData = {} } = { ...profile };
    return { login, loading, error : { error, meta: errorData} }
}

const dispatchToProps = (dispatch: any) => ({
    doLogin: async (payload: any) => {
      dispatch(doLogin(payload));
    }
  });

export default connect(stateProp, dispatchToProps)(LoginView)
