import { profileKeys } from './keys';

const init = {
    user: { },
    error: false,
    loading: false,
    loginData: {},
    errorData: {}
};

const reducer: any = {
    [profileKeys.LOADING]: (state: any) => {
        return { ...state, loading: true };
    },
    [profileKeys.LOGOUT]: (state: any) => {
        return { ...state, loginData: {}, errorData: {} };
    },
    [profileKeys.PROFILE_OK]: (state: any, payload: any) => {
        const { results = [] } = { ...payload };
        const [ user = {} ] = [ ...results ];
        const { name: nameObj = {}, cell: phone = '' , email = '', picture = {}, login = {} } = { ...user };
        const { first: name = '', last: lastName = '' } = { ...nameObj };
        const { large: avatar = '' } = { ...picture };
        const { uuid = '' } = { ...login };
        return { ...state, user: { uuid, name, lastName, phone, email, avatar }, loading: false, error: false };
    },
    [profileKeys.PROFILE_FAIL]: (state: any) => {
        return { ...state, error: true, loading: false };
    },
    [profileKeys.LOGIN_OK]: (state: any, loginData: any) => {
        return { ...state, error: false, loading: false, loginData, errorData: {} };
    },
    [profileKeys.LOGIN_FAIL]: (state: any, errorData: any) => {
        return { ...state, error: true, loading: false, errorData, loginData: {} };
    }
}
reducer[profileKeys.REGISTER_OK] = reducer[profileKeys.LOGIN_OK];
reducer[profileKeys.REGISTER_FAIL] = reducer[profileKeys.LOGIN_FAIL];

export default (state = init, action: any) => {
    const { type = '', payload = {} } = { ...action };
    const handler = reducer[type];
    return !!handler ? handler(state, payload) : state;
}