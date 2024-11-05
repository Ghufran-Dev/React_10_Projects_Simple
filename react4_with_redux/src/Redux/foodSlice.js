import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: "",
}

export const foodSlice = createSlice({
  name: 'foodData',
  initialState,
  reducers: {
    data: (state, action) => {
      state.value = action.payload
    },
    // searchData: (state, action) => {
    //   state.searchValue = action.payload.toLowerCase()
    // },
    filteredData: (state,action) => {
      state.filteredValue = action.payload
    }
  }
})

export const { data, searchData, filteredData } = foodSlice.actions

export default foodSlice.reducer