import React from 'react';
import { render } from '@testing-library/react-native';
import Container from '../Container';

describe('Container Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  
  it('should render container', async () => {
    // exercise
    const wrapper = render(<Container />);
    
    // post-conditions
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
