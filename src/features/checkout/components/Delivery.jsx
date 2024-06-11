import React from 'react'

const Delivery = () => {
    return (
        <div className="mb-6">
          <h2 className="font-semibold mb-2">Delivery</h2>
          <select className="w-full border border-gray-300 px-4 py-2 mb-2 rounded">
            <option>Country/Region</option>
          </select>
          <div className="flex mb-2">
            <input
              type="text"
              placeholder="First name"
              className="w-1/2 border border-gray-300 px-4 py-2 mr-2 rounded"
            />
            <input
              type="text"
              placeholder="Last name"
              className="w-1/2 border border-gray-300 px-4 py-2 rounded"
            />
          </div>
          <input
            type="text"
            placeholder="Company (optional)"
            className="w-full border border-gray-300 px-4 py-2 mb-2 rounded"
          />
          <input
            type="text"
            placeholder="Address"
            className="w-full border border-gray-300 px-4 py-2 mb-2 rounded"
          />
          <input
            type="text"
            placeholder="Apartment, suite, etc. (optional)"
            className="w-full border border-gray-300 px-4 py-2 mb-2 rounded"
          />
          <div className="flex mb-2">
            <input
              type="text"
              placeholder="City"
              className="w-1/2 border border-gray-300 px-4 py-2 mr-2 rounded"
            />
            <select className="w-1/4 border border-gray-300 px-4 py-2 mr-2 rounded">
              <option>State</option>
            </select>
            <input
              type="text"
              placeholder="ZIP code"
              className="w-1/4 border border-gray-300 px-4 py-2 rounded"
            />
          </div>
          <input
            type="text"
            placeholder="Phone"
            className="w-full border border-gray-300 px-4 py-2 mb-2 rounded"
          />
        </div>
      );
}

export default Delivery