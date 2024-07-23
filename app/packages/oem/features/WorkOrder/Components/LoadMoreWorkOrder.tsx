import React from 'react';
import { ActivityIndicator, View } from 'react-native';

function LoadMoreWorkOrder() {
  return (
    <View style={{ height: 100, width: "100%" }}>{<ActivityIndicator />}</View>
  );
}

export default LoadMoreWorkOrder;
