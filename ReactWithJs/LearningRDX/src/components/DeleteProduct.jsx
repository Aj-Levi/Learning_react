import React from "react";
import { useDeleteProductMutation } from "../App/Services/productsData.js";

const DeleteProduct = () => {
  const [deleteProduct, { data, error, isLoading }] =
    useDeleteProductMutation();

  if (error) {
    return <h1>ERRROR</h1>;
  }

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  const handleDeleteProduct = async () => {
    try {
      await deleteProduct(4);
    } catch (err) {
      console.error("Error deleting product:", err);
    }
  };

  return (
    <div>
      <h1>{data?.title ? `${data.title} successfully deleted` : ""}</h1>

      <button onClick={handleDeleteProduct} disabled={isLoading}>
        Delete Product
      </button>
    </div>
  );
};

export default DeleteProduct;
