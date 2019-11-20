import { coreKeys } from './keys';

const init = {
    results: [],
    error: false,
    loading: false
};

const reducer: any = {
    [coreKeys.LOADING]: (state: any) => {
        return { ...state, loading: true };
    },
    [coreKeys.SEARCH_OK]: (state: any, payload: any) => {
        const { results = [] } = { ...payload };
        return { ...state, results, loading: false, error: false };
    },
    [coreKeys.SEARCH_FAIL]: (state: any) => {
        return { ...state, error: true, loading: false };
    }
}

export default (state = init, action: any) => {
    const { type = '', payload = {} } = { ...action };
    const handler = reducer[type];
    return !!handler ? handler(state, payload) : state;
}