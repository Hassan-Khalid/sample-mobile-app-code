import React from 'react';
import { render } from '@testing-library/react-native';
import Landing from '../Landing';

jest.mock('../../hooks/useLandingControl', () => ({
  __esModule: true,
  default: jest.fn(() => ({
    isLoading: true, // or false, depending on your test case
  })),
}));

describe('Landing component', () => {
  it('render component', () => {
    //setup
    const wrapper = render(<Landing />);
    
    // post-conditions
    expect(wrapper.toJSON).toMatchSnapshot();
  });
  
  it('renders LoaderComponent when isLoading is true', () => {
    const { getByTestId } = render(<Landing />);
    const loaderComponent = getByTestId('loader-component');
    
    expect(loaderComponent).toBeTruthy();
  });
  
});
