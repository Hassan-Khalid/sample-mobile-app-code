import React from 'react';
import { Container, LoaderComponent, ScreenHeaderComponent, Text } from 'common/components';
import { NavigationService } from 'common/services';
import useWorkOrderDetail  from '../hooks/useWorkOrderDetail';
import styles from "../styles/workOrderDetail.styles"
import { View } from 'react-native';
const WorkOrderDetail = (props) => {
  const {isLoading,workOrderDetails, getWorkOrderByID} = useWorkOrderDetail(props)
  getWorkOrderByID()
  
  // const item = NavigationService.getNavigationParam('item')
  return (
    <Container >
      <ScreenHeaderComponent componentId={''} title={ workOrderDetails?.title} />
      <LoaderComponent loading={isLoading}/>
      <View style={styles.container}>
      <Text>Details Screen</Text>
      </View>
    </Container>
  );
};

export default WorkOrderDetail;

