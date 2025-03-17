import React from "react";
import { useGetAllProductsQuery } from "../App/Services/productsData.js";

const AllProducts = () => {
  const { data, isError, isLoading } = useGetAllProductsQuery();

  if (isError) {
    return <div> Some error occured </div>;
  }

  if (isLoading) {
    return <div> Loading.. </div>;
  }

  if (!isError && !isLoading) {
    return (
        <div>
            {data.products.map(product => (
                <div key={product.id}>
                    <h2> {product.title} </h2>
                    <p> {product.description} </p>
                </div>
            ))}
        </div>
    )
  }
};

export default AllProducts;
