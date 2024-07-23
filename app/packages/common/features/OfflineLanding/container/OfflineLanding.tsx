import React from 'react';
import { View } from 'react-native';
import { LoaderComponent } from '../../../../common/components';
import useOfflineLandingControl from '../hooks/useOfflineLandingControl';

const OfflineLanding = () => {
  const { isLoading } = useOfflineLandingControl();
  
  return (
    <View>
      <LoaderComponent loading={isLoading } />
    </View>
  );
};

OfflineLanding.navigationOptions = () => ({
  header: null
});

export default OfflineLanding;
