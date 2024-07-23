// userSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type CommonState = {
  isOffline: boolean | undefined;
  loading: boolean;
  offlineData: {} | null;
  shouldPreventLandingNavigation: boolean;
};

export const initialState: CommonState = {
  isOffline: false,
  loading:false,
  offlineData:{},
  shouldPreventLandingNavigation: true
};

const commonSlice = createSlice({
  name: 'common',
  initialState,
  reducers: {
    setLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },
    setConnectionMode(state, action: PayloadAction<boolean>) {
      state.isOffline = action.payload
    },
    setOfflineData(state, action: PayloadAction<{} | undefined>) {
      state.offlineData = action.payload || null;
    },
    setShouldPreventLandingNavigation(state, action: PayloadAction<boolean>) {
      state.shouldPreventLandingNavigation = action.payload;
    }
  },
});

export const {
  setLoading,
  setConnectionMode,
  setOfflineData,
  setShouldPreventLandingNavigation,
} = commonSlice.actions
export default commonSlice.reducer;
