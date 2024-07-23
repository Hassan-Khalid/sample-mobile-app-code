import React from 'react';
import { render } from '@testing-library/react-native';
import BottomTabBar from '../BottomTabBar';

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}));


describe('BottomTabBar component', () => {
  it('renders correctly', () => {
    // Mocking useSelector hook
    // useSelector.mockReturnValue('Home'); // Mocking selected tab
    
    const wrapper = render(<BottomTabBar />);
    
    // post-conditions
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
  
});
