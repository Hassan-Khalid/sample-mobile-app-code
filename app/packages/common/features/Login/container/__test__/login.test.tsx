import React from 'react';
import { render } from '@testing-library/react-native';
import Login from '../login';

// Mock the useLogin hook
jest.mock('../../hooks/useLogin', () => () => ({
  onEmailInputChange: jest.fn(),
  emailError: false,
  email: '',
  password: '',
  passwordError: false,
  errorMessage: '',
  onBlur: jest.fn(),
  onPasswordInputChange: jest.fn(),
  onForgotPress: jest.fn(),
  createBottomButton: jest.fn(),
}));

describe('Login component', () => {
  it('renders without crashing', () => {
    // setup
    const wrapper =  render(<Login />);
   
    // post-conditions
    expect(wrapper.toJSON).toMatchSnapshot()
    
   
  });
  
});
