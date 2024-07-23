import { renderHook, act } from '@testing-library/react-hooks';
import useWorkOrderList from '../useWorkOrderList';
import { useSelector, useDispatch } from 'react-redux';

// Mock useSelector and useDispatch
jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}));

// Mock WorkOrderListService methods
jest.mock('../../service/workOrderListService', () => ({
  __esModule: true,
  default: jest.fn().mockImplementation(() => ({
    getWorkOrderList: jest.fn().mockReturnValue({ data: [], loading: false }),
    getMyWorkOrderList: jest.fn().mockReturnValue({ data: [], loading: false }),
  })),
}));

describe('useWorkOrderList hook', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  
  it('should return initial states and functions', () => {
    const { result } = renderHook(() => useWorkOrderList());
    
    expect(result.current.workOrder).toEqual([]);
    expect(result.current.myWorkOrder).toEqual([]);
    expect(result.current.pageNumber).toEqual(1);
    expect(typeof result.current.filterOnSearch).toBe('function');
    expect(typeof result.current.getSearchKey).toBe('function');
    expect(typeof result.current.getMyWorkOrders).toBe('function');
    expect(typeof result.current.getWorkOrders).toBe('function');
    expect(typeof result.current.getWorkOrdersWithPage).toBe('function');
    expect(typeof result.current.getWorkOrderData).toBe('function');
  });
  
  // Add more test scenarios as needed
});
