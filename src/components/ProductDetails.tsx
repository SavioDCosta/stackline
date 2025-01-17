import React from "react";
import { Product } from "../types";
import "./ProductDetails.css";

interface ProductDetailsProps {
  product: Product;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ product }) => {
  const { image, title, subtitle, tags } = product;

  return (
    <div className="product-details">
      <img src={image} alt={title} className="product-image" />

      <h3 className="product-title">{title}</h3>
      <p className="product-subtitle">{subtitle}</p>

      <div className="tag-container">
        {tags.map((tag) => (
          <span key={tag} className="product-tag">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProductDetails;
