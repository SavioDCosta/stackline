import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../app/store";
import ProductDetails from "../components/ProductDetails";
import SalesChart from "../components/SalesChart";
import SalesTable from "../components/SalesTable";
import "./ProductPage.css";

const ProductPage: React.FC = () => {
  const { product, status } = useSelector((state: RootState) => state.product);

  if (status === "idle") {
    return <div>Loading...</div>;
  }

  if (!product) {
    return <div>No product data available.</div>;
  }

  return (
    <div className="page-layout">
      <div className="sidebar-panel">
        <ProductDetails product={product} />
      </div>

      <div className="main-panel">
        <div className="chart-card">
          <SalesChart salesData={product.sales} />
        </div>

        <div className="table-card">
          <SalesTable salesData={product.sales} />
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
