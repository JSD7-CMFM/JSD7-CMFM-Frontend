import React from 'react'

const PayPal = () => {
    return (
        <div className="flex items-center mb-4">
          <input type="radio" name="paymentMethod" id="paypal" className="mr-2" />
          <label htmlFor="paypal" className="text-sm text-gray-600">PayPal</label>
        </div>
      );
}

export default PayPal