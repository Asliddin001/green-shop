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
    reomeFlower(statem, action) {},
  },
});

export const flowerAction = flowersSlice.actions;
export default flowersSlice;

/* import { createSlice } from "@reduxjs/toolkit";

const flowersSlice = createSlice({
  name: "flowers",
  initialState: {
    totalPrice: 0,
    flowers: [],
  },
  reducers: {
    addFlower(state, action) {
      const existingFlower = state.flowers.find(
        (flower) => flower.id === action.payload.id
      );

      if (existingFlower) {
        existingFlower.count++;
      } else {
        const newFlower = { ...action.payload, count: 1 };
        state.flowers.unshift(newFlower);
      }
    },
    removeFlower(state, action) {},
  },
});

export const flowerAction = flowersSlice.actions;
export default flowersSlice;
 */
