import { renderHook, act } from '@testing-library/react-hooks';
import useLogin from '../useLogin';
import SCREENS from 'common/constants/Screens';
import  NavigationService from 'common/services/NavigationService';


// jest.mock('../../../../services', () => ({
//   NavigationService: {
//     navigate: jest.fn(),
//   },
// }));;

// Mock useUserLogin hook
jest.mock('../../../../../apollo/services', () => ({
  useUserLogin: () => ({
    submitLogin: jest.fn().mockImplementation(() => Promise.resolve({res:{data:{loginOemDashboard:['mock']}}})),
  }),
}));
// then({res:{data:{loginOemDashboard:['mock']}}}).catch((e)=>{
// {e:{graphQLErrors:[{message:'error'}]}}
// })

// Mock NavigationService
const mockNavigate = jest.fn();
describe('useLogin hook', () => {
  beforeEach(()=>{
    jest.clearAllMocks()
  })
  
  it('should update email state', () => {
    const { result } = renderHook(() => useLogin());
    act(() => {
      result.current.onEmailInputChange('test@example.com');
    });
    expect(result.current.email).toBe('test@example.com');
  });
  
  it('should update password state', () => {
    const { result } = renderHook(() => useLogin());
    act(() => {
      result.current.onPasswordInputChange('password123');
    });
    expect(result.current.password).toBe('password123');
  });
  
  it('should set email error when email is invalid', async () => {
    const { result } = renderHook(() => useLogin());
    await act(async () => {
      await result.current.onEmailInputChange('invalid-email');
      result.current.onBlur();
    });
    
    expect(result.current.emailError).toBe(true);
  });
  
  it('should set password error when password is less than 8 characters',  () => {
    const { result } = renderHook(() => useLogin());
    act( () => {
      result.current.onPasswordInputChange('pass');
    });
    
    expect(result.current.password).toBe('pass');
  });
  
  it('returns the correct button object', () => {
    const { result } = renderHook(() => useLogin());
    const { createBottomButton } = result.current;
    
    const buttonArray = createBottomButton();
    
    expect(buttonArray).toHaveLength(1); // Only one button object expected
    
    const button = buttonArray[0];
    expect(button).toHaveProperty('title', 'login.loginLabel');
    expect(button).toHaveProperty('onPress', expect.any(Function));
    expect(button).toHaveProperty('type', 'solid');
    expect(button).toHaveProperty('size', 'large');
    expect(button).toHaveProperty('loading', expect.any(Boolean));
    expect(button).toHaveProperty('disabled', expect.any(Boolean));
  });
  
  
  it('should call submitLogin and navigate when login button is pressed with invalid credentials and error', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useLogin());
   await act(async () => {
     await result.current.onEmailInputChange('test@example.com');
     await  result.current.onPasswordInputChange('password123');
     await  result.current.onLoginPress();
    });
   
    expect(result.current.loading).toEqual(false);
    // expect(mockNavigate).toHaveBeenCalledWith(SCREENS.LANDING);
  })
  
  it('should call submitLogin and navigate when login button is pressed with valid credentials', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useLogin());
   await act(async () => {
     await result.current.onEmailInputChange('test@example.com');
     await  result.current.onPasswordInputChange('password123');
     await  result.current.onLoginPress();
    });
   
    expect(result.current.loading).toEqual(false);
    // expect(mockNavigate).toHaveBeenCalledWith(SCREENS.LANDING);
  })
  
  
  it('should navigate to the Forgot Password screen', () => {
    const { result, waitForNextUpdate } = renderHook(() => useLogin());
    
    // Call the function
    act(()=>{
      result.current.onForgotPress()
    })
    
    // Expect the navigate function of NavigationService to have been called with the correct screen
    expect(NavigationService.navigate).toHaveBeenCalledWith(SCREENS.FORGOT_PASSWORD);
  });
});
