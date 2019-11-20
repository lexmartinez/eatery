import { profileKeys } from './keys';
import service from '../../services/profile';

const loading = () => ({ type: profileKeys.LOADING });
const profileOk = (payload: any) => ({ type: profileKeys.PROFILE_OK, payload });
const profileFail = () => ({ type: profileKeys.PROFILE_FAIL });
const loginOk = (payload: any) => ({ type: profileKeys.LOGIN_OK, payload });
const loginFail = (payload: any) => ({ type: profileKeys.LOGIN_FAIL, payload });
const logout = () => ({ type: profileKeys.LOGOUT });
const registerOk = (payload: any) => ({ type: profileKeys.REGISTER_OK, payload });
const registerFail = (payload: any) => ({ type: profileKeys.REGISTER_FAIL, payload });

export function getProfile(userId: string) {
  return (dispatch: any) => {
    dispatch(loading());
    return service
      .getProfile(userId)
      .then((response: any) => response.json())
      .then((response: any) => dispatch(profileOk(response)))
      .catch((err: any) => dispatch(profileFail()));
  };
}

export function doLogin(payload: any) {
  return (dispatch: any) => {
    dispatch(loading());
    return service
      .doLogin(payload)
      .then((response: any) => {
        const { user = null } = { ...response };
        if (!!user) {
          dispatch(loginOk(user));
        } else {
          dispatch(loginFail({ message: `${response}`}));
        }
      })
      .catch((err: any) => dispatch(loginFail(err)));
  };
}

export function doLogout() {
  return (dispatch: any) => {
    return service.doLogout()
    .then(() => { dispatch(logout()) })
    .catch((err: any) => dispatch(profileFail()));
  }
}

export function doRegister(payload: any) {
  return (dispatch: any) => {
    dispatch(loading());
    return service
      .doRegister(payload)
      .then((response: any) => {
        const { user = null } = { ...response };
        if (!!user) {
          dispatch(registerOk(user));
        } else {
          dispatch(registerFail({ message: `${response}`}));
        }
      })
      .catch((err: any) => dispatch(registerFail(err)));
  };
}