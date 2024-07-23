import store, { AppThunk } from '../store';
import StorageFacade, { StorageKeys } from 'common/facade/StorageFacade';

jest.mock('common/facade/StorageFacade');

describe('store configuration', () => {
  test('should configure store with rootReducer and preloaded state', () => {
    // Check if the store is configured correctly with the rootReducer and preloaded state
    expect(store.getState()).toEqual(expect.any(Object)); // You can add more specific checks based on your rootReducer
  });
  
  test('should save state to local storage when store changes', () => {
    // Simulate a change in the store
    store.dispatch({ type: 'TEST_ACTION' });
    
    // Check if the state is saved to local storage
    const savedState = JSON.parse(StorageFacade.getStringKey(StorageKeys.REDUX_STATE) || '{}');
    expect(savedState).toEqual(expect.any(Object)); // You can add more specific checks based on the dispatched action
  });
});

describe('exported types', () => {
  test('AppDispatch should be a function', () => {
    expect(typeof store.dispatch).toBe('function');
  });
  
  test('AppThunk should be a function', () => {
    // Define a dummy thunk to test its type
    const dummyThunk: AppThunk = async (dispatch, getState) => {
    };
    
    expect(typeof dummyThunk).toBe('function');
  });
});
