import React from 'react';
import { View } from 'react-native';
import { LoaderComponent } from '../../../../common/components';
import useLandingControl from '../hooks/useLandingControl';
const Landing = () => {
  const { isLoading } = useLandingControl();
  return (
    <View>
      <LoaderComponent loading={isLoading }  />
    </View>
  );
};
Landing.navigationOptions = () => ({
  header: null
});

export default Landing;
