export const SET_PLAYER_INFO = 'SET_PLAYER_INFO';

export const setPlayerInfo = (name, email) => ({
  type: SET_PLAYER_INFO,
  payload: {
    name,
    email,
  },
});
