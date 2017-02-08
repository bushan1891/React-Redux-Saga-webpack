import { createSelector } from 'reselect';
const selectGlobal = () => (state) => {state};

const selectAuthUser = () => createSelector(
  selectGlobal(),
  (globalState) => globalState.get('auth')
);

export {
  selectGlobal,
  selectAuthUser,
};