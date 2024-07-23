import { workOrderSelector, myWorkOrderSelector } from '../workOrderSelector';
import { RootState } from '../../../../store/rootReducer';

// Mock RootState
const mockRootState: RootState = {
  // Provide a mock implementation for the slice of state used by the selectors
  workOrder: {
    workOrders: ['Work Order 1', 'Work Order 2'],
    myWorkOrders: ['My Work Order 1', 'My Work Order 2']
  },
  // Other slices of state...
};

describe('Selectors', () => {
  it('workOrderSelector returns the correct value', () => {
    // Call the selector function with the mock state
    const result = workOrderSelector(mockRootState);
    
    // Assert that the selector returns the expected value
    expect(result).toEqual(['Work Order 1', 'Work Order 2']);
  });
  
  it('myWorkOrderSelector returns the correct value', () => {
    // Call the selector function with the mock state
    const result = myWorkOrderSelector(mockRootState);
    
    // Assert that the selector returns the expected value
    expect(result).toEqual(['My Work Order 1', 'My Work Order 2']);
  });
});
