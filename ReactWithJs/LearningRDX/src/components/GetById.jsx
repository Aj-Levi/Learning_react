import React, { useState } from "react";
import { useGetProductByIdQuery } from "../App/Services/productsData.js";

const GetById = () => {
    
  const [Id, setId] = useState(1);

  const { data , isLoading , isError } = useGetProductByIdQuery(Id)

  return (
    <div>
      <div>
        <input
          type="number"
          name="idofproduct"
          id="idofproduct"
          value={Id}
          onChange={(e) => setId(e.target.value)}
          placeholder="1"
        />
      </div>
      <div>
        {isError ? (
          <div> Some error occured </div>
        ) : isLoading ? (
          <div> Loading </div>
        ) : (
          <div key={data.id}>
            <h2> {data.title} </h2>
            <p> {data.description} </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default GetById;
