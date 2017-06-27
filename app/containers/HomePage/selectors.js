import { createSelector } from 'reselect';

const selectHomePage = (state) => state.get('homePage');

const makeSelectEmail = () => createSelector(
  selectHomePage,
  (homePageState) => homePageState.get('email')
);

const makeSelectIsLoading = () => createSelector(
  selectHomePage,
  (homePageState) => homePageState.get('isLoading')
);

const makeSelectIsSuccess = () => createSelector(
  selectHomePage,
  (homePageState) => homePageState.get('isSuccess')
);

const makeSelectToken = () => createSelector(
  selectHomePage,
  (homePageState) => homePageState.get('token')
);

const makeSelectIsFailure = () => createSelector(
  selectHomePage,
  (homePageState) => homePageState.get('isFailure')
);

export {
  selectHomePage,
  makeSelectEmail,
  makeSelectIsLoading,
  makeSelectIsSuccess,
  makeSelectToken,
  makeSelectIsFailure,
};
