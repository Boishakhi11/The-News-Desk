import React from "react";
import { use } from "react";
import { NavLink } from "react-router";
const catgoriesName = fetch("/categories.json").then((res) => res.json());

const Categories = () => {
  const categories = use(catgoriesName);
  return (
    <div>
      <h1 className="font-semibold text-xl">
        All Category ({categories.length})
      </h1>
      <div className="grid gap-3 mt-3.5">
        {categories.map((category) => (
          <NavLink
            key={category.id}
            className="text-accent font-semibold hover:text-black"
            to={`/category/${category.id}`}
          >
            {category.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Categories;
