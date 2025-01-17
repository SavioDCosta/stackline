// src/app/productSlice.ts
import { createSlice } from "@reduxjs/toolkit";
import { Product } from "../types";
import data from "../data.json";

const productFromJson = (data as Product[])[0];

interface ProductState {
  product: Product | null;
  status: "idle" | "loading" | "success" | "error";
}

const initialState: ProductState = {
  product: null,
  status: "idle",
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    loadProductData: (state) => {
      // For a real API call, you might fetch asynchronously in an extraReducer or thunk.
      // Here, we just load from the local JSON:
      state.product = productFromJson;
      state.status = "success";
    },
  },
});

export const { loadProductData } = productSlice.actions;
export default productSlice.reducer;
