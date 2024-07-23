import { render } from '@testing-library/react-native';
import LoadMoreWorkOrder from '../LoadMoreWorkOrder';
import React from 'react';

describe('Load More WorkOrder',()=>{
  it('render component', () => {
    //setup
    const wrapper = render(<LoadMoreWorkOrder />);
    
    // post-conditions
    expect(wrapper.toJSON).toMatchSnapshot();
  });
  
});

