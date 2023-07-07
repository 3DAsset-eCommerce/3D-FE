import { UserId } from '@/api/interface/auth'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface UserState {
  userId: number | null
}

const initialState: UserState = {
  userId: null,
}

const userSlice = createSlice({
  // name: 'tag',
  name: 'user',
  initialState,
  reducers: {
    setUser: (state: UserId, action: PayloadAction<number>) => {
      state.userId = action.payload
    },
  },
})

export const { setUser } = userSlice.actions
export default userSlice.reducer
