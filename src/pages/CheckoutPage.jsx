import React from 'react'
import OrderSummary from '../features/checkout/components/OrderSummary';
import Checkout from '../features/checkout/components/Checkout ';
// import VideoCarousel from '../features/carousel/components/VideoCarousel'


const CheckoutPage = () => {
  return (
    <div className="bg-gray-100 py-10">
      <div className="max-w-6xl mx-auto px-4 md:flex md:space-x-8">
        {/* <VideoCarousel /> */}
        <OrderSummary />
        <Checkout />
      </div>
    </div>
  );
}

export default CheckoutPage