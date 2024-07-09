import { useState, useEffect } from "react";
import DetailItem from "./DetailItem";
import { Link, useParams } from "react-router-dom";
import axiosInstance from "../../config/myAPIs"; // Ensure axiosInstance is imported

const ProductDetails1 = () => {
  const { id } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [quantity2, setQuantity2] = useState(1);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cartProducts, setCartProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get("/products");
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false); // Set loading to false even on error
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchCartProducts = async () => {
      try {
        const response = await axiosInstance.get(`/orders/668bdf0034732d9b7b9b3847/cart`); // Replace with your endpoint to fetch cart
        setCartProducts(response.data);
      } catch (error) {
        console.error('Error fetching cart products:', error);
        setError('Failed to fetch cart products');
      }
    };

    fetchCartProducts();
  }, []);

  useEffect(() => {
    console.log("id from useParams:", id); // Check the id extracted from useParams
    console.log("products:", products); // Check the products state

    if (id && products.length > 0) {
      const product = products.find((product) => product._id === id); // Adjusted to direct comparison with id
      console.log("selected product:", product); // Check the selected product found
      setSelectedProduct(product);
    }
  }, [id, products]);

const handleSubmit = async (event) => {
  event.preventDefault();

  if (!selectedProduct) {
    console.error('Selected product is null');
    return;
  }

  try {
    // Create the new cart product object
    const newCartProduct = {
      product_id: selectedProduct._id,
      amount: quantity2
    };

    // Example order ID (replace with your actual order ID)
    const orderId = "668bfe6ccd08e9046881224a";

    // Send patch request to update the order
    const response = await axiosInstance.patch(`/orders/${orderId}`,
      {...newCartProduct,
      cart_products: [newCartProduct]
    });

    console.log('Order updated successfully:', response.data);
    // Handle success (e.g., show success message to user)
  } catch (error) {
    console.error('Error updating order:', error);
    // Handle error (e.g., show error message to user)
    if (error.response) {
      console.error('Server responded with:', error.response.data);
    }
  }
};


    const incrementQuantity2 = () => {
      setQuantity2((prevQuantity) => prevQuantity + 1);
    };

    const decrementQuantity2 = () => {
      setQuantity2((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));
    };

    if (loading || !selectedProduct) {
      return <div>Loading...</div>;
    }

    const totalPrice2 = (quantity2 * selectedProduct.price).toFixed(2);
    const combinedTotalPrice = parseFloat(totalPrice2).toFixed(2);

  return (
    <div className="flex justify-center items-center md:p-8 bg-gray-200 border-black border md:m-4 rounded-2xl">
      <div className="px-2 py-3 w-full md:h-full">
        <div className="pb-5 text-3xl md:text-xl md:font-bold">
          <h1>{selectedProduct.name}</h1>
        </div>
        <div className="pb-4">
          <p>{selectedProduct.description}</p>
        </div>

        <div className="pb-2 text-sm font-medium">{/* <h2>SINGLE</h2> */}</div>
        <DetailItem
          imgSrc={selectedProduct.product_img}
          description={selectedProduct.description}
          size="Single"
        />
        <div className="mt-6 mb-6 p-1 flex justify-between items-center w-full">
          <div className="flex items-center">
            <button
              onClick={decrementQuantity2}
              className="px-2 py-1 border border-black rounded-md"
            >
              -
            </button>
            <span className="mx-4">{quantity2}</span>
            <button
              onClick={incrementQuantity2}
              className="px-2 py-1 border border-black rounded-md"
            >
              +
            </button>
          </div>
          <div className="font-bold text-m">Total: ฿{totalPrice2}</div>
        </div>
        <div className="border-black border rounded-xl p-1 flex justify-between w-full bg-[#4BA6DE] text-white text-[12px] font-bold tracking-widest md:text-l md:py-2 md:px-2">
          <form onSubmit={handleSubmit}>
            <button className="font-mono p-1">Add to cart</button>
            <Link to="/cart"></Link>
          </form>
          <h3 className="font-mono p-1">฿{combinedTotalPrice}</h3>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails1;
