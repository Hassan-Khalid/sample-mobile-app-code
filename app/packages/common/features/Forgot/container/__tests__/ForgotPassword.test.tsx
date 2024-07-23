import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import ForgotPassword from '../ForgotPassword';
import useForgotPassword, { _state } from '../../hooks/useForgotPassword';

jest.mock('../../hooks/useForgotPassword');

describe('ForgotPassword component', () => {
  beforeEach(() => {
    useForgotPassword.mockReturnValue({
      onEmailInputChange: jest.fn(),
      emailError: false,
      screenState: {
        heading: 'Forgot Password',
        subHeading: 'Enter your email to reset password',
      },
      onPressHandler: jest.fn(),
      state: _state.EMAIL,
      email: 'test@example.com',
      onBlur: jest.fn(),
      createBottomButton: jest.fn(() => []),
    });
    jest.clearAllMocks()
  });
  
  it('render component', () => {
    //setup
    const wrapper = render(<ForgotPassword />);
    
    // post-conditions
    expect(wrapper.toJSON).toMatchSnapshot();
  });
  
  it('renders correctly when in email state', () => {
    const { getByText, getByPlaceholderText } = render(<ForgotPassword />);
    
    expect(getByText('Forgot Password')).toBeTruthy();
    expect(getByText('Enter your email to reset password')).toBeTruthy();
  });
  
});
