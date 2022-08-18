
import {   configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import counterSlice from './counterSlice'
import formSlice  from './formSlice'
export const store = configureStore({
  reducer: {
    counter:counterSlice,
    form:formSlice
  },
  middleware:[thunk]
 },
)