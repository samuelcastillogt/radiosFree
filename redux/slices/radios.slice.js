import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  radios: [],
}

export const radiosSlice = createSlice({
  name: 'radios',
  initialState,
  reducers: {
    SET_RADIOS: (state, action) => {
      state.radios = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { SET_RADIOS } = radiosSlice.actions

export default radiosSlice.reducer