import React, { useEffect, useState } from "react";

const MyProduct = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const savedProducts = JSON.parse(localStorage.getItem("myProducts")) || [];
    setProducts(savedProducts);
  }, []);

  // ❌ Delete product
  const handleDelete = (id) => {
    const updatedProducts = products.filter((product) => product.id !== id);

    setProducts(updatedProducts);
    localStorage.setItem("myProducts", JSON.stringify(updatedProducts));
  };

  if (products.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-lg font-semibold">No product selected</p>
      </div>
    );
  }

  const totalPrice = products.reduce(
    (total, item) => total + parseInt(item.price) * item.qty,
    0
  );

  return (
    <section className="py-16 px-4 bg-white min-h-screen">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold mb-10 text-center">My Products</h1>

        <div className="space-y-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="flex flex-col md:flex-row gap-6 p-6 border rounded-xl shadow-sm relative"
            >
              {/* ❌ Delete Button */}
              <button
                onClick={() => handleDelete(product.id)}
                className="absolute top-3 right-3 text-red-500 text-xl hover:scale-110"
                title="Remove product"
              >
                ✕
              </button>

              <img
                src={product.image}
                alt={product.name}
                className="w-full md:w-40 h-40 object-cover rounded-lg"
              />

              <div className="flex-1">
                <h2 className="text-xl font-bold">{product.name}</h2>

                <p className="text-sm text-gray-500">{product.reviews}</p>

                <div className="flex gap-4 items-center mt-2">
                  <span className="font-bold text-green-600">
                    {product.price}
                  </span>
                  <span className="line-through text-gray-400">
                    {product.oldPrice}
                  </span>
                </div>

                <p className="mt-2 text-sm">
                  Quantity: <span className="font-semibold">{product.qty}</span>
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Total */}
        <div className="mt-10 text-right">
          <h2 className="text-2xl font-bold mb-4">Total: {totalPrice} Rs.</h2>

          <button className="bg-black text-white px-10 py-3 rounded uppercase tracking-wider">
            Checkout
          </button>
        </div>
      </div>
    </section>
  );
};

export default MyProduct;
