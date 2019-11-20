import { connect } from 'react-redux';
// import { doRegister } from '../../reducers/profile/actions'
import SearchView from './view';

const stateProp = ({ core }: any) => {
    const { } = { ...core };
    return { }
}

const dispatchToProps = (dispatch: any) => ({
    doSearch: async (payload: any) => {
      // dispatch(doRegister(payload));
    }
  });

export default connect(stateProp, dispatchToProps)(SearchView)
