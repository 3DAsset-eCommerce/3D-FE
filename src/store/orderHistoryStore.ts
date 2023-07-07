import { configureStore } from '@reduxjs/toolkit'
import clickedOrderHistoryReducer from './clickedOrderHistorySlice'
import userReducer from './userSlice'
import { store } from './store'

export const orderHistoryStore = configureStore({
  reducer: {
    clickedOrderHistory: clickedOrderHistoryReducer,
    user: userReducer,
  },
})

export type OrderHistoryState = ReturnType<typeof store.getState>
