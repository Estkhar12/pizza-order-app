import { useEffect, useState } from "react";
import Product from "./Product";
import axios from "axios";

const Products = () => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await axios.get(
          "https://star-spark-pasta.glitch.me/api/products"
        );
        setProducts(result.data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  return (
    <>
      <div className="container mx-auto pb-24">
        <h1 className="text-lg font-bold my-8 ml-5">Products</h1>
        <div className="grid grid-cols-2 my-8 md:grid-cols-3 lg:grid-cols-5 lg:gap-2">
          {products.map((product) => (
            <Product product={product} key={product._id} />
          ))}
        </div>
      </div>
    </>
  );
};
export default Products;
