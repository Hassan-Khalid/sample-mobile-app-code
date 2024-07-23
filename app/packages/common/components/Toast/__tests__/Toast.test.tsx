import React from 'react';
import { render } from '@testing-library/react-native';
import Toast from '../Toast';
import { useToast } from 'react-native-toast-notifications';
import Text from '../../Text/Text';

// Mock the useToast hook
jest.mock('react-native-toast-notifications', () => ({
  useToast: () => ({
    show: jest.fn(),
  }),
}));

describe('Toast component', () => {
  it('displays the toast notification with the correct message and options', () => {
    // Arrange
    const message = 'Test message';
    const type = 'success';
    const placement = 'top';
    const duration = 2000;
    const animationType = 'slide-in';
    
    // Act
    const wrapper = render(
      <Toast
        message={message}
        type={type}
        placement={placement}
        duration={duration}
        animationType={animationType}
      />);
    
    // post-conditions
    expect(wrapper.toJSON()).toMatchSnapshot();
    
  });
});
