import React, { useState } from "react";
import useProduct from "../../../hooks/useProduct";

const Products = () => {
  const { products, addProduct, deleteProduct, editProduct } = useProduct();;
  const [editingProductId, setEditingProductId] = useState(null);
  const [formData, setFormData] = useState({
    productId: "",
    id: "",
    category: "",
    name: "",
    description: "",
    type: "",
    price: "",
    quantity: "",
    product_img: "",
    productinfo: {
      info1: "",
      info2: "",
    },
  });
  const [newProduct, setNewProduct] = useState({
    productId: "",
    category: "",
    name: "",
    description: "",
    type: "Box",
    price: "",
    quantity: "",
    product_img: "",
    productinfo: {
      info1: "",
      info2: "",
    },
  });

  const handleEdit = (product) => {
    setEditingProductId(product._id);
    setFormData({
      productId: product.productId,
      category: product.category,
      name: product.name,
      description: product.description,
      type: product.type,
      price: product.price,
      quantity: product.quantity,
      product_img: product.product_img,
      productinfo: {
        info1: product.productinfo.info1,
        info2: product.productinfo.info2,
      },
    });
  };

  const handleSave = (editingProductId) => {
    const productToSave = {
      ...formData,
      "productinfo.info1": formData.productinfo.info1,
      "productinfo.info2": formData.productinfo.info2,
    };

    // Remove the nested productinfo object to avoid conflicts
    delete productToSave.productinfo;

    editProduct(editingProductId, productToSave)
      .then((response) => {
        console.log("Product saved successfully:", response);
      })
      .catch((error) => {
        console.error("Error saving product:", error);
      });

    setEditingProductId(null);
    setFormData({
      productId: "",
      id: "",
      category: "",
      name: "",
      description: "",
      type: "",
      price: "",
      quantity: "",
      product_img: "",
      productinfo: {
        info1: "",
        info2: "",
      },
    });
  };

  const handleDelete = (id) => {
    deleteProduct(id);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "info1" || name === "info2") {
      setFormData((prevData) => ({
        ...prevData,
        productinfo: {
          ...prevData.productinfo,
          [name]: value,
        },
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleNewProductChange = (e) => {
    const { name, value } = e.target;
    setNewProduct((prevData) => {
      if (name === "info1" || name === "info2") {
        return {
          ...prevData,
          productinfo: {
            ...prevData.productinfo,
            [name]: value,
          },
        };
      } else {
        return {
          ...prevData,
          [name]: value,
        };
      }
    });
  };

  const handleAddProduct = () => {
    const productToAdd = {
      ...newProduct,
      productinfo: {
        info1: newProduct.productinfo.info1,
        info2: newProduct.productinfo.info2,
      },
    };
    console.log("Adding Product:", productToAdd);
    addProduct(productToAdd)
      .then((response) => {
        console.log("Product added successfully:", response);
      })
      .catch((error) => {
        console.error("Error adding product:", error);
      });
    setNewProduct({
      productId: "",
      category: "",
      name: "",
      description: "",
      type: "",
      price: "",
      quantity: "",
      product_img: "",
      productinfo: {
        info1: "",
        info2: "",
      },
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
                <input
                  type="number"
                  name="productId"
                  value={newProduct.productId}
                  onChange={handleNewProductChange}
                  className="max-w-20 border rounded px-2 py-1 text-white bg-gray-700"
                />
              </td>
              <td className="text-white py-2 px-4 border-b"></td>
              <td className="text-white py-2 px-4 border-b">
                <input
                  type="text"
                  name="category"
                  value={newProduct.category}
                  onChange={handleNewProductChange}
                  className="max-w-28 border rounded px-2 py-1 text-white bg-gray-700"
                />
              </td>
              <td className="text-white py-2 px-4 border-b">
                <input
                  type="text"
                  name="name"
                  value={newProduct.name}
                  onChange={handleNewProductChange}
                  className="max-w-28 border rounded px-2 py-1 text-white bg-gray-700"
                />
              </td>
              <td className="text-white py-2 px-4 border-b">
                <input
                  type="text"
                  name="description"
                  value={newProduct.description}
                  onChange={handleNewProductChange}
                  className="w-30 border rounded px-2 py-1 text-white bg-gray-700"
                />
              </td>
              <td className="text-white py-2 px-4 border-b">
                <select
                  name="type"
                  value={newProduct.type}
                  onChange={handleNewProductChange}
                  className="w-20 border rounded px-2 py-1 text-white bg-gray-700"
                  defaultValue={"Single"} 
                >
                  <option value="Box">Box</option>
                  <option value="Single">Single</option>
                </select>
              </td>
              <td className="text-white py-2 px-4 border-b">
                <input
                  type="number"
                  name="price"
                  value={newProduct.price}
                  onChange={handleNewProductChange}
                  className="w-20 border rounded px-2 py-1 text-white bg-gray-700"
                  min="0"
                />
              </td>
              <td className="text-white py-2 px-4 border-b">
                <input
                  type="number"
                  name="quantity"
                  value={newProduct.quantity}
                  onChange={handleNewProductChange}
                  className="w-20 border rounded px-2 py-1 text-white bg-gray-700"
                  min="0"
                />
              </td>
              <td className="text-white py-2 px-4 border-b">
                <input
                  type="text"
                  name="product_img"
                  value={newProduct.product_img}
                  onChange={handleNewProductChange}
                  className="w-30 border rounded px-2 py-1 text-white bg-gray-700"
                />
              </td>
              <td className="text-white py-2 px-4 border-b">
                <input
                  type="text"
                  name="info1"
                  value={newProduct.productinfo.info1}
                  onChange={handleNewProductChange}
                  className="w-30 border rounded px-2 py-1 text-white bg-gray-700"
                />
              </td>
              <td className="text-white py-2 px-4 border-b">
                <input
                  type="text"
                  name="info2"
                  value={newProduct.productinfo.info2}
                  onChange={handleNewProductChange}
                  className="w-30 border rounded px-2 py-1 text-white bg-gray-700"
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
                ProductId
              </th>
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
                Description
              </th>
              <th className="text-black py-2 px-4 border-b text-left w-2/12">
                Type
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
              <th className="text-black py-2 px-4 border-b text-left w-2/12">
                Productinfo1
              </th>
              <th className="text-black py-2 px-4 border-b text-left w-2/12">
                Productinfo2
              </th>
              <th className="text-black py-2 px-4 border-b text-left w-1/12">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product._id}>
                <td className="text-black py-2 px-4 border-b">
                  {editingProductId === product._id ? (
                    <input
                      type="text"
                      name="productId"
                      value={formData.productId}
                      onChange={handleChange}
                      className="w-full border rounded px-2 py-1 text-white bg-gray-700"
                    />
                  ) : (
                    product.productId
                  )}
                </td>
                <td className="text-black py-2 px-4 border-b">{product._id}</td>
                <td className="text-black py-2 px-4 border-b">
                  {editingProductId === product._id ? (
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
                  {editingProductId === product._id ? (
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
                  {editingProductId === product._id ? (
                    <input
                      type="text"
                      name="description"
                      value={formData.description}
                      onChange={handleChange}
                      className="w-full border rounded px-2 py-1 text-white bg-gray-700"
                    />
                  ) : (
                    product.description
                  )}
                </td>
                <td className="text-black py-2 px-4 border-b">
                  {editingProductId === product._id ? (
                    <input
                      type="text"
                      name="type"
                      value={formData.type}
                      onChange={handleChange}
                      className="w-full border rounded px-2 py-1 text-white bg-gray-700"
                    />
                  ) : (
                    product.type
                  )}
                </td>
                <td className="text-black py-2 px-4 border-b">
                  {editingProductId === product._id ? (
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
                  {editingProductId === product._id ? (
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
                <td className="text-black py-2 px-4 border-b">
                  {editingProductId === product._id ? (
                    <input
                      type="text"
                      name="product_img"
                      value={formData.product_img}
                      onChange={handleChange}
                      className="w-full border rounded px-2 py-1 text-white bg-gray-700"
                    />
                  ) : (
                    <img
                      src={product.product_img}
                      alt={product.name}
                      className="w-20 h-20 object-cover"
                    />
                  )}
                </td>
                <td className="text-black py-2 px-4 border-b">
                  {editingProductId === product._id ? (
                    <input
                      type="text"
                      name="info1"
                      value={formData.productinfo.info1}
                      onChange={handleChange}
                      className="w-full border rounded px-2 py-1 text-white bg-gray-700"
                    />
                  ) : (
                    <img
                      src={product.productinfo.info1}
                      alt={product.name}
                      className="w-20 h-20 object-cover"
                    />
                  )}
                </td>
                <td className="text-black py-2 px-4 border-b">
                  {editingProductId === product._id ? (
                    <input
                      type="text"
                      name="info2"
                      value={formData.productinfo.info2}
                      onChange={handleChange}
                      className="w-full border rounded px-2 py-1 text-white bg-gray-700"
                    />
                  ) : (
                    <img
                      src={product.productinfo.info2}
                      alt={product.name}
                      className="w-20 h-20 object-cover"
                    />
                  )}
                </td>
                <td className="py-2 px-4 border-b">
                  <div className="flex space-x-2">
                    {editingProductId === product._id ? (
                      <button
                        className="bg-green-500 text-white px-2 py-1 rounded w-20"
                        onClick={() => handleSave(product._id)}
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
                      onClick={() => handleDelete(product._id)}
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
