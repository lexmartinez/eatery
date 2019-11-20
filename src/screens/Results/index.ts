import { connect } from 'react-redux';
import ResultsView from './view';

const stateProp = ({ core }: any) => {
    const { results = [], loading = false, error = false } = { ...core }
    return { results, loading, error }
}


export default connect(stateProp)(ResultsView);
