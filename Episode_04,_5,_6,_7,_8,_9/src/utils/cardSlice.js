import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItems: (state, action) => {
      const {item, quantity} = action.payload;
      const indexProductId = state.items.findIndex((oneItem) => oneItem.item?.info?.id === item?.info?.id);
      if(indexProductId >=0){
        state.items[indexProductId].quantity += quantity;
      }else{
        state.items.push({item,quantity});
      }
      
    },
    removeItems: (state, action) => {
      state.items.filter((item,index) => {
        if(item.quantity === 0){
          
        }
        item.quantity -= quantity;
      })
    },
    clearItems: (state) => {
      state.items.length = 0;
    },
  },
});

export const { addItems, removeItems, clearItems } = cartSlice.actions;

export default cartSlice.reducer;
