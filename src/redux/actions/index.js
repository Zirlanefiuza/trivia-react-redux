export const SET_PLAYER_INFO = 'SET_PLAYER_INFO';
export const REQUEST_TOKEN = 'REQUEST_TOKEN';
export const UPDATE_SCORE = 'UPDATE_SCORE';
export const REQUEST_TRIVIA = 'REQUEST_TRIVIA';
export const REQUEST_TRIVIA_SUCCESS = 'REQUEST_TRIVIA_SUCCESS';

export const setPlayerInfo = (name, email) => ({
  type: SET_PLAYER_INFO,
  payload: {
    name,
    email,
  },
});

export const requestToken = (token) => ({
  type: REQUEST_TOKEN,
  payload: token,
});
// action para score

export const updateScore = (newScore) => ({
  type: UPDATE_SCORE,
  payload: newScore,
});

// funcao "fetchToken" que realiza a requisicao da api.
// funcao "fetchToken" realizado com auxilio do Sumo
export const fetchToken = () => async () => {
  const url = 'https://opentdb.com/api_token.php?command=request';
  const response = await fetch(url);
  const token = await response.json();
  return token.token;
};

// fetch game
// export const requestTrivia = async () => {
//   const returnedByFetch = await fetchTrivia();
//   console.log(returnedByFetch);
//   return {
//     type: REQUEST_TRIVIA,
//     payload: returnedByFetch,
//   };
// };

// Funções requestTrivia, requestTriviaSuccess, fetchQuestions e getTriviaQuestions -- Pedro
// const requestTrivia = () => ({
//   type: REQUEST_TRIVIA,
// });

const requestTriviaSuccess = (questions) => ({
  type: REQUEST_TRIVIA_SUCCESS,
  payload: questions,
});

export const fetchTrivia = async () => {
  const tokenEndPoint = localStorage.getItem('token');
  const URL = `https://opentdb.com/api.php?amount=5&token=${tokenEndPoint}`;
  const response = await fetch(URL);
  const data = await response.json();
  return data;
};

export const fetchQuestions = async (dispatch) => {
  // dispatch(requestTrivia());
  const getQuestions = await fetchTrivia();
  await dispatch(requestTriviaSuccess(getQuestions));
};

export const getTriviaQuestions = () => fetchQuestions;
