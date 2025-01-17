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
      state.product = productFromJson;
      state.status = "success";
    },
  },
});

export const { loadProductData } = productSlice.actions;
export default productSlice.reducer;
