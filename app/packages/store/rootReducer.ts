// rootReducer.ts
import { combineReducers } from 'redux';
import { CommonReducer, UserReducer, WorkOrderReducer } from 'common/redux/slice';

const rootReducer = combineReducers({
  user: UserReducer,
  workOrder: WorkOrderReducer,
  common: CommonReducer,
  // Add more reducers here if needed
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
