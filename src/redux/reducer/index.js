import { SET_PLAYER_INFO, REQUEST_TOKEN } from '../actions/index';

const initialState = {
  player: '',
  token: '',
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
  case SET_PLAYER_INFO:
    return {
      ...state,
      player: action.payload,
    };
  case REQUEST_TOKEN:
    return {
      ...state,
      token: action.payload,
    };
  default:
    return state;
  }
};

export default rootReducer;
