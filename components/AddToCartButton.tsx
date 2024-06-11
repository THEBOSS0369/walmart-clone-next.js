import { IProduct } from "@/typings/searchTyping";
import React from "react";

const AddToCartButton = ({ product }: { product: IProduct }) => {
  return <div>{product.brand}</div>;
};

export default AddToCartButton;
