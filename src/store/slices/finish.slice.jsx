import { createSlice } from '@reduxjs/toolkit';

const finishSlice = createSlice({
  name: 'finish',
  initialState: {
    end: false
  },
  reducers: {
    setFinish: (state,action)=>action.payload
  },
})

export const { setFinish } = finishSlice.actions
export default finishSlice.reducer