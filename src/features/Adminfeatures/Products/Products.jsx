// src/components/Products.jsx
import React, { useState } from "react";
import { products as mockProducts } from "../../../data/ProductData";

const Products = () => {
  const [products, setProducts] = useState(mockProducts);
  const [editingProductId, setEditingProductId] = useState(null);
  const [formData, setFormData] = useState({
    id: "",
    category: "",
    name: "",
    price: "",
    quantity: "",
  });
  const [newProduct, setNewProduct] = useState({
    id: "",
    category: "",
    name: "",
    price: "",
    quantity: "",
    productImage: "",
  });

  const handleEdit = (product) => {
    setEditingProductId(product.id);
    setFormData({
      id: product.id,
      category: product.category,
      name: product.name,
      price: product.price,
      quantity: product.quantity,
    });
  };

  const handleSave = (id) => {
    if (parseFloat(formData.price) < 0 || parseFloat(formData.quantity) < 0) {
      alert("Price and Quantity must be at least 0.00");
      return;
    }
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === id ? { ...product, ...formData } : product
      )
    );
    setEditingProductId(null);
  };

  const handleDelete = (id) => {
    setProducts((prevProducts) =>
      prevProducts.filter((product) => product.id !== id)
    );
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleNewProductChange = (e) => {
    const { name, value } = e.target;
    setNewProduct((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleAddProduct = () => {
    if (
      parseFloat(newProduct.price) < 0 ||
      parseFloat(newProduct.quantity) < 0
    ) {
      alert("Price and Quantity must be at least 0.00");
      return;
    }
    setProducts((prevProducts) => [
      ...prevProducts,
      { ...newProduct, id: prevProducts.length + 1 }, // Assign a new id
    ]);
    setNewProduct({
      id: "",
      category: "",
      name: "",
      price: "",
      quantity: "",
      productImage: "",
    });
  };

  return (
    <div className="p-10">
      <h1 className="text-black text-3xl font-bold mb-6">Products</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white mb-4">
          <thead>
            <tr className="bg-gray-800 text-white">
              <td className="text-white py-2 px-4 border-b">
                {products.length + 1}
              </td>
              <td className="text-white py-2 px-4 border-b">
                <input
                  type="text"
                  name="category"
                  value={newProduct.category}
                  onChange={handleNewProductChange}
                  className="w-full border rounded px-2 py-1 text-white bg-gray-700"
                />
              </td>
              <td className="text-white py-2 px-4 border-b">
                <input
                  type="text"
                  name="name"
                  value={newProduct.name}
                  onChange={handleNewProductChange}
                  className="w-full border rounded px-2 py-1 text-white bg-gray-700"
                />
              </td>
              <td className="text-white py-2 px-4 border-b">
                <input
                  type="number"
                  name="price"
                  value={newProduct.price}
                  onChange={handleNewProductChange}
                  className="w-full border rounded px-2 py-1 text-white bg-gray-700"
                  min="0"
                />
              </td>
              <td className="text-white py-2 px-4 border-b">
                <input
                  type="number"
                  name="quantity"
                  value={newProduct.quantity}
                  onChange={handleNewProductChange}
                  className="w-full border rounded px-2 py-1 text-white bg-gray-700"
                  min="0"
                />
              </td>
              <td className="text-white py-2 px-4 border-b">
                <input
                  type="text"
                  name="productImage"
                  value={newProduct.productImage}
                  onChange={handleNewProductChange}
                  className="w-full border rounded px-2 py-1 text-white bg-gray-700"
                />
              </td>
              <td className="py-2 px-4 border-b">
                <button
                  className="bg-green-500 text-white px-2 py-1 rounded w-20"
                  onClick={handleAddProduct}
                >
                  Add
                </button>
              </td>
            </tr>
            <tr>
              <th className="text-black py-2 px-4 border-b text-left w-1/12">
                ID
              </th>
              <th className="text-black py-2 px-4 border-b text-left w-2/12">
                Category
              </th>
              <th className="text-black py-2 px-4 border-b text-left w-2/12">
                Name
              </th>
              <th className="text-black py-2 px-4 border-b text-left w-2/12">
                Price
              </th>
              <th className="text-black py-2 px-4 border-b text-left w-2/12">
                Quantity
              </th>
              <th className="text-black py-2 px-4 border-b text-left w-2/12">
                Product Image
              </th>
              <th className="text-black py-2 px-4 border-b text-left w-1/12">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td className="text-black py-2 px-4 border-b">{product.id}</td>
                <td className="text-black py-2 px-4 border-b">
                  {editingProductId === product.id ? (
                    <input
                      type="text"
                      name="category"
                      value={formData.category}
                      onChange={handleChange}
                      className="w-full border rounded px-2 py-1 text-white bg-gray-700"
                      
                    />
                  ) : (
                    product.category
                  )}
                </td>
                <td className="text-black py-2 px-4 border-b">
                  {editingProductId === product.id ? (
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full border rounded px-2 py-1 text-white bg-gray-700"
                    />
                  ) : (
                    product.name
                  )}
                </td>
                <td className="text-black py-2 px-4 border-b">
                  {editingProductId === product.id ? (
                    <input
                      type="number"
                      name="price"
                      value={formData.price}
                      onChange={handleChange}
                      className="w-full border rounded px-2 py-1 text-white bg-gray-700"
                      min="0"
                    />
                  ) : (
                    product.price
                  )}
                </td>
                <td className="text-black py-2 px-4 border-b">
                  {editingProductId === product.id ? (
                    <input
                      type="number"
                      name="quantity"
                      value={formData.quantity}
                      onChange={handleChange}
                      className="w-full border rounded px-2 py-1 text-white bg-gray-700"
                      min="0"
                    />
                  ) : (
                    product.quantity
                  )}
                </td>
                <td className="py-2 px-4 border-b">
                  <img
                    src={product.productImage}
                    alt={product.name}
                    className="w-20 h-20 object-cover"
                  />
                </td>
                <td className="py-2 px-4 border-b">
                  <div className="flex space-x-2">
                    {editingProductId === product.id ? (
                      <button
                        className="bg-green-500 text-white px-2 py-1 rounded w-20"
                        onClick={() => handleSave(product.id)}
                      >
                        Save
                      </button>
                    ) : (
                      <button
                        className="bg-blue-500 text-white px-2 py-1 rounded w-20"
                        onClick={() => handleEdit(product)}
                      >
                        Edit
                      </button>
                    )}
                    <button
                      className="bg-red-500 text-white px-2 py-1 rounded w-20"
                      onClick={() => handleDelete(product.id)}
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Products;
