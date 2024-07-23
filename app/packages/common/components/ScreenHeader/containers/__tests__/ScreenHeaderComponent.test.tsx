import React from 'react';
import { render } from '@testing-library/react-native';
import ScreenHeaderComponent from '../ScreenHeaderComponent';

describe('ScreenHeaderComponent', () => {
  it('should render correctly with default props', () => {
    const wrapper = render(<ScreenHeaderComponent title="Test Title" />);
    
    // Check for the presence of header component
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
  
});
