import { httpGet } from '../utils/fetch';
import constants   from '../constants';


export function loadTitle() {
  return {
    type: constants.TITLE_IS_LOADIND
  };
}

export function titleSuccesfulLoaded(json) {
  return {
    type: constants.TITLE_LOADED,
    title: json.attributes.title,
    text: json.attributes.text
  };
}

export function fetchTitle() {
  return (dispatch) => {
    dispatch(loadTitle());
    httpGet('/app')
    .then((json) => dispatch(titleSuccesfulLoaded(json)));
  };
}
