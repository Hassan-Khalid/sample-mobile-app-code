import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import styles from './styles/LoaderComponent.styles';
import APP_COLORS from '../../assets/colors';
import componentBuilder from 'common/builder/ComponentBuilder';

function LoaderComponent({ loading }: { loading: boolean }) {
  return loading ? (
    <View style={styles.spinnerWrapper} {...componentBuilder.createTestAttributes('loader-component')}>
      <ActivityIndicator size="large" color={APP_COLORS.GRAY1} />
    </View>
  ) : (
    <View />
  );
}

export default LoaderComponent;
