import { createSlice } from "@reduxjs/toolkit";

const elementsSlice = createSlice({
  name: 'elements',
  initialState: [
    {
      "id": 1,
      "name": "About.jsx",
      "icon": "react"
    },
  ],
  reducers: {
    setAgreeElements: (state,action)=>{
      state.push(action.payload);
    },
    setDeleteElements: (state,action)=>action.payload
  },
})

export const { setAgreeElements, setDeleteElements } = elementsSlice.actions
export default elementsSlice.reducer