import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; // Assuming you are using React Router for routing
import axiosInstance from "../../config/myAPIs.js"; // Import your axios instance

const DetailItem = () => {
  const { id } = useParams(); // Get the id from URL params

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState(null); // State to hold the selected product
  const [quantity, setQuantity] = useState(1); // State to hold the selected quantity, default to 1

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get('/products');
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching products:', error);
        // Handle error state here (e.g., set loading to false, show error message)
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures useEffect runs only on component mount

  useEffect(() => {
    // Find the product by id once products are fetched
    if (products.length > 0) {
      const selectedProduct = products.find((prod) => prod._id === id);
      setProduct(selectedProduct); // Set the product state
    }
  }, [products, id]); // Update whenever products or id changes

  const handleQuantityChange = (event) => {
    setQuantity(parseInt(event.target.value)); // Convert value to integer
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Make PATCH request to your endpoint with selected product and quantity
      const response = await axiosInstance.patch(`/orders/66851c7071bf191d6913b91d`, {
        product: product,
        quantity: quantity
      });

      console.log('Order updated successfully:', response.data);
      // Handle success (e.g., show success message to user)
    } catch (error) {
      console.error('Error updating order:', error);
      // Handle error state here (e.g., show error message to user)
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!product) {
    return <div>Product not found</div>;
  }

  // Assuming product structure contains imgSrc, description, type, and category
  const { imgSrc, description, type, category } = product;

  return (
    <div className="flex pb-4 md:text-xl">
      <div className="w-24 border-black border md:w-32 rounded-2xl">
        <img className="w-full h-full object-cover rounded-2xl" src={imgSrc} alt="Detail" />
      </div>
      <div className="ml-4 mt-2">
        <h3>{description}</h3>
        <div className="text-xs text-black md:text-[16px] badge mt-2 md:p-3 bg-pink-300">{type} Type</div>
        <div className="badge mt-2 ml-2 md:p-3 text-[16px]  bg-green-300">{category}</div>
        {/* Form for selecting quantity and adding to cart */}
        <form onSubmit={handleSubmit}>
          <select name="quantity" value={quantity} onChange={handleQuantityChange}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
          <button type="submit">Add to cart</button>
        </form>
      </div>
    </div>
  );
};

export default DetailItem;
