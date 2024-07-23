import React from 'react';
import { render } from '@testing-library/react-native';
import Text from '../Text';

describe('Text Component', () => {
  it('renders correctly empty', () => {
    // exercise
    const wrapper = render(<Text/>);
    
    // post-conditions
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
  
  it('should render with child', () => {
    // exercise
    const wrapper = render(<Text>'hello'</Text>);
    
    // post-conditions
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
