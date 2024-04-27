import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type numbersState = {
  n1: number
  n2: number
  n3: number
  n4: number
  n5: number
  n6: number
}

const initialState: numbersState = {
  n1: 0,
  n2: 0,
  n3: 0,
  n4: 0,
  n5: 0,
  n6: 0
}

const getRandom = () => {
  return Math.floor(Math.random() * 60) + 1
}

const numberSlice = createSlice({
  name: 'numbers',
  initialState,
  reducers: {
    generateNumbers: (state) => {
      state.n1 = getRandom()
      state.n2 = getRandom()
      state.n3 = getRandom()
      state.n4 = getRandom()
      state.n5 = getRandom()
      state.n6 = getRandom()
      if (state.n1 === state.n2 && state.n1 !== 0) {
        state.n2 = getRandom()
      }
      if ((state.n1 === state.n3 || state.n2 === state.n3) && state.n1 !== 0) {
        state.n3 = getRandom()
      }
      if (
        (state.n1 === state.n4 ||
          state.n2 === state.n4 ||
          state.n3 === state.n4) &&
        state.n1 !== 0
      ) {
        state.n4 = getRandom()
      }
      if (
        (state.n1 === state.n5 ||
          state.n2 === state.n5 ||
          state.n3 === state.n5 ||
          state.n4 === state.n5) &&
        state.n1 !== 0
      ) {
        state.n5 = getRandom()
      }
      if (
        (state.n1 === state.n6 ||
          state.n2 === state.n6 ||
          state.n3 === state.n6 ||
          state.n4 === state.n6 ||
          state.n5 === state.n6) &&
        state.n1 !== 0
      ) {
        state.n6 = getRandom()
      }
    }
  }
})

export const { generateNumbers } = numberSlice.actions
export default numberSlice.reducer
