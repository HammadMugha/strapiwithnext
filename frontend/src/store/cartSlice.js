import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cartItems:[]
}

 const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state,action)=>{
        state.cartItems.push(action.payload)
    }
  },
})

// Action creators are generated for each case reducer function
export const { addToCart } = cartSlice.actions

export default cartSlice.reducer