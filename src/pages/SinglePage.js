import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const SinglePage = () => {
  const [product, setProduct] = useState({});
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const getId = async () => {
      try {
        const result = await axios.get(
          `https://star-spark-pasta.glitch.me/api/products/${params._id}`
        );
        setProduct(result.data);
      } catch (error) {
        console.log(error);
      }
    };
    getId();
  }, [params._id]);

  return (
    <div className="container mx-auto mt-12">
      <button className="mb-12 font-bold" onClick={() => navigate("/")}>
        Back
      </button>
      <div className="flex">
        <img
          className="box-border h-32 w-32 p-4 border-4 ..."
          src={product.image}
          alt="pizza"
        />
        <div className="ml-6">
          <h1 className="text-xl font-bold">{product.name}</h1>
          <div className="text-md">{product.size}</div>
          <div className="font-bold mt-2">₹ {product.price}</div>
          <button className="bg-yellow-500 py-1 rounded-full px-8 font-bold mt-4 hover:bg-yellow-600">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default SinglePage;
