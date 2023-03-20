export const SET_PLAYER_INFO = 'SET_PLAYER_INFO';

export const setPlayerInfo = (name, email) => ({
  type: SET_PLAYER_INFO,
  payload: {
    name,
    email,
  },
});

export const REQUEST_TOKEN = 'REQUEST_TOKEN';
export const requestToken = (token) => ({
  type: REQUEST_TOKEN,
  payload: token,
});
// funcao "fetchToken" que realiza a requisicao da api.
// funcao "fetchToken" realizado com auxilio do Sumo
export const fetchToken = () => async (dispatch) => {
  const url = 'https://opentdb.com/api_token.php?command=request';
  const response = await fetch(url);
  const token = await response.json();
  dispatch(requestToken(token));
  localStorage.setItem('token', token.token);
};
