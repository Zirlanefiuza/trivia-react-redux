import { SET_PLAYER_INFO, REQUEST_TOKEN, UPDATE_SCORE } from '../actions/index';

const initialState = {
  player: '',
  token: '',
  score: 0,
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
    // reducer para atualizar score
  case UPDATE_SCORE:
    return {
      ...state,
      score: state.score + action.payload,
    };
  default:
    return state;
  }
};

export default rootReducer;
