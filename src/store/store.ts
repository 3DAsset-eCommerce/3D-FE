'use client'

import { configureStore } from '@reduxjs/toolkit'
import drawerReducer from './drawerSlice'
import clickedAssetReducer from './clickedAssetSlice'
import categoryReducer from './setSelectedCategory'
import tagReducer from './tagSlice'

export const store = configureStore({
  reducer: {
    drawer: drawerReducer,
    clickedAsset: clickedAssetReducer,
    category: categoryReducer,
    tag: tagReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
