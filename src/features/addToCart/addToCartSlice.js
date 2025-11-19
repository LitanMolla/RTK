import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: JSON.parse(localStorage.getItem('cart')) || [],
}

const setLocal = (value) => {
  localStorage.setItem('cart', JSON.stringify(value))
}

export const addToCartSlice = createSlice({
  name: 'addtocart',
  initialState,
  reducers: {
    cart: (state, action) => {
      state.value.push(action.payload)
      setLocal(state.value)
    },
  },
})

export const { cart } = addToCartSlice.actions

export default addToCartSlice.reducer