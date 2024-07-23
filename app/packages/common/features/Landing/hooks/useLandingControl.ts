import { useEffect, useState } from 'react';
import SCREENS from '../../../constants/Screens';
import NavigationService from '../../../../common/services/NavigationService';
import StorageFacade, { StorageKeys } from '../../../../common/facade/StorageFacade';
import LandingService from 'common/features/Landing/Service/LandingService';
import NetInfo, { NetInfoState } from '@react-native-community/netinfo';
import { useDispatch, useSelector } from 'react-redux';
import { currentUserSelector } from 'common/redux/selector';
import {setConnectionMode } from 'common/redux/slice/commonSlice'
import { setUser } from 'common/redux/slice/userSlice';

const useLandingControl = () => {
  const user = useSelector(currentUserSelector)
  
  const [isLoading, setLoading] = useState (true);
  const [isUserDataFetched, setIsUserDataFetched] = useState (false);
  const [isOfflineMode,setOffline] = useState(false)

  const landingService = new LandingService()
  const { currentUser, loading ,refetch} = landingService.getUser();
  const dispatch  = useDispatch()
  
  const validateConnection = async () => {
    const connection: NetInfoState = await NetInfo.fetch();
    const { isConnected } = connection;
    
    if (isConnected !==  null) {
      setOffline(!isConnected)
      dispatch(setConnectionMode(!isConnected));
    }
  }
  
  const handleConfirmationForAuthentication = () => {
    const userToken = StorageFacade.getStringKey(StorageKeys.SESSION_TOKEN);
    
    if(userToken && !!currentUser && currentUser._id) {
      dispatch(setUser({currentUser:currentUser}))
      setIsUserDataFetched(true)
      setLoading(false)
      NavigationService.navigateTop(SCREENS.WORK_ORDER_LISTING,{source:SCREENS.LANDING});
    }
    else if(userToken && !isOfflineMode) {
      setIsUserDataFetched(false)
      setLoading(true)
      refetch()
    }
    else if(userToken && isOfflineMode){
      handleOfflineAuthentication()
    }
    else {
      setLoading(false)
      NavigationService.navigateTop(SCREENS.LOGIN,{source:SCREENS.LANDING});
    }
  }
  
 const  handleOfflineAuthentication = () =>{
   if(user && user._id){
     setIsUserDataFetched(true)
     setLoading(false)
     NavigationService.navigateTop(SCREENS.WORK_ORDER_LISTING,{source:SCREENS.LANDING});
   }
   else {
     setLoading(false)
     NavigationService.navigateTop(SCREENS.LOGIN,{source:SCREENS.LANDING});
   }
 }


  useEffect ( () =>{
    if(!isUserDataFetched){
      handleConfirmationForAuthentication()
    }
  }, [currentUser,loading, isOfflineMode]);
  
  
  useEffect(() => {
    (async ()=> NetInfo.addEventListener(validateConnection))()
  }, []);

  return{
    handleConfirmationForAuthentication,
    isLoading,
    isUserDataFetched,
    isOfflineMode,
    validateConnection,
    handleOfflineAuthentication
  }
}
export default useLandingControl;