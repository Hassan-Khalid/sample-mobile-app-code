
import { AnyType, IWorkOrderListService } from 'common/declarations/types';
// @ts-ignore
import { listOwnOemAllTickets, listOwnUserOemOpenTickets } from '../../../../../apollo/services';


class WorkOrderListService  implements IWorkOrderListService {
  
  public getWorkOrderList():  AnyType{
    const { data, loading,refetch ,error} = listOwnOemAllTickets();
    return {
      loading,
      data,
      refetch
    }
  }
  public getMyWorkOrderList():  AnyType{
    const { data, loading ,refetch} = listOwnUserOemOpenTickets();
    return {
      loading,
      data,
      refetch
    }
  }
}

export default WorkOrderListService;


