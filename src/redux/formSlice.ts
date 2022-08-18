import { createSlice } from "@reduxjs/toolkit";
import { AshFormIntitalState } from "../utils/inputHelper";

export const formSlice = createSlice({
  name:'formSlice',
  initialState:{
    value:AshFormIntitalState
  },
  reducers:{
    addState:(state,action)=>{
      state.value=action.payload;
    }
  }
});
export default formSlice.reducer
export const {addState} = formSlice.actions
