import React , { useState } from 'react';
import { NavigationContainerRef } from '@react-navigation/native';
import { AnyType } from 'common/declarations/types';


 const useApplicationInitializer = () => {
  
  const [isLoading, setLoading] = useState(true);
  const navigationRef = React.createRef() as React.RefObject<NavigationContainerRef<AnyType>>;


  return {
    navigationRef,
    isAppLoading:
    isLoading,
  };
}
export default useApplicationInitializer;
