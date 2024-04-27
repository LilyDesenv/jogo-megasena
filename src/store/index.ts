import { configureStore } from '@reduxjs/toolkit'

import numberReducer from './reducers/number'

export const store = configureStore({
  reducer: {
    numbers: numberReducer
  }
})

export type RootReducer = ReturnType<typeof store.getState>
