import { useEffect, useState } from 'react';
import WorkOrderDetailService from "../service/workOrderDetailService"
import { Toast } from 'common/components';
import { workOrderTicketObjectType } from 'common/declarations/global';

const useWorkOrderDetail = (props) => {
  const [isLoading,setLoading] = useState(true)
  const [workOrderDetails,setWorkOrderDetails] = useState<workOrderTicketObjectType>()
  const workOrderService = new WorkOrderDetailService()
  const {ticket, loading,error,refetch} = workOrderService.getWorkOrderByID(props.route.params.id)
  
  
  const getWorkOrderByID = () => {
   
    if(!error){
      refetch()
      // setLoading(loading)
      // setWorkOrderDetails(ticket)
    }
    else{
      // setLoading(loading)
      Toast({message:error,type:'danger'})
    }
   
  }
  
  useEffect(() => {
    setWorkOrderDetails(ticket)
    setLoading(loading)
  }, [ticket]);
  
  return{
    isLoading,
    getWorkOrderByID,
    workOrderDetails
  }
}

export default useWorkOrderDetail;