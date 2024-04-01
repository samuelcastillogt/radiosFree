import { configureStore } from '@reduxjs/toolkit'
import radiosSlice from './slices/radios.slice'
export const store = configureStore({
  reducer: {
    radios: radiosSlice
  },
})