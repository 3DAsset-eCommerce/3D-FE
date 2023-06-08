import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface TagState {
  selectedTags: string[]
}

const initialState: TagState = {
  selectedTags: [],
}

const tagSlice = createSlice({
  name: 'tag',
  initialState,
  reducers: {
    setSelectedTags: (state, action: PayloadAction<string[]>) => {
      return {
        ...state,
        selectedTags: action.payload,
      }
    },
  },
})

export const { setSelectedTags } = tagSlice.actions
export default tagSlice.reducer
