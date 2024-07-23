import { AnyType, ILandingService } from 'common/declarations/types';
// @ts-ignore
import { useGetCurrentUser } from '../../../../apollo/services';
import { useDispatch } from 'react-redux';
import { setUser } from 'common/redux/slice/userSlice';


class LandingService  implements ILandingService {
  
  public getUser():  AnyType{
    const { currentUser, loading ,refetch,error} = useGetCurrentUser();
    const dispatch = useDispatch();
    dispatch(setUser({currentUser:currentUser}))
    
    return {
      loading,
      currentUser,
      refetch
    }
  }
}

export default LandingService;


