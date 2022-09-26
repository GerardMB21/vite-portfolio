import { createSlice } from '@reduxjs/toolkit';

const toggleSlice = createSlice({
  name: 'toggle',
  initialState: false,
  reducers: {
    setToggleSlice: (state,action)=>action.payload
  },
})

export const { setToggleSlice } = toggleSlice.actions
export default toggleSlice.reducer