import React from 'react';
import { SafeAreaView, View } from 'react-native';
import LoaderComponent from '../../../common/components/Loader/LoaderComponent';
// import ErrorBoundaryComponent from 'common/components/ErrorBoundary/ErrorBoundaryComponent';
import AppNavigator from '../../AppNavigator';

function ApplicationContainer() {
  return (
    <SafeAreaView style={{ flexGrow: 1, backgroundColor: 'red' }}>
      {/* <ErrorBoundaryComponent> */}
      <View style={{ flex: 1 }}>
        <LoaderComponent loading={false} />
        <AppNavigator />
      </View>
      {/* </ErrorBoundaryComponent> */}
    </SafeAreaView>
  );
}

export default ApplicationContainer;
