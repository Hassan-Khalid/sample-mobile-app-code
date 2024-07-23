import { COMMON_LOGOS } from 'common/assets/Images';
import {setBottomTab} from 'common/redux/slice/userSlice';
import { useDispatch } from 'react-redux';


export const BottomTabs = {
  WORK_ORDER :{
    icon:{
      focused:COMMON_LOGOS.IC_WORK_ORDER_BLUE,
      unFocused:COMMON_LOGOS.IC_WORK_ORDER_GREY
    },
    title:'tickets.closedTicketsPage.totalTickets'
  },
  MY_WORK_ORDER:{
    icon:{
      focused:COMMON_LOGOS.IC_MY_WORK_ORDER_BLUR,
      unFocused:COMMON_LOGOS.IC_MY_WORK_ORDER_GREY
    },
    title:'tickets.myTicketsPage.openTicketsTitle'
  }
}

const UseBottomTabBar =()=>{
  const dispatch = useDispatch();
  
  const setCurrentTab = (value:string) =>{
    dispatch(setBottomTab({ bottomTab:value }))
  }
  
  return{
    setCurrentTab,
  }
}

export default UseBottomTabBar;