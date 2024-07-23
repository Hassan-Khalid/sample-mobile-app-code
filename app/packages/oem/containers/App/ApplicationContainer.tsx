/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import LoaderComponent from '../../../common/components/Loader/LoaderComponent';
import AppNavigator from '../../AppNavigator';
import useApplicationInitializer from './hooks/useApplicationInitializer';

function ApplicationContainer() {
  const {} = useApplicationInitializer()
  return (
        <>
          <LoaderComponent loading={false} />
          <AppNavigator />
        </>
  );
}

export default ApplicationContainer;
