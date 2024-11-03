import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './reducers/CounterSlice.jsx'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
})