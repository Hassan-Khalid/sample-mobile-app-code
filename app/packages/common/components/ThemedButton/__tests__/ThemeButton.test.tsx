import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import ThemedButton from '../ThemedButton';

// Mocking the i18next t function
jest.mock('i18next', () => ({
  t: jest.fn(text => text), // Mocking t function to return the key as is
}));

jest.mock('common/util/Util');
describe('ThemedButton component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  })
  
  it('renders correctly ', () => {
    // exercise
    const wrapper = render(<ThemedButton/>);
    
    // post-conditions
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
  
  it('renders button with correct properties', () => {
    const onPressMock = jest.fn();
    const { getByText } = render(
      <ThemedButton
        title="Test Button"
        onPress={onPressMock}
        disabled={false}
        type="solid"
        loading={false}
        size="large"
        buttonStyle={{ backgroundColor: 'red' }}
        titleStyle={{ color: 'blue' }}
      />
    );
    
    // Check if the button is rendered
    const button = getByText('Test Button');
    expect(button).toBeTruthy();
    
    // Simulate button press event
    fireEvent.press(button);
    
    // Check if onPress handler is called
    expect(onPressMock).toHaveBeenCalled();
  });
  
  
  // Add more test cases as needed
});
