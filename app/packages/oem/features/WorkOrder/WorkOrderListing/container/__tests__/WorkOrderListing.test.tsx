import { render } from '@testing-library/react-native';
import WorkOrderListing from '../WorkOrderListing';
import React from 'react';
import useWorkOrderList from '../../hooks/useWorkOrderList';

jest.mock('../../hooks/useWorkOrderList')
// Mock the custom hook

describe('WorkOrderList', () => {
  beforeEach(()=>{
    useWorkOrderList.mockReturnValue({
      getSearchKey: jest.fn(),
      myWorkOrder: [],
      getWorkOrders: jest.fn(),
      getMyWorkOrders: jest.fn(),
      workOrder: [],
      bottomTab: 'ALL_WORK_ORDER',
    })
  })
  
  it('render component', () => {
    //setup
    const wrapper = render(<WorkOrderListing />);
    
    // post-conditions
    expect(wrapper.toJSON).toMatchSnapshot();
  });
  
});
