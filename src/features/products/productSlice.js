import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  basket: [],
}

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addToProducts: (state, action) => {
      let existingProduct = state.basket.find(
        (product) => product.id === action.payload.id
      )
      if (existingProduct) {
        existingProduct.count = action.payload.count
      } else {
        state.basket.push(action.payload)
      }
    },
    deleteProducts: (state, action) => {
      let newBasket = state.basket.filter(
        (product) => product.id !== action.payload.id
      )
      state.basket = newBasket
    },
  },
})

export const { addToProducts, deleteProducts } = productSlice.actions
export default productSlice.reducer
