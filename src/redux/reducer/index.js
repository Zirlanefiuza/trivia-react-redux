import { SET_PLAYER_INFO, REQUEST_TOKEN, UPDATE_SCORE, REQUEST_TRIVIA } from '../actions/index';

const initialState = {
  player: {name: '', email: '',},
  token: '',
  score: 0,
  // trivia: {}
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
    // reducer trivia request
  case REQUEST_TRIVIA: 
    return {
      ...state,
      trivia: action.payload
    }
  default:
    return state;
  }
};

export default rootReducer;
