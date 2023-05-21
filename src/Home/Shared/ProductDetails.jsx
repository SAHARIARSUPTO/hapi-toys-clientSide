import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import PrivateRoute from "../../PrivateRoute";
const ProductDetails = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    
    fetch(
      `https://hapi-hapi-toys-sahariarsupto.vercel.app/products/${productId}`
    )
      .then((response) => response.json())
      .then((data) => setProduct(data))
      .catch((error) => {
        console.error("Error fetching product details:", error);
      });
  }, [productId]);

  if (!product) {
    return <button type="button" className="bg-indigo-500 ... rounded-l text-white text-justify justify-center mx-10" disabled>
    <svg className="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24">
    
    </svg>
    Processing...
  </button>;
  }

  return (
    
    <div className="card card-side bg-base-100 shadow-xl justify-center px-56">
      <figure>
        <img
          src={product.image}
          alt=""
        />
      </figure>
      <div className="card-body ">
        <h2 className="card-title py-20">{product.toyName} <br /> Price: {product.price}Tk <br />Seller: {product.sellerName} <br /> Offer price(including Delivery Charge): {product.price} Tk<br /> Ratings: {product.ratings} <br /> Available Quantity: {product.quantity} <br /></h2>
        <div className="card-actions justify-start">
            <PrivateRoute>
            <button className="btn btn-primary">Buy ASAP</button>
            </PrivateRoute>
          
          <Link to="/" className="btn btn-primary">Return Home</Link>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
