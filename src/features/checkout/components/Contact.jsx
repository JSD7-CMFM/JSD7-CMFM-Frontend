import React from 'react'

const Contact = () => {
    return (
        <div className="mb-6">
          <h2 className="font-semibold mb-2">Contact</h2>
          <input
            type="email"
            placeholder="Email"
            className="w-full border border-gray-300 px-4 py-2 mb-2 rounded"
          />
          <div className="flex items-center mb-2">
            <input type="checkbox" id="newsOffers" className="mr-2" />
            <label htmlFor="newsOffers" className="text-sm text-gray-600">
              Email me with news and offers
            </label>
          </div>
        </div>
      );
}

export default Contact