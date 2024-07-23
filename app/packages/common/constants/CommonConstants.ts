import { CommonAppConstants } from '../declarations/types';

const CommonConstants: CommonAppConstants = {
  androidPlatform: 'android',
  iOsPlatform: 'ios',
  DeviceOrientation: {
    portrait: 'portrait',
    landscape: 'landscape',
  },
  splashTimeout:3000,
  tabs: {
    "WORK_ORDER":'tickets.closedTicketsPage.totalTickets',
    "MY_WORK_ORDER":'tickets.myTicketsPage.openTicketsTitle'
  }

};

export default CommonConstants;
