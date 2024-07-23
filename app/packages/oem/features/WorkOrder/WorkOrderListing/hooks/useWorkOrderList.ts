import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import WorkOrderListService from '../service/workOrderListService';
import { setMyWorkOrderList, setWorkOrderList } from 'common/redux/slice/workOrderListSlice';
import { bottomTabSelector, myWorkOrderSelector, OfflineModeSelector, workOrderSelector } from 'common/redux/selector';
import { WorkOrderListTypeObject } from 'common/declarations/global';
import { NavigationService } from 'common/services';
import SCREENS from 'common/constants/Screens';


const KEY_DELAY = 1000;

const useWorkOrderList = () => {
  
  const [pageNumber,setPageNumber] = useState(1);
  const [workOrder,setWorkOrder] = useState <WorkOrderListTypeObject[] | [] >([])
  const [myWorkOrder,setMyWorkOrder] = useState <WorkOrderListTypeObject[] | [] >([])
  const isOffline = useSelector(OfflineModeSelector)
  const  bottomTab = useSelector(bottomTabSelector)
  
  const workOrderService = new WorkOrderListService()
  const dispatch = useDispatch();
  const  workOrders  = useSelector(workOrderSelector)
  const  myWorkOrders  = useSelector(myWorkOrderSelector)
  
  const debounce = (func, delay) => {
    let timerId;
    return function (...args) {
      if (timerId) {
        clearTimeout(timerId);
      }
      timerId = setTimeout(() => {
        func(...args);
      }, delay);
    };
  };
  
  const filterOnSearch =(searchKey = '') => {
    if(searchKey === ''){
      setWorkOrder(workOrders)
      setMyWorkOrder(myWorkOrders)
      return
    }
    if(bottomTab === 'MY_WORK_ORDER'){
      let filteredWorkOrders =  myWorkOrders
      .filter((item) =>
        item?.title?.toLowerCase().includes(searchKey.toLowerCase()),
      );
      setMyWorkOrder(filteredWorkOrders)
    }
    else{
      let filteredWorkOrders =  workOrders
      .filter((item) =>
        item?.title?.toLowerCase().includes(searchKey.toLowerCase()),
      );
      setWorkOrder(filteredWorkOrders)
    }
  }
  
  
  const getSearchKey = debounce((val) =>{
    filterOnSearch(val)
  },KEY_DELAY)
  const getWorkOrders = () => {
    const { data:allWorkOrders , loading } = workOrderService.getWorkOrderList();
    if(!loading && !isOffline){
      dispatch(setWorkOrderList({workOrders:allWorkOrders}))
    }
    
  }
  const getMyWorkOrders = () => {
    const { data :allMyWorkOrders , loading:myTicketsLoading} = workOrderService.getMyWorkOrderList();
    if(!myTicketsLoading &&  !isOffline){
      dispatch(setMyWorkOrderList({myWorkOrders:allMyWorkOrders}))
    }
  }
  
  //   const getWorkOrdersWithPage = () =>{
  //   const { data :allMyWorkOrders , loading:myTicketsLoading} = workOrderService.getMyWorkOrderListWithParams(pageNumber);
  //     if(!myTicketsLoading){
  //   }
  // }
  
  const getWorkOrderData = useCallback(() => {
    getWorkOrders()
    getMyWorkOrders()
  }, []);
  
  
  useEffect(() => {
    if(workOrders){
      setWorkOrder(workOrders)
    }
    if(myWorkOrders){
      setMyWorkOrder(myWorkOrders)
    }
  }, [workOrders,myWorkOrders]);
  
  return {
    filterOnSearch,
    getSearchKey,
    getMyWorkOrders,
    getWorkOrders,
    workOrder,
    myWorkOrder,
    getWorkOrderData,
    pageNumber,
    bottomTab,
  };
};
export default useWorkOrderList;
