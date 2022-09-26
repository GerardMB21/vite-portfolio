import { createSlice } from "@reduxjs/toolkit";

const selectedSlice = createSlice({
  name: 'selected',
  initialState: 1,
  reducers: {
    setSelected: (state,action)=>action.payload
  },
})

export const { setSelected } = selectedSlice.actions
export default selectedSlice.reducer