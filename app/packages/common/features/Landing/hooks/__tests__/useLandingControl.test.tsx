import { renderHook, act } from '@testing-library/react-hooks';
import useLandingControl from '../useLandingControl';
import NavigationService from 'common/services/NavigationService';
import * as NetInfo from '@react-native-community/netinfo';
import StorageFacade from 'common/facade/StorageFacade';
import { setConnectionMode } from 'common/redux/slice/commonSlice';
import { setUser } from 'common/redux/slice/userSlice';
import SCREENS from 'common/constants/Screens';
import { useSelector } from 'react-redux';

// Mock the dependencies
jest.mock('@react-native-community/netinfo', () => ({
  fetch: jest.fn(),
  addEventListener: jest.fn()
}));

jest.mock('common/facade/StorageFacade');

jest.mock('common/services/NavigationService', () => ({
  navigateTop: jest.fn()
}));

// Mock the Redux useDispatch function
jest.mock('react-redux', () => ({
  useDispatch: jest.fn()
}));

// Mock the LandingService class
jest.mock('common/features/Landing/Service/LandingService', () => jest.fn().mockImplementation(() => ({
  getUser: jest.fn().mockReturnValue({ currentUser: { _id: 'user_id' }, loading: false, refetch: jest.fn() })
})));

// Mock the Redux dispatch function
const mockDispatch = jest.fn();

// Mock the useSelector hook
jest.mock('react-redux', () => ({
  useSelector: jest.fn().mockReturnValue({ _id: 'user_id' }),
  useDispatch: () => mockDispatch
}));

describe('useLandingControl', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  
  it('handleConfirmationForAuthentication navigates to WORK_ORDER_LISTING when user token exists and currentUser is fetched', async () => {
    StorageFacade.getStringKey.mockReturnValueOnce('user_token');
    const { result, waitForNextUpdate } = renderHook(() => useLandingControl());
    
    
    expect(mockDispatch).toHaveBeenCalledWith(setUser({ currentUser: { _id: 'user_id' } }));
    expect(NavigationService.navigateTop).toHaveBeenCalledWith(SCREENS.WORK_ORDER_LISTING, { source: SCREENS.LANDING });
  });
  
  
  it('validateConnection sets offline mode and dispatches action', async () => {
    NetInfo.fetch.mockResolvedValueOnce({ isConnected: true });
    const { result, waitForNextUpdate } = renderHook(() => useLandingControl());
    
    await act(async ()=>{
     await result.current.validateConnection()
    })
  
    
    expect(result.current.isOfflineMode).toBe(false);
    expect(mockDispatch).toHaveBeenCalledWith(setConnectionMode(false));
  });
  
  
  it('useEffect hooks are called', () => {
    renderHook(() => useLandingControl());
    
    expect(NetInfo.addEventListener).toHaveBeenCalled();
  });
  
  
  // test return values
  it('returns correct values', () => {
    const { result } = renderHook(() => useLandingControl());
    
    expect(result.current.isLoading).toBe(false);
    expect(typeof result.current.handleConfirmationForAuthentication).toBe('function');
    expect(typeof result.current.validateConnection).toBe('function');
  });
  
  it('handleOfflineAuthentication navigates to WORK_ORDER_LISTING if user is authenticated', () => {
    const { result } = renderHook(() => useLandingControl());
    const navigateTopSpy = jest.spyOn(NavigationService, 'navigateTop');
    
    act(() => {
      result.current.handleOfflineAuthentication();
    });
    
    expect(navigateTopSpy).toHaveBeenCalledWith(SCREENS.WORK_ORDER_LISTING, { source: SCREENS.LANDING });
  });
  
  test('handleOfflineAuthentication navigates to LOGIN if user is not authenticated', () => {
    // Modify the useSelector mock to return null instead of a user object
    useSelector.mockReturnValueOnce(null);
    
    const { result } = renderHook(() => useLandingControl());
    const navigateTopSpy = jest.spyOn(NavigationService, 'navigateTop');
    
    act(() => {
      result.current.handleOfflineAuthentication();
    });
    
    expect(navigateTopSpy).toHaveBeenCalledWith(SCREENS.LOGIN, { source: SCREENS.LANDING });
  });
});
