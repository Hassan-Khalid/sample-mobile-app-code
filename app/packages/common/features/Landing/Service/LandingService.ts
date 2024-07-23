import { AnyType, ILandingService } from 'common/declarations/types';
// @ts-ignore
import { useGetCurrentUser } from '../../../../apollo/services';


class LandingService  implements ILandingService {
  
  public getUser():  AnyType{
    const { currentUser, loading ,refetch,error} = useGetCurrentUser();
    
    return {
      loading,
      currentUser,
      refetch
    }
  }
}

export default LandingService;


