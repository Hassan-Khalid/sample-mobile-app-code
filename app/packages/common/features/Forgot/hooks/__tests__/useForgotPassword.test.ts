import { renderHook, act } from '@testing-library/react-hooks';
import useForgotPassword,{_state} from '../useForgotPassword';
// Mock forgotPassword mutation function
jest.mock('../../../../../apollo/services', () => ({
  forgotPassword: jest.fn(() => ({
    mutation: jest.fn(() => Promise.resolve({ data: { forgotPassword: 'Reset email sent' } })),
  })),
}));

// Mock useToast hook
jest.mock('react-native-toast-notifications', () => ({
  useToast: jest.fn(() => ({
    show: jest.fn(),
  })),
}));

// Mock NavigationService and SCREENS constants
jest.mock('../../../../services', () => ({
  NavigationService: {
    navigate: jest.fn(),
  },
}));
jest.mock('../../../../constants/Screens', () => ({
  LOGIN: 'LoginScreen',
}));

describe('useForgotPassword', () => {
  beforeEach(()=>{
    jest.clearAllMocks()
  })
  
  it('validates email correctly', () => {
    const { result } = renderHook(() => useForgotPassword());
    
    // Invalid email
    act(() => {
      result.current.onEmailInputChange('invalid-email');
      result.current.validateEmail();
    });
    expect(result.current.emailError).toBe(true);
    
    // Valid email
    act(() => {
      result.current.onEmailInputChange('valid@email.com');
      result.current.validateEmail();
    });
    expect(result.current.emailError).toBe(false);
  });
  
  it('sets loading state correctly', () => {
    const { result } = renderHook(() => useForgotPassword());
    
    // Initial loading state should be false
    expect(result.current.loading).toBe(false);
    
    // Set loading state to true
    act(() => {
      result.current.setLoading(true);
    });
    expect(result.current.loading).toBe(true);
    
    // Set loading state to false
    act(() => {
      result.current.setLoading(false);
    });
    expect(result.current.loading).toBe(false);
  });
  
  it('changes component state correctly', () => {
    const { result } = renderHook(() => useForgotPassword());
    
    // Initial component state should be EMAIL
    expect(result.current.state).toBe(_state.EMAIL);
    
    // Change component state to RESEND
    act(() => {
      result.current.setComponentState(_state.RESEND);
    });
    expect(result.current.state).toBe(_state.RESEND);
    
    // Change component state back to EMAIL
    act(() => {
      result.current.setComponentState(_state.EMAIL);
    });
    expect(result.current.state).toBe(_state.EMAIL);
  });
  
  it('handles onPressHandler correctly', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useForgotPassword());
    
    // Set valid email
    act(() => {
      result.current.onEmailInputChange('valid@email.com');
    });
    
    // Call onPressHandler
    await act(async () => {
      await result.current.onPressHandler();
    });
    
    // Check if component state is changed to RESEND
    expect(result.current.state).toBe(_state.RESEND);
  });
  
  it('creates bottom button correctly', () => {
    const { result } = renderHook(() => useForgotPassword());
    
    // Mock loading state to true
    act(() => {
      result.current.setLoading(true);
    });
    
    // Check button properties when loading
    const loadingButton = result.current.createBottomButton()[0];
    expect(loadingButton.title).toBe('login.forgotPassword.reset');
    expect(loadingButton.onPress).toBeDefined();
    expect(loadingButton.size).toBe('large');
    expect(loadingButton.loading).toBe(true);
    expect(loadingButton.disabled).toBe(false);
    
    // Mock loading state to false and invalid email
    act(() => {
      result.current.setLoading(false);
      result.current.setEmailError(true);
    });
    
    // Check button properties when email is invalid
    const invalidEmailButton = result.current.createBottomButton()[0];
    expect(invalidEmailButton.title).toBe('login.forgotPassword.reset');
    expect(invalidEmailButton.onPress).toBeDefined();
    expect(invalidEmailButton.size).toBe('large');
    expect(invalidEmailButton.loading).toBe(false);
    expect(invalidEmailButton.disabled).toBe(true);
    
    // Mock valid email and component state as RESEND
    act(() => {
      result.current.onEmailInputChange('valid@email.com');
      result.current.setComponentState(_state.RESEND);
    });
    
    // Check button properties when component state is RESEND
    const resendButton = result.current.createBottomButton()[0];
    expect(resendButton.title).toBe('login.thanks');
    expect(resendButton.onPress).toBeDefined();
    expect(resendButton.size).toBe('large');
    expect(resendButton.loading).toBe(false);
    expect(resendButton.disabled).toBe(false);
  });
  
});
