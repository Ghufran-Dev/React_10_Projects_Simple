import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: "",
}

export const foodSlice = createSlice({
  name: 'food_data',
  initialState,
  reducers: {
    foodData: (state, action) => {
      state.value = action.payload
    }
  },
})

export const { foodData } = foodSlice.actions

export default foodSlice.reducer