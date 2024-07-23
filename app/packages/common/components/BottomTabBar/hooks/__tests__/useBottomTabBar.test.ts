
import UseBottomTabBar from '../useBottomTabBar';
import { useDispatch } from 'react-redux';
import { setBottomTab } from 'common/redux/slice/userSlice';

// Mocking react-redux useDispatch
jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
}));

describe('UseBottomTabBar hook', () => {
  it('dispatches action with the correct value when setCurrentTab is called', () => {
    const mockDispatch = jest.fn();
    useDispatch.mockReturnValue(mockDispatch);
    
    const bottomTabBar = UseBottomTabBar();
    
    bottomTabBar.setCurrentTab('WORK_ORDER');
    
    // Asserting that useDispatch was called with the correct action and value
    expect(mockDispatch).toHaveBeenCalledWith(setBottomTab({ bottomTab: 'WORK_ORDER' }));
  });
});
