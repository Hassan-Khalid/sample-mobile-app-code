// userSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { currentUser } from 'common/declarations/global';

interface UserState {
  user: currentUser | null;
  bottomTab:string
}

export const initialState: UserState = {
  user: null,
  bottomTab:'WORK_ORDER'
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<{ currentUser: currentUser}>) => {
      state.user = action.payload.currentUser;
    },
    setBottomTab: (state, action: PayloadAction<{ bottomTab:string}>) => {
      state.bottomTab = action.payload.bottomTab;
    },
  },
});

export const { setUser,setBottomTab } = userSlice.actions;
export default userSlice.reducer;
