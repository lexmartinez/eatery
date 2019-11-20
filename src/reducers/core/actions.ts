import { coreKeys } from './keys';
import service from '../../services/core';

const loading = () => ({ type: coreKeys.LOADING });
const searchOk = (payload: any) => ({ type: coreKeys.SEARCH_OK, payload });
const searchFail = () => ({ type: coreKeys.SEARCH_FAIL });


export function getResults(payload: any) {
  return (dispatch: any) => {
    dispatch(loading());
    const { city = '' } = { ...payload };
    return service
      .getResults(city)
      .then((response: any) => response.json())
      .then((response: any) => dispatch(searchOk(response)))
      .catch((err: any) => dispatch(searchFail()));
  };
}
