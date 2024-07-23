import { FunctionComponent } from 'react';
import SCREENS from '../constants/Screens';
import { Login, Landing, ForgotPassword } from '../features';


type ScreenProps = {
  name: string;
  screen: FunctionComponent;
  animated?: boolean;
};

const CommonScreens: ScreenProps[] = [
  {
    name: SCREENS.LOGIN,
    screen: Login,
    animated: true,
  },
  {
    name: SCREENS.FORGOT_PASSWORD,
    screen:ForgotPassword ,
    animated: true,
  },
  {
    name: SCREENS.LANDING,
    screen: Landing,
    animated: true,
  },
];
export default CommonScreens;
