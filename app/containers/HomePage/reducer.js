import { fromJS } from 'immutable';

const initialState = fromJS({
  email: '',
  isLoading: false,
  isSuccess: false,
  token: '',
  isFailure: false,
});

function homePageReducer(state = initialState, action) {
  switch (action.type) {
    case 'RESET':
      return initialState;
    case 'UPDATE_EMAIL':
      return state.merge({
        email: action.email,
      });
    case 'REQUEST':
      return state.merge({
        isLoading: true,
        isSuccess: false,
        token: '',
        isFailure: false,
      });
    case 'RESPONSE_SUCCESS':
      return state.merge({
        email: '',
        isLoading: false,
        isSuccess: true,
        token: action.token,
        isFailure: false,
      });
    case 'RESPONSE_FAILURE':
      return state.merge({
        ...state,
        isLoading: false,
        isSuccess: false,
        token: '',
        isFailure: true,
      });
    default:
      return state;
  }
}

export default homePageReducer;
