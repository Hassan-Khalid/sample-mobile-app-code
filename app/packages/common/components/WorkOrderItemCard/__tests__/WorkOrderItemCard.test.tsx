import React from 'react';
import { render } from '@testing-library/react-native';
import WorkOrderItemCard from '../WorkOrderItemCard';
import mockWorkOrder from "common/mock/workOrder.json"
import statuses from "common/mock/statuses.json"


jest.mock('../../../../oem/features/WorkOrder/WorkOrderListing/helper/workOrderhelper', () => ({
  getWorkOrderCreatedAt: jest.fn().mockReturnValue('2024-03-19'), // Mocked return value
  capitalizeFirstLetter: jest.fn().mockImplementation((str) => {
    if (typeof str !== 'string' || str.trim().length === 0) {
      throw new Error('Input must be a non-empty string.');
    }
    return str.replace(/\b\w/g, char => char.toUpperCase());
  }),
  generateInitials: jest.fn().mockImplementation((name) => {
    const words = name.split(' ');
    return words.map(part => part.charAt(0)).join('').toUpperCase();
  }),
}));

describe('WorkOrderItemCard', () => {
  
  
  it('renders correctly', () => {
    // exercise
    const wrapper = render(<WorkOrderItemCard item={mockWorkOrder[0]} statuses = {statuses}/>);
    
    // post-conditions
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
  
  it('renders correctly with no Assignee', () => {
    // exercise
    const wrapper = render(<WorkOrderItemCard item={mockWorkOrder[1]} statuses = {statuses}/>);
    
    // post-conditions
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
  
});
