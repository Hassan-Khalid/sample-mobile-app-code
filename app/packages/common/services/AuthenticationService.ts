import StorageFacade, { StorageKeys } from '../../common/facade/StorageFacade';
import NavigationService from '../../common/services/NavigationService';
import SCREENS from '../../common/constants/Screens';

interface authData {
  token: string;
  refreshToken: string
}

class AuthenticationService {
  public static handleAuthentication = (data: authData) => {
    const { token, refreshToken } = data
    StorageFacade.setKey(StorageKeys.SESSION_TOKEN, token)
    StorageFacade.setKey(StorageKeys.REFRESH_TOKEN, refreshToken)
  }
  
  public static handleLogout = () => {
    StorageFacade.deleteKey(StorageKeys.SESSION_TOKEN);
    StorageFacade.deleteKey(StorageKeys.REFRESH_TOKEN);
   NavigationService.navigate(SCREENS.LANDING);
  }
}
export default AuthenticationService;