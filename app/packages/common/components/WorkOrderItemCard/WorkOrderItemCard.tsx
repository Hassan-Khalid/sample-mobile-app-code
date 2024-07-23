import React, { useMemo } from 'react';
import { View, Text as RNText, TouchableOpacity } from 'react-native';
import styles from './styles/WorkOrderItemCard.styles';
import { COMMON_LOGOS } from '../../assets/Images';
import Text from "../Text/Text"
import Image from "../CustomImage/Image"
import { Avatar } from '@rneui/themed';
import UIUtil from 'common/util/UIUtil';
import { AnyType, Status } from 'common/declarations/types';
import {
  capitalizeFirstLetter,
  generateInitials,
  getWorkOrderCreatedAt
} from '../../../oem/features/WorkOrder/WorkOrderListing/helper/workOrderHelper';
import AppColors from 'common/assets/colors/AppColors';
import { WorkOrderListTypeObject } from 'common/declarations/global';
import WorkOrderTypeIcons from 'common/components/WorkOrderTypeIcon/WorkOrderTypeIcons';
import NavigationService from 'common/services/NavigationService';
import SCREENS from 'common/constants/Screens';
type workOrderItemType = {
  item:WorkOrderListTypeObject
  statuses:AnyType[] | undefined,
  onPress:(item)=>void
}

const WorkOrderItemCard = (props:workOrderItemType) => {
  const WorkOrderIDView = ()=>{
    let iconWrapperStyles = useMemo(() => UIUtil.generateStatusBackgroundColor(props.item?.ticketType?.color), [props.item?.ticketType?.color]);
  return(
    <View style={[styles.topViewContainer,styles.rowContainer]}>
      <View style={[styles.rowContainer]}>
        <View style={{...styles.ticketTypeIconContainer,...{backgroundColor:iconWrapperStyles}}}>
          <WorkOrderTypeIcons
            icon={props.item.ticketType?.icon}
            strokeColor={props.item.ticketType?.color}
            size={16}
          />
        </View>
        <View style={{...styles.rowContainer,...{marginHorizontal:10, }}}>
          <RNText>
          <Text style={styles.lightText}>{props.item.ticketId}</Text>
          <Text> • </Text>
          <Text style={styles.lightText}>{getWorkOrderCreatedAt(props.item.createdAt)}</Text>
          </RNText>
        </View>
      </View>
      <View style={[styles.rowContainer]}>
        <Text style={styles.fileText}>{props.item.procedures?.length}</Text>
        <Image style={styles.fileIcon}  source={COMMON_LOGOS.IC_PROCEDURE} resizeMode={'contain'}/>
      </View>
    </View>
  )
}
const WorkOrderDetailView = () => {
    const {machine,facility} = props.item;
    return(
       <View style={[styles.centerViewContainer]}>
         <View style={{}}>
           <Text numberOfLines={2} ellipsizeMode="tail" style={styles.workOrderHeading}>{props.item.title}</Text>
         </View>
         <View style={{...styles.rowContainer}}>
             <Text numberOfLines={1} ellipsizeMode="tail" style={styles.workOrderSubHeading}>{facility?.name}</Text>
             <Text  style={styles.workOrderSubHeading}>{' • '}</Text>
             <Text numberOfLines={1}  ellipsizeMode="tail" style={styles.workOrderCompanyName}>{machine?.name}</Text>
           <Text  style={styles.workOrderSubHeading}>{' • '}</Text>
           <Text numberOfLines={1}  ellipsizeMode="tail" style={styles.workOrderMachineName}>{machine?.serialNumber}</Text>
         </View>
       </View>
    )}
 const UserImage:React.FC = () =>{
   const {assignee} = props.item
    if(assignee?.name){
      return (
        <>
          <Avatar
            size={26}
            rounded
            titleStyle={{color:AppColors.BLUE}}
            containerStyle={{ backgroundColor: AppColors.BLUE_LIGHT }}
            title={generateInitials(assignee?.name)}
          />
          <Text numberOfLines={1}  ellipsizeMode="tail" style={styles.titleStyle}>{capitalizeFirstLetter(assignee?.name)}</Text>
        </>
    )}
    else{
    return(
      <View style={styles.rowContainer}>
        <Image source={COMMON_LOGOS.IC_USER} resizeMode={'contain'} style={styles.avatar}/>
        <Text numberOfLines={1} style={styles.titleStyle}>{'tickets.ticketDetails.notAssigned'}</Text>
      </View>
    )}
  }
const WorkOrderStatusView = () => {
    const {status} = props.item
    const statusObject:Status | undefined  = UIUtil.getStatus(props.statuses,status)
    return(
      <View style={[styles.bottomViewContainer,styles.rowContainer]}>
        <View style={styles.rowContainer}>
          <UserImage/>
        </View>
        <View style={{...styles.statusView,backgroundColor:UIUtil.generateStatusBackgroundColor(statusObject?.color)}}>
          <Text style={{...styles.statusText,color:statusObject?.color}}>{statusObject?.label.toUpperCase()}</Text>
        </View>
      </View>
    )
  }
  return (
    <View >
      <TouchableOpacity onPress={()=>NavigationService.navigate(SCREENS.WORK_ORDER_DETAIL,{id:props.item._id})} style={styles.container}>
      <View style={styles.innerContainer}>
        <WorkOrderIDView/>
        <WorkOrderDetailView/>
        <WorkOrderStatusView/>
      </View>
      </TouchableOpacity>
    </View>
  );
};

export default WorkOrderItemCard;
