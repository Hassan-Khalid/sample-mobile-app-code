/* istanbul ignore file */
// this is boilerplate to configure the store
import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import StorageFacade, { StorageKeys } from 'common/facade/StorageFacade';
import rootReducer, { RootState } from './rootReducer';

const preloadedState = JSON.parse(StorageFacade.storage.getString(StorageKeys.REDUX_STATE) || '{}');

const store = configureStore({
  reducer: rootReducer,
  preloadedState,
});

store.subscribe(() => {
  const state = store.getState();
  StorageFacade.storage.set(StorageKeys.REDUX_STATE, JSON.stringify(state));
});

export type AppDispatch = typeof store.dispatch;
export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;

export default store;
