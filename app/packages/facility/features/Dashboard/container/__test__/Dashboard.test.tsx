import React from 'react';
import { render } from '@testing-library/react-native';
import Dashboard from '../Dashboard';

describe('Dashboard screen', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render container', async () => {
    // exercise
    const wrapper = render(<Dashboard />);

    // post-conditions
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
