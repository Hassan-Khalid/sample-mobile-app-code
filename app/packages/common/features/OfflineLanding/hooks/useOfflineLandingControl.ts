import {  useEffect, useState } from 'react';
import SCREENS from '../../../constants/Screens';
import NavigationService from '../../../../common/services/NavigationService';
import StorageFacade, { StorageKeys } from '../../../../common/facade/StorageFacade';
import LandingService from 'common/features/Landing/Service/LandingService';

const useOfflineLandingControl = () => {
  
  const [isLoading, setLoading] = useState (true);
  const landingService = new LandingService()
  const { currentUser, loading ,refetch} = landingService.getUser();
  
  
  const handleConfirmationForAuthentication = () => {
    const userToken = StorageFacade.getStringKey(StorageKeys.SESSION_TOKEN) ;
    
    if(userToken && !!currentUser) {
      setLoading(false)
      NavigationService.navigateTop(SCREENS.WORK_ORDER_LISTING,{source:SCREENS.LANDING});
    }
    else if(userToken) {
      setLoading(true)
      refetch()
    }
    else {
      setLoading(false)
      NavigationService.navigateTop(SCREENS.LOGIN,{source:SCREENS.LANDING});
    }
  }


  useEffect ( () =>{
    handleConfirmationForAuthentication()
  }, [currentUser,loading]);

  return{
    handleConfirmationForAuthentication,
    isLoading,
  }
}
export default useOfflineLandingControl;