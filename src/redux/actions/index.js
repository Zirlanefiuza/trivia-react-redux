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
// action para score
export const UPDATE_SCORE = 'UPDATE_SCORE';

export const updateScore = (newScore) => ({
  type: UPDATE_SCORE,
  payload: newScore,
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

// fetch game
export const REQUEST_TRIVIA = 'REQUEST_TRIVIA';
export const requestTrivia = () => async () => {
  // const { history } = this.props;
  const returnedByFetch = await fetchTrivia();
  console.log(returnedByFetch)
  return {
    type: REQUEST_TRIVIA,
    payload: returnedByFetch,
  }
  // if (returnedByFetch.response_code === 0) {
  //   storage.removeItem('token')
  //   // return <Redirect to="/" />
  //   history.push('/')
  //   return {
  //     type: REQUEST_TRIVIA
  //   }
  // }
}

export const fetchTrivia = async () =>  {
  const tokenEndPoint = localStorage.getItem('token');
  const URL = `https://opentdb.com/api.php?amount=5&token=${tokenEndPoint}`;
  const response = await fetch(URL);
  const data = await response.json();
  return data
}