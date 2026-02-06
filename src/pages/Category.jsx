import React from "react";
import { useParams } from "react-router";

const Category = () => {
  const { id } = useParams();

  return (
    <div>
      <h1>CategoryNews ({id})</h1>
    </div>
  );
};

export default Category;
