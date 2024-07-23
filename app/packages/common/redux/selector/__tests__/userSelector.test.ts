import { currentUserSelector, bottomTabSelector } from '../userSelector';
import { RootState } from '../../../../store/rootReducer';

// Mock RootState
const mockRootState: RootState = {
  // Provide a mock implementation for the slice of state used by the selectors
  user: {
    user: {
      username: 'testuser',
      email: 'test@example.com'
    },
    bottomTab: 'home'
  },
  // Other slices of state...
};

describe('Selectors', () => {
  it('currentUserSelector returns the correct value', () => {
    // Call the selector function with the mock state
    const result = currentUserSelector(mockRootState);
    
    // Assert that the selector returns the expected value
    expect(result).toEqual({
      username: 'testuser',
      email: 'test@example.com'
    });
  });
  
  it('bottomTabSelector returns the correct value', () => {
    // Call the selector function with the mock state
    const result = bottomTabSelector(mockRootState);
    
    // Assert that the selector returns the expected value
    expect(result).toBe('home');
  });
});
