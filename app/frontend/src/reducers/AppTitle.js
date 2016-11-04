import constants from '../constants';

const initialState = {
  title: '',
  text: '',
  isLoading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case constants.TITLE_IS_LOADIND:
      return Object.assign({}, state, {
        isLoading: true
      });

    case constants.TITLE_LOADED:
      return Object.assign({}, state, {
        title: action.title,
        text: action.text,
        isLoading: false
      });

    default:
      return state;
  }
}
