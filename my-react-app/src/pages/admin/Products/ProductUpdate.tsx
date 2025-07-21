import React from "react";
import { useParams } from "react-router-dom";

const ProductUpdate = () => {
  const { id } = useParams();
  return <div>Update product: {id}</div>;
};

export default ProductUpdate;
