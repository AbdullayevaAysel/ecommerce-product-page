import { createSlice } from "@reduxjs/toolkit"

let local = JSON.parse(localStorage.getItem("products"))
const initialState = {
  basket: local?.length > 0 && local ? local : [],
}

function addToStorage(data) {
  localStorage.setItem("products", JSON.stringify(data))
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
        existingProduct.oldCount += action.payload.count
        existingProduct.count = action.payload.count
      } else {
        state.basket.push(action.payload)
      }

      addToStorage(state.basket)
    },
    deleteProducts: (state, action) => {
      let newBasket = state.basket.filter(
        (product) => product.id !== action.payload.id
      )
      state.basket = newBasket
      addToStorage(newBasket)
    },
  },
})

export const { addToProducts, deleteProducts } = productSlice.actions
export default productSlice.reducer
