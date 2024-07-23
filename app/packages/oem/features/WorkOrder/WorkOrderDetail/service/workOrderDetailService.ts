
import { AnyType, IWorkOrderDetailService } from 'common/declarations/types';
import { getTicketById } from '../../../../../apollo/services';


class WorkOrderDetailService  implements IWorkOrderDetailService {
  
  public getWorkOrderByID(id:string):  AnyType{
    const { ticket, loading, error,refetch} = getTicketById(id);
    console.log(error,">>>>>>error")
    return {
      loading,
      ticket,
      refetch
    }
  }
}

export default WorkOrderDetailService;


