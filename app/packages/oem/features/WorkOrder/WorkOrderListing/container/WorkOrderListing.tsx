import React from 'react';
import { View,FlatList } from 'react-native';
import { ScreenHeaderComponent, Container, BottomTabBar,Text ,WorkOrderItemCard} from 'common/components';
import Util from 'common/util/Util';
import useWorkOrderList from '../hooks/useWorkOrderList';
import CommonConstants from 'common/constants/CommonConstants';
import styles from "../styles/workOrderListing.styles"
import { useSelector } from 'react-redux';
import {  currentUserSelector} from 'common/redux/selector';
import { t } from 'i18next';
import componentBuilder from 'common/builder/ComponentBuilder';

function WorkOrderList() {
  let {getSearchKey, myWorkOrder,getWorkOrders,getMyWorkOrders, workOrder,bottomTab,onWorkOrderPress} = useWorkOrderList();
  getMyWorkOrders()
  getWorkOrders()
  const  user  = useSelector(currentUserSelector)
  const tickets = bottomTab  === 'MY_WORK_ORDER' ?  myWorkOrder: workOrder
  const title = `${t(CommonConstants.tabs[bottomTab])} (${tickets.length})`
  
  const renderEmptyComponent = () => {
    return(
      <View>
        <Text>
          look like you don't have any Work Order......
        </Text>
      </View>
    )
  }
  
  return (
    <>
      <Container {...componentBuilder.createTestAttributes('work-order-listing')}>
        <ScreenHeaderComponent componentId={'screen-header-listing'} title={title} getSearchText={(text)=>getSearchKey(text)}/>
        <View style={styles.container}>
          <FlatList
            ListEmptyComponent={renderEmptyComponent}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item, index) => index.toString() + item._id}
            ItemSeparatorComponent={()=><View style={{margin:5}}></View>}
            contentContainerStyle={{flexGrow:1 ,marginVertical:10,paddingBottom:300,alignItems:'center',width:Util.getWindowWidth()}}
            data={ tickets }
            extraData={[user,workOrder,myWorkOrder]}
            scrollsToTop={true}
            removeClippedSubviews={true}
            updateCellsBatchingPeriod={100}
            // ListFooterComponent={<LoadMoreWorkOrder/>}
            onEndReachedThreshold={0.5}
            renderItem={ (item)=><WorkOrderItemCard { ...item } statuses={user?.oem.statuses} onPress={onWorkOrderPress}/>} />
        </View>
      </Container>
      <BottomTabBar/>
    </>
  );
}
export default WorkOrderList;
