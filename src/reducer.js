import { createSlice } from "@reduxjs/toolkit";
const initialState={
    cartvalues:[],
    totalprice:0
    
}
const cartReducer=createSlice({
    name:"Reducer",
    initialState,
    reducers:{
        incrementcart:(state,action)=>{
            state.cartvalues.push(action.payload)
            state.totalprice = state.cartvalues.reduce((total, item) => total + item.productprice, 0);
        },
        decrementcart: (state, action) => {
            const index = state.cartvalues.findIndex(item => item.productname === action.payload.productname);
            if (index !== -1) {
              const removedItem = state.cartvalues.splice(index, 1)[0];
              state.totalprice -= removedItem.productprice;
            }
            // Reset total price to 0 if the cart is empty
            if (state.cartvalues.length === 0) {
              state.totalprice = 0;
            }
          }
    }

})
export const {incrementcart,decrementcart}=cartReducer.actions;
export default cartReducer.reducer;