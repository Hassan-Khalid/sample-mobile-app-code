import * as React from 'react';
import {
  CommonActions,
  DrawerActions,
  NavigationContainerRef,
  StackActions,
  useRoute
} from '@react-navigation/native';
import { AnyType } from '../declarations/types';
import SCREENS from '../../common/constants/Screens';

export const navigationRef = React.createRef() as React.RefObject<
NavigationContainerRef<AnyType>
>;

function canNavigateBack() {
  if (!navigationRef.current) {
    return false;
  }

  return navigationRef.current.canGoBack();
}

function getCurrentScreen() {
  return navigationRef.current?.getCurrentRoute()?.name || '';
}

function navigate(name: string, params?: AnyType) {
  if (!navigationRef.current) {
    return;
  }

  navigationRef.current.navigate(name, params);
}

function push(name: string, params?: AnyType) {
  if (!navigationRef.current) {
    return;
  }

  navigationRef.current.dispatch(StackActions.push(name, params));
}

function navigateBack() {
  if (!navigationRef.current) {
    return;
  }

  navigationRef.current.goBack();
}

function openDrawer(){
  if (!navigationRef.current) {
    return;
  }
  navigationRef.current.dispatch(DrawerActions.toggleDrawer());
}

function navigateTop(routeName: string, params?: AnyType) {
  const resetAction = CommonActions.reset({
    index: 0,
    routes: [{ name: routeName, params }],
  });

  if (!navigationRef.current) {
    return;
  }

  navigationRef.current.dispatch(resetAction);
}

function isMatching(routeName: string) {
  return getCurrentScreen() === routeName;
}

function getNavigationParam(param: string) {
  if (!navigationRef.current) {
    return undefined;
  }

  const routeParams = useRoute()?.params;
  return routeParams ? routeParams[param] : undefined;
}

function getTypedParam<T>(param: string) {
  if (!navigationRef.current) {
    return undefined;
  }

  const routeParams = useRoute()?.params;
  return routeParams ? (routeParams[param] as T) : undefined;
}

function bottomTabScreen () {
  const currentScreen = getCurrentScreen();
  
  switch (currentScreen) {
    case SCREENS.WORK_ORDER_LISTING:
      return true;
    default:
      return false;
  }
}

export default {
  canNavigateBack,
  getCurrentScreen,
  getNavigationParam,
  getTypedParam,
  isMatching,
  bottomTabScreen,
  openDrawer,
  navigate,
  navigateBack,
  navigateTop,
  push,
  routeName: getCurrentScreen(),
};
