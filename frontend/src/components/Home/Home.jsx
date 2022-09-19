import React, { useEffect } from "react";
import { CgMouse } from "react-icons/all";
import "./Home.css";
import { useDispatch, useSelector } from "react-redux";
import { useAlert } from "react-alert";
import Product from './ProductCard.jsx'
import MetaData from "../layout/MetaData";
import { clearErrors ,getProduct } from "../../actions/productAction";
import Loader from "../layout/Loader/Loader";



// const product = {
//   name: "React app",
//   images: [{ url: "https://i.ibb.co/DRST11n/1.webp" }],
//   price: "300$",
//   _id: "dasdasdasd"
// }



const Home = () => {
  const alert = useAlert();
  const dispatch = useDispatch();
  const { loading, error, products } = useSelector(
    (state) => state.products
  )


  useEffect(() => {
    if(error){
      alert.error(error);
      dispatch(clearErrors())
    }
    
    dispatch(getProduct());
  }, [dispatch, error, alert])

  return (
    <>
      {loading ? <Loader /> : (
        <>
          <MetaData title="ECOMMERCE" />
          <div className="banner">
            <p>Welcome to Ecommerce</p>
            <h1>FIND AMAZING PRODUCTS BELOW</h1>

            <a href="#container">
              <button>
                Scroll <CgMouse />
              </button>
            </a>
          </div>

          <h2 className="homeHeading">Featured Products</h2>

          <div className="container" id="container">
            {products && products.map(product => (
              <Product product={product} />
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default Home;