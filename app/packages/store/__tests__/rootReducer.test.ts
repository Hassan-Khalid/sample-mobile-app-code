import rootReducer from '../rootReducer';
import { createStore } from 'redux';
import { initialState as userState} from 'common/redux/slice/userSlice'
import { initialState as commonState} from 'common/redux/slice/commonSlice'
import { initialState as workOrderState} from 'common/redux/slice/workOrderListSlice'


describe('rootReducer', () => {
  test('should return initial state', () => {
    const store = createStore(rootReducer);
    const expectedInitialState = {
      user:userState,
      workOrder:workOrderState ,
      common: commonState,
      // Add initial states of other reducers if needed
    };
    expect(store.getState()).toEqual(expectedInitialState);
  });
  
});
