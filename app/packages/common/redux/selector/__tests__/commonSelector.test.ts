import { loadingSelector, OfflineModeSelector, OfflineDataSelector, landingNavigationSelector } from '../commonSelector';
import { RootState } from '../../../../store/rootReducer';

// Mock RootState
const mockRootState: RootState = {
  common: {
    loading: true,
    isOffline: true,
    offlineData: ['data1', 'data2'],
    shouldPreventLandingNavigation: false
  },
};

describe('Selectors', () => {
  it('loadingSelector returns the correct value', () => {
    // Call the selector function with the mock state
    const result = loadingSelector(mockRootState);
    
    // Assert that the selector returns the expected value
    expect(result).toBe(true);
  });
  
  it('OfflineModeSelector returns the correct value', () => {
    // Call the selector function with the mock state
    const result = OfflineModeSelector(mockRootState);
    
    // Assert that the selector returns the expected value
    expect(result).toBe(true);
  });
  
  it('OfflineDataSelector returns the correct value', () => {
    // Call the selector function with the mock state
    const result = OfflineDataSelector(mockRootState);
    
    // Assert that the selector returns the expected value
    expect(result).toEqual(['data1', 'data2']);
  });
  
  it('landingNavigationSelector returns the correct value', () => {
    // Call the selector function with the mock state
    const result = landingNavigationSelector(mockRootState);
    
    // Assert that the selector returns the expected value
    expect(result).toBe(false);
  });
});
