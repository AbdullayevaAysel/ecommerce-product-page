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
    }
  },
})

export const { addToProducts } = productSlice.actions
export default productSlice.reducer
