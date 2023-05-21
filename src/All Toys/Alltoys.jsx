import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Alltoys = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://hapi-hapi-toys-sahariarsupto.vercel.app/products")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => {
        console.error("Error fetching product data:", error);
      });
  }, []);

  if (!products) {
    return (
      <button
        type="button"
        className="bg-red-500 ... rounded-l text-white text-justify justify-center mx-10"
        disabled
      >
        <svg className="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24"></svg>
        Processing...
      </button>
    );
  }

  return (
    <div className="flex justify-center">
      <div className="product-parent">
        <table className="table w-full">
          <thead>
            <tr>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Category</th>
              <th className="px-4 py-2">Price</th>
              <th className="px-4 py-2">Quantity</th>
              <th className="px-4 py-2">Ratings</th>
              <th className="px-4 py-2">Seller</th>
              <th className="px-4 py-2">Product ID</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td className="border px-4 py-2">{product.toyName}</td>
                <td className="border px-4 py-2">{product.category}</td>
                <td className="border px-4 py-2">{product.price} Tk</td>
                <td className="border px-4 py-2">{product.quantity}</td>
                <td className="border px-4 py-2">{product.ratings}</td>
                <td className="border px-4 py-2">{product.sellerName}</td>
                <td className="border px-4 py-2">{product._id}</td>
                <td className="border px-4 py-2">
                  <Link
                    to={`/details/${product._id}`}
                    className="btn btn-success mx-2"
                  >
                    Details
                  </Link>
                </td>
                
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Alltoys;
