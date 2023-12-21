import { createSlice } from "@reduxjs/toolkit";

const flowersSlice = createSlice({
  name: "flowers",
  initialState: {
    totalPrice: 0,
    flowers: [],
  },
  reducers: {
    addFlower(state, action) {
      const flowers = state.flowers.find(
        (flowers) => flowers.id === action.payload.id
      );

      if (flowers) {
        flowers.count++;
      } else {
        action.payload.count = 1;
        state.flowers.unshift(action.payload);
      }
    },
    reomeFlower(state, action) {
      const flowers = state.flowers.find(
        (flowers) => flowers.id === action.payload.id
      );

      if (flowers) {
        flowers.count--;
      } else {
        action.payload.count = 1;
        state.flowers.unshift(action.payload);
      }
    },
  },
});

export const flowerAction = flowersSlice.actions;
export default flowersSlice;
