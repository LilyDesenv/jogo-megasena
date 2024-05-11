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

      //verificando se não há números repetidos
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

      //colocando os números em ordem crescente
      const arrayNumeros = [
        state.n1,
        state.n2,
        state.n3,
        state.n4,
        state.n5,
        state.n6
      ]
      let aux = 0
      for (let i = 0; i < arrayNumeros.length; i++) {
        for (let j = 0; j < arrayNumeros.length - 1; j++) {
          if (arrayNumeros[j] > arrayNumeros[j + 1]) {
            aux = arrayNumeros[j]
            arrayNumeros[j] = arrayNumeros[j + 1]
            arrayNumeros[j + 1] = aux
          }
        }
      }
      state.n1 = arrayNumeros[0]
      state.n2 = arrayNumeros[1]
      state.n3 = arrayNumeros[2]
      state.n4 = arrayNumeros[3]
      state.n5 = arrayNumeros[4]
      state.n6 = arrayNumeros[5]
    }
  }
})

export const { generateNumbers } = numberSlice.actions
export default numberSlice.reducer
