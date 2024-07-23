import reducer, { initialState,setWorkOrderList,setMyWorkOrderList  } from '../workOrderListSlice';
import mockWorkOrder from "common/mock/workOrders.json"
describe('WorkOrderSlice', () => {
  
  it('should handle setWorkOrder', () => {
    
    // exercise
    const result = reducer(initialState, { type: setWorkOrderList.type, payload: {workOrders: mockWorkOrder }});
    
    // post-condition
    expect(result.workOrders.length).toBeGreaterThanOrEqual(mockWorkOrder.length)
  });
  
  
  it('should handle setMyWorkOrder',()=>{
    const result = reducer(initialState, { type: setMyWorkOrderList.type, payload:{ myWorkOrders :mockWorkOrder }});
    
    // post-condition
    expect(result.myWorkOrders.length).toBeGreaterThanOrEqual(5)
  })
  
  
});
