import { connect } from 'react-redux';
import { getResults } from '../../reducers/core/actions';
import SearchView from './view';

const stateProp = () => {
    return { }
}

const dispatchToProps = (dispatch: any) => ({
    doSearch: async (payload: any, callback: any) => {
      dispatch(getResults(payload));
      callback();
    }
});

export default connect(stateProp, dispatchToProps)(SearchView)
