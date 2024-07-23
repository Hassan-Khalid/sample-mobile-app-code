import { RootState } from '../../../store/rootReducer';
import { createSelector } from 'reselect';



// Select the user state from the root state
const selectCommonState = (state: RootState) => state.common;

export const loadingSelector = createSelector(
  selectCommonState,
  (common) => common.loading
);

export const OfflineModeSelector = createSelector(
  selectCommonState,
  (common) => common.isOffline
);

export const OfflineDataSelector = createSelector(
  selectCommonState,
  (common) => common.offlineData
);

export const landingNavigationSelector = createSelector(
  selectCommonState,
  (common) => common.shouldPreventLandingNavigation
);
