import { createSlice } from '@reduxjs/toolkit'

const checkboxSlice = createSlice({
  name: 'checkbox',
  initialState: false,
  reducers: {
    toggleCheckbox: (state) => {
      return !state
    },
  },
})

export const { toggleCheckbox } = checkboxSlice.actions
export default checkboxSlice.reducer
