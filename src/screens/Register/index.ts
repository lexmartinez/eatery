import { connect } from 'react-redux';
import { doRegister } from '../../reducers/profile/actions'
import RegisterView from './view';

const stateProp = ({ profile }: any) => {
    const { loginData: register = {}, loading = false, error = false, errorData = {} } = { ...profile };
    return { register, loading, error : { error, meta: errorData } }
}

const dispatchToProps = (dispatch: any) => ({
    doRegister: async (payload: any) => {
      dispatch(doRegister(payload));
    }
  });

export default connect(stateProp, dispatchToProps)(RegisterView)
