import { FunctionComponent } from 'react';
import SCREENS from '../common/constants/Screens';
import CommonScreens from '../common/navigator/CommonScreens';
import {  WorkOrderList } from './features';
import WorkOrderDetail from './features/WorkOrder/WorkOrderDetail/container/WorkOrderDetail';

type ScreenProps = {
  name: string;
  screen: FunctionComponent;
  animated?: boolean;
};

const AppScreens: ScreenProps[] = [
  {
    name: SCREENS.WORK_ORDER_LISTING,
    screen: WorkOrderList,
    animated: false,
  }, {
    name: SCREENS.WORK_ORDER_DETAIL,
    screen: WorkOrderDetail,
    animated: false,
  },
  ...CommonScreens,
];

export default AppScreens;
