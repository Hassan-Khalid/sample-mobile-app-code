// selectors.ts
import { createSelector } from 'reselect';
import { RootState } from '../../../store/rootReducer';

// Select the WorkOrder state from the root state
const selectWorkState = (state: RootState) => state.workOrder;

// Create a selector to get the work Order
export const workOrderSelector = createSelector(
  selectWorkState,
  (workOrder) => workOrder.workOrders
);

export const myWorkOrderSelector = createSelector(
  selectWorkState,
  (workOrder) => workOrder.myWorkOrders
)
