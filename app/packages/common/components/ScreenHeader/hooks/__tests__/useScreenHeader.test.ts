import { renderHook, act } from '@testing-library/react-hooks';
import  useScreenHeader  from '../useScreenHeader'; // Adjust the import path based on your project structure

describe('useScreenHeader', () => {
  it('should initialize with default values', () => {
    const { result } = renderHook(() => useScreenHeader({ getSearchText: jest.fn() }));
    
    expect(result.current.searchInputValue).toBe('');
    expect(result.current.renderSearchBar).toBe(false);
  });
  
  it('should toggle search bar visibility', () => {
    const { result } = renderHook(() => useScreenHeader({ getSearchText: jest.fn() }));
    
    act(() => {
      result.current.toggleHandler();
    });
    
    expect(result.current.renderSearchBar).toBe(true);
    
    act(() => {
      result.current.toggleHandler();
    });
    
    expect(result.current.renderSearchBar).toBe(false);
  });
  
  it('should update search input value', () => {
    const { result } = renderHook(() => useScreenHeader({ getSearchText: jest.fn() }));
    
    act(() => {
      result.current.handleSearchTextChange('test input');
    });
    
    expect(result.current.searchInputValue).toBe('test input');
  });
  
  it('should clear search input value', () => {
    const { result } = renderHook(() => useScreenHeader({ getSearchText: jest.fn() }));
    
    act(() => {
      result.current.handleSearchTextChange('test input');
    });
    
    act(() => {
      result.current.handleClearText();
    });
    
    expect(result.current.searchInputValue).toBe('');
  });
  
  it('should set renderSearchBar to false when bottomTab changes', () => {
    const { result, rerender } = renderHook(() => useScreenHeader({ getSearchText: jest.fn() }));
    
    act(() => {
      result.current.toggleHandler();
    });
    
    expect(result.current.renderSearchBar).toBe(true);
    
    rerender();
    act(() => {
      result.current.toggleHandler();
    });
    
    expect(result.current.renderSearchBar).toBe(false);
  });
  
  // Additional test cases for other functionality can be added here
});
