import reducer, { initialState,setUser,setBottomTab  } from '../userSlice';

describe('userSlice', () => {
  
  it('should handle setUser', () => {
    const user = {
      _id:'111',
      name:'testUser',
    }
    // exercise
    const result = reducer(initialState, { type: setUser.type, payload: user });
    
    // post-condition
    expect(result.user).not.toBe(null);
  });
  
  
  it('should handle setBottom',()=>{
    const myWorkOrderTab = 'MY_WORK_ORDER'
    const result = reducer(initialState, { type: setBottomTab.type, payload: myWorkOrderTab });
    
    // post-condition
    expect(result.bottomTab).not.toBe('WORK_ORDER');
  })

  
});
