// selectors.ts
import { createSelector } from 'reselect';
import { RootState } from '../../../store/rootReducer';

// Select the user state from the root state
const selectUserState = (state: RootState) => state.user;

// Create a selector to get the username
export const currentUserSelector = createSelector(
  selectUserState,
  (user) => user.user
);

export const bottomTabSelector = createSelector(
  selectUserState,
  (user) => user.bottomTab
)
