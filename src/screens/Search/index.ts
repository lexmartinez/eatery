import { connect } from 'react-redux';
import { doSearch } from '../../reducers/core/actions';
import SearchView from './view';

const stateProp = () => {
    return { }
}

const dispatchToProps = (dispatch: any) => ({
    doSearch: async (payload: any, callback: any) => {
      dispatch(doRegister(payload));
      callback();
    }
});

export default connect(stateProp, dispatchToProps)(SearchView)
