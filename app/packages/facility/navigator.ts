import { FunctionComponent } from 'react';
import SCREENS from '../common/constants/Screens';
import CommonScreens from '../common/navigator/CommonScreens';
import { Dashboard } from './containers/index';

type ScreenProps = {
  name: string;
  screen: FunctionComponent;
  animated?: boolean;
};

const AppScreens: ScreenProps[] = [
  {
    name: SCREENS.DASHBOARD,
    screen: Dashboard,
    animated: false,
  },
  ...CommonScreens,
];

export default AppScreens;
