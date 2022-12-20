import Products from "../components/Products";

const Home = () => {
  return (
    <>
      <div className="hero py-4 bg-red-100">
        <div className="container mx-auto items-center justify-between">
          <div className="mx-5 md:flex">
            <div className="w-1/2 pt-[14px]">
              <h6 className="text-lg">
                <em>Are you hungry!</em>
              </h6>
              <h1 className=" text-3xl md:text-4xl font-bold"> Don't wait</h1>
              <button className=" px-4 py-4 rounded-full text-white font-bold mt-4 bg-yellow-500 hover:bg-yellow-600">
                Order Now
              </button>
            </div>
            <div className="mt-10 md:w-1/2 md:mt-0">
              <img className="md:w-4/5" src="/images/pizza.webp" alt="pizza" />
            </div>
          </div>
        </div>
      </div>

      <div className="pb-24">
        <Products />
      </div>       
    </>
  );
};

export default Home;
