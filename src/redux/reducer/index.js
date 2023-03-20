import { SET_PLAYER_INFO } from '../actions/index';

const initialState = {};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
  case SET_PLAYER_INFO:
    return {
      ...state,
      player: action.payload,
    };
  default:
    return state;
  }
};

export default rootReducer;
