import React from 'react';
import ApplicationContainer from '../containers/App/ApplicationContainer';
import SplashScreenComponent from '../../common/components/SplashScreenComponent/SplashScreenComponent';
import { LogBox } from 'react-native';
import store from '../../store/store';
import { ToastProvider } from 'react-native-toast-notifications';
import { ApolloProvider } from '@apollo/client';
import { Provider } from 'react-redux';
import useAppRoot from './AppRootHook';



if (__DEV__) {
  // const whyDidYouRender = require('@welldone-software/why-did-you-render');
  // whyDidYouRender(React, {
  //   trackAllPureComponents: true,
  //   exclude: [/Icon/]
  // });
}


LogBox.ignoreLogs([
  'Warning: ...',
  /ImmutableStateInvariantMiddleware/,
  /SerializableStateInvariantMiddleware/
]);



function App() {
  const {client,isLoading} = useAppRoot()
  
  const getProviderContent = () => {
    return (
      <ToastProvider>
        <ApolloProvider client={client}>
          <Provider store={store}>
            <ApplicationContainer />
          </Provider>
        </ApolloProvider>
      </ToastProvider>
    );
  };
  
  
  if (isLoading){
    return <SplashScreenComponent/>
  }
  else {
    return getProviderContent()
  }
}

export default App;
