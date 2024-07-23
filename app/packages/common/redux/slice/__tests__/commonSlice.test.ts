import reducer, { initialState, setConnectionMode, setLoading, setOfflineData,setShouldPreventLandingNavigation } from '../commonSlice';

describe('CommonSlice', () => {
  
  it('should handle setLoading', () => {
    // exercise
    const result = reducer(initialState, { type: setLoading.type, payload: true });

    // post-condition
    expect(result.loading).toBeTruthy();
  });
  
  
  it('should handle ConnectionMode',()=>{
    const result = reducer(initialState, { type: setConnectionMode.type, payload: true });
    
    // post-condition
    expect(result.isOffline).toBeTruthy();
  })
  
  it('should handle PreventLandingNavigation false',()=>{
    const result = reducer(initialState, { type: setShouldPreventLandingNavigation.type, payload: false });
    
    // post-condition
    expect(result.isOffline).toBeFalsy();
  })
  
  
  it('should set Offline data',()=>{
    const result = reducer(initialState, { type: setOfflineData.type, payload: {user:'test'} });
    
    // post-condition
    expect(result.offlineData).not.toBeNull();
  })
  
});
