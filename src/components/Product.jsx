import React, { useState } from "react";
import { useNavigate } from "react-router";
import image1 from "../assets/card/1.jpg";
import image2 from "../assets/card/2.jpg";
import image3 from "../assets/card/3.jpg";
import image4 from "../assets/card/4.jpg";
import image5 from "../assets/card//5.jpg";
import image6 from "../assets/card/6.jpg";

const Product = () => {
  const navigate = useNavigate();
  const [visibleCount, setVisibleCount] = useState(6);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const products = [
    {
      id: 1,
      name: "Organic cotton tote bag",
      price: "50 Rs.",
      oldPrice: "70 Rs.",
      reviews: "235 Reviews",
      image: image1,
    },
    {
      id: 2,
      name: "Hemp backpack",
      price: "999 Rs.",
      oldPrice: "1199 Rs.",
      reviews: "729 Reviews",
      image: image2,
    },
    {
      id: 3,
      name: "Organic cotton T-shirts",
      price: "499 Rs.",
      oldPrice: "699 Rs.",
      reviews: "825 Reviews",
      image: image3,
    },
    {
      id: 4,
      name: "Bamboo toothbrush",
      price: "99 Rs.",
      oldPrice: "149 Rs.",
      reviews: "248 Reviews",
      image: image4,
    },
    {
      id: 5,
      name: "Bamboo pens and pencils",
      price: "49 Rs.",
      oldPrice: "89 Rs.",
      reviews: "1256 Reviews",
      image: image5,
    },
    {
      id: 6,
      name: "Jute grocery bag",
      price: "59 Rs.",
      oldPrice: "89 Rs.",
      reviews: "895 Reviews",
      image: image6,
    },
    {
      id: 7,
      name: "Reusable steel bottle",
      price: "299 Rs.",
      oldPrice: "399 Rs.",
      reviews: "654 Reviews",
      image:
        "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&q=80&w=500",
    },
    {
      id: 8,
      name: "Eco-friendly lunch box",
      price: "449 Rs.",
      oldPrice: "599 Rs.",
      reviews: "412 Reviews",
      image:
        "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?auto=format&fit=crop&q=80&w=500",
    },
    {
      id: 9,
      name: "Wooden cutlery set",
      price: "199 Rs.",
      oldPrice: "299 Rs.",
      reviews: "978 Reviews",
      image:
        "https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?auto=format&fit=crop&q=80&w=500",
    },
  ];

  const handleConfirmBuy = () => {
    const storedProducts = JSON.parse(localStorage.getItem("myProducts")) || [];

    const existingProduct = storedProducts.find(
      (p) => p.id === selectedProduct.id
    );

    if (existingProduct) {
      existingProduct.qty += 1;
    } else {
      storedProducts.push({ ...selectedProduct, qty: 1 });
    }

    localStorage.setItem("myProducts", JSON.stringify(storedProducts));

    navigate("/my-booking");
    setSelectedProduct(null);
  };

  return (
    <section className="py-16 px-4 bg-white relative">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold text-center mb-12">
          Our Best-Selling Sustainable Products
        </h2>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.slice(0, visibleCount).map((product) => (
            <div key={product.id} className="flex flex-col">
              <div className="rounded-2xl overflow-hidden aspect-[4/5] mb-4 shadow">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <h3 className="text-lg font-semibold">{product.name}</h3>

              <div className="flex justify-between mb-4">
                <div className="flex gap-2">
                  <span className="font-bold">{product.price}</span>
                  <span className="line-through text-gray-400 text-sm">
                    {product.oldPrice}
                  </span>
                </div>
                <span className="text-xs underline cursor-pointer">
                  {product.reviews}
                </span>
              </div>

              <button
                onClick={() => setSelectedProduct(product)}
                className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 cursor-pointer rounded w-1/2 text-xs uppercase"
              >
                Buy Now
              </button>
            </div>
          ))}
        </div>

        {/* Explore More */}
        {visibleCount < products.length && (
          <div className="text-center mt-16">
            <button
              onClick={() => setVisibleCount((p) => p + 3)}
              className="bg-black cursor-pointer text-white py-3 px-10 rounded uppercase text-sm tracking-widest"
            >
              Explore More
            </button>
          </div>
        )}
      </div>

      {/* ================= MODAL ================= */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white w-11/12 md:w-1/2 rounded-xl p-6 relative">
            <img
              src={selectedProduct.image}
              alt={selectedProduct.name}
              className="w-full h-64 object-cover rounded-lg mb-4"
            />

            <h3 className="text-2xl font-bold mb-2">{selectedProduct.name}</h3>

            <p className="text-gray-600 mb-2">
              Reviews: {selectedProduct.reviews}
            </p>

            <div className="flex gap-3 mb-6">
              <span className="text-xl font-bold">{selectedProduct.price}</span>
              <span className="line-through text-gray-400">
                {selectedProduct.oldPrice}
              </span>
            </div>

            <div className="gap-3 flex ">
              <button
                className="btn bg-red-600 p-2 px-4 text-xl"
                onClick={() => setSelectedProduct(null)}
              >
                ✕
              </button>
              <button
                onClick={handleConfirmBuy}
                className="bg-green-600 hover:bg-green-700 text-white p-2 py-3 rounded font-bold uppercase"
              >
                Confirm Buy Now
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Product;
