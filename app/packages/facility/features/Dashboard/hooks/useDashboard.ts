import NavigationService from '../../../../common/services/NavigationService';
import SCREENS from '../../../../common/constants/Screens';

const useDashboard = () => {
  const navigateToLogin = () => {
    NavigationService.navigate(SCREENS.LOGIN);
  };

  return {
    navigateToLogin,
  };
};
export default useDashboard;
