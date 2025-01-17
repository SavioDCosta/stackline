import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadProductData } from "./app/productSlice";
import ProductPage from "./pages/ProductPage/ProductPage";
import Header from "./components/Header/Header";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadProductData());
  }, [dispatch]);

  return (
    <div className="app-container">
      <Header />
      <ProductPage />
    </div>
  );
}

export default App;
