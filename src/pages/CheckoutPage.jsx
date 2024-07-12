import React from 'react'
import OrderSummary from '../features/checkout/components/OrderSummary';
import Checkout from '../features/checkout/components/Checkout ';
import CircularProgress from "@mui/material/CircularProgress";



const CheckoutPage = () => {
  const [loading, setLoading] = useState(false);

  if (!loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <CircularProgress />
      </div>
    );
  }
  return (
    <div className="bg-gray-100 py-10">
      <div className="max-w-6xl mx-auto px-4 md:flex md:space-x-8">
        <OrderSummary />
        <Checkout />
      </div>
    </div>
  );
}

export default CheckoutPage