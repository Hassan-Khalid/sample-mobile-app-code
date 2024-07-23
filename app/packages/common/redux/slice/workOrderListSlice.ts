// userSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { WorkOrderListTypeObject } from 'common/declarations/global';

export interface WorkOrderListState {
  workOrders: [WorkOrderListTypeObject] | [];
  myWorkOrders: [WorkOrderListTypeObject] | []
}

export const initialState: WorkOrderListState = {
  workOrders: [],
  myWorkOrders:[]
};

const WorkOrderSlice = createSlice({
  name: 'WorkOrderList',
  initialState,
  reducers: {
    setWorkOrderList: (state, action: PayloadAction<{ workOrders: [WorkOrderListTypeObject]}>) => {
      state.workOrders = action.payload.workOrders;
    },
    setMyWorkOrderList: (state, action: PayloadAction<{ myWorkOrders:[WorkOrderListTypeObject]}>) => {
      state.myWorkOrders = action.payload.myWorkOrders;
    },
  },
});

export const { setWorkOrderList,setMyWorkOrderList } = WorkOrderSlice.actions;
export default WorkOrderSlice.reducer;
