import React from 'react';
import { render } from '@testing-library/react-native';
import LoaderComponent from '../LoaderComponent';

describe('LoaderComponent', () => {
  it('renders correctly', () => {
    // exercise
    const loading = true;
    const wrapper = render(<LoaderComponent loading={loading} />);

    // post-conditions
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should render empty', () => {
    // exercise
    const loading = false;
    const wrapper = render(<LoaderComponent loading={loading} />);

    // post-conditions
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
