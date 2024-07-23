import WorkOrderListService from '../workOrderListService';
import { listOwnOemAllTickets, listOwnUserOemOpenTickets, useListOwnOemOpenTickets } from '../../../../../../apollo/services';

// Mock external functions
jest.mock('../../../../../../apollo/services', () => ({
  listOwnOemAllTickets: jest.fn(),
  listOwnUserOemOpenTickets: jest.fn(),
  useListOwnOemOpenTickets: jest.fn(),
}));

describe('WorkOrderListService', () => {
  let workOrderListService;
  
  beforeEach(() => {
    workOrderListService = new WorkOrderListService();
  });
  
  afterEach(() => {
    jest.clearAllMocks();
  });
  
  it('should return an object with loading, data, and refetch properties for getWorkOrderList', () => {
    const mockData = {};
    const mockRefetch = jest.fn();
    listOwnOemAllTickets.mockReturnValueOnce({ data: mockData, loading: false, refetch: mockRefetch });
    
    const result = workOrderListService.getWorkOrderList();
    
    expect(result).toEqual({ loading: false, data: mockData, refetch: mockRefetch });
  });
  
  it('should return an object with loading, data, and refetch properties for getMyWorkOrderList', () => {
    const mockData = {};
    const mockRefetch = jest.fn();
    listOwnUserOemOpenTickets.mockReturnValueOnce({ data: mockData, loading: false, refetch: mockRefetch });
    
    const result = workOrderListService.getMyWorkOrderList();
    
    expect(result).toEqual({ loading: false, data: mockData, refetch: mockRefetch });
  });
  
});
