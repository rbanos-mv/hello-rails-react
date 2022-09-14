import apiGetGreeting from '../../modules/api';

const GET = 'greetingtore/Book/GET';

export const getGreeting = () => async (dispatch) => {
  const payload = await apiGetGreeting();
  dispatch({ type: GET, payload });
};

export default function reducer(state = '', action) {
  switch (action.type) {
    case GET:
      return action.payload;

    default:
      return state;
  }
}
