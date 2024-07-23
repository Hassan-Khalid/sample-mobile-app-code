import StorageFacade, { StorageKeys } from '../../facade/StorageFacade';
import AuthenticationService from '../AuthenticationService';
import { act } from '@testing-library/react-hooks';
import { NavigationService } from 'common/services';
import SCREENS from 'common/constants/Screens';

jest.mock('common/facade/StorageFacade');
jest.mock("common/services/NavigationService")
describe('Authentication Service', () => {
  beforeEach(() => {
    jest.clearAllMocks();
   
  });
  
  it('should handleAuthentication', async () => {
    // set-up
    const data = {
      token:'testToken123',
      refreshToken:'refreshToken123456'
    }
    
    // exercise
    act(()=>{
      AuthenticationService.handleAuthentication(data)
    })
    
    // post-conditions
    expect(StorageFacade.storage.getString(StorageKeys.SESSION_TOKEN)).not.toBeNull();
    expect(StorageFacade.storage.getString(StorageKeys.REFRESH_TOKEN)).not.toBeNull();
    
    // tear-down
     StorageFacade.storage.clearAll();
  });
  
  it('should handle Logout',  () => {
    // set-up
    StorageFacade.storage.set(StorageKeys.SESSION_TOKEN,'someTestToken')
    StorageFacade.storage.set(StorageKeys.REFRESH_TOKEN,'refreshToken')
    
    // exercise
    act(()=>{
      AuthenticationService.handleLogout()
    })
    
    // post-conditions
    expect(NavigationService.navigate).toBeCalledWith(SCREENS.LANDING);
    
  });
});
