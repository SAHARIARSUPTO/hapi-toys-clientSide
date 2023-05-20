import { useEffect, useState } from "react";
import "./Product.css";

const ProductsCard = () => {
  const [products, setProducts] = useState([]);
  const [activeTab, setActiveTab] = useState("All");

  useEffect(() => {
    fetch("https://hapi-toys-server-sahariarsupto.vercel.app/products")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => {
        console.error("Error fetching team data:", error);
      });
  }, []);

  // Filter products based on the active tab
  const filteredProducts = activeTab === "All" ? products : products.filter((product) => product.category === activeTab);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
 <div className="tab-container text-center justify-center">
  <button className={`bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-xl mx-1 ${activeTab === "All" ? "active" : ""}`} onClick={() => handleTabClick("All")}>
    All
  </button>
  <button className={`bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-xl mx-1 ${activeTab === "Marvel" ? "active" : ""}`} onClick={() => handleTabClick("Marvel")}>
    Marvel
  </button>
  <button className={`bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-xl mx-1 ${activeTab === "Disney" ? "active" : ""}`} onClick={() => handleTabClick("Disney")}>
    Disney
  </button>
  <button className={`bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-xl mx-1 ${activeTab === "Regular" ? "active" : ""}`} onClick={() => handleTabClick("Regular")}>
    Regular
  </button>
</div>

    <div className="product-parent justify-items-center">
      {filteredProducts.map((product) => (
        <div key={product.id} className="card w-96 bg-base-100 shadow-xl my-10">
          <figure>
            <img src={product.image} alt={product.toyName} />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {product.toyName} <br />
              Price: {product.price} Tk
              <div className="badge badge-secondary">NEW</div>
            </h2>
            <p></p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">Ratings:</div>
              <div className="badge badge-outline">{product.ratings}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default ProductsCard;
