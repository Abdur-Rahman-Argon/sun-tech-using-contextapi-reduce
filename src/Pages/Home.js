import React from "react";
import ProductCard from "../components/ProductCard";
import { useProduct } from "../context/ProductProvider";

const Home = () => {
  const context = useProduct();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {context?.products?.map((product) => (
        <ProductCard key={product._id} product={product} />
      ))}
    </div>
  );
};

export default Home;
