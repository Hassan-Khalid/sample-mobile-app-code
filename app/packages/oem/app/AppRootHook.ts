import React , {useEffect, useState } from 'react';
import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { NavigationContainerRef } from '@react-navigation/native';
import { AnyType } from 'common/declarations/types';
import StorageFacade, { StorageKeys } from 'common/facade/StorageFacade';
import { setContext } from '@apollo/client/link/context';
import { AUTH, CLIENT_AUTH_REQUEST_TYPE, JWT } from '../../apollo/config';
import Util from 'common/util/Util';
import CommonConstants from 'common/constants/CommonConstants';


const useAppRoot = () => {
  
  const [isLoading, setLoading] = useState(true);
  const navigationRef = React.createRef() as React.RefObject<NavigationContainerRef<AnyType>>;
  const opts = {
    credentials: "same-origin",
    headers: {
      [AUTH.STRATEGIES.CLIENT.AUTH_HEADER]: CLIENT_AUTH_REQUEST_TYPE,
    },
  };
  
  const httpLink = createHttpLink({
    uri: Util.getApiEndPoint(),...opts
  });
  
  const authLink = setContext(async (_, { headers }) => {
    
    // get the authentication token from local storage if it exists
    const language = StorageFacade.getStringKey(StorageKeys.LANGUAGE);
    const userToken = StorageFacade.getStringKey(StorageKeys.SESSION_TOKEN);
    const reFreshToken = StorageFacade.getStringKey(StorageKeys.REFRESH_TOKEN);
    
    // return the headers to the context so httpLink can read them
    if(userToken !== undefined && reFreshToken !== undefined ) {
      return {
        headers: {
          ...headers,
          "X-Makula-Auth-Request-Type": "LOCAL_STORAGE",
          "Accept-Language": language || "en",
          [JWT.HEADER.TOKEN.NAME]: JSON.parse(userToken) || null,
          [JWT.HEADER.REFRESH_TOKEN.NAME]: JSON.parse(reFreshToken) || null,
        }
      }
    }
    return headers
  });
  
  
  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache()
  })
  
  const setup = async () => {
    setTimeout(()=>{
      setLoading(false);
    },CommonConstants.splashTimeout)
  };
  
  useEffect(() => {
    (async () => setup())();
  }, []);
  
  return {
    navigationRef,
    isLoading,
    client
  };
}
export default useAppRoot;
