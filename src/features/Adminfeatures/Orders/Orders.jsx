import React, { useState } from "react";
import useOrders from "../../../hooks/useOrders";
import { toast } from "react-toastify";

const Orders = () => {
  const { orders, setOrders, editOrder } = useOrders();
  const [editingOrderId, setEditingOrderId] = useState(null);
  const [status, setStatus] = useState("");

  const handleEdit = (order) => {
    setEditingOrderId(order._id);
    setStatus(order.status);
  };

  const handleSave = async (orderId) => {
    try {
      await editOrder(orderId, { status }, "updateStatus");
      setOrders((prevOrders) =>
        prevOrders.map((order) =>
          order._id === orderId ? { ...order, status } : order
        )
      );
      setEditingOrderId(null);
      setStatus("");
      toast.success("Order saved successfully");
    } catch (error) {
      toast.error(`Error saving order: ${error}`);
    }
  };

  const handleStatusChange = (e) => {
    setStatus(e.target.value);
  };

  return (
    <div className="p-10">
      <h1 className="text-black text-3xl font-bold mb-6">Orders</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white mb-4">
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className="text-white py-2 px-4 border-b">Order Number</th>
              <th className="text-white py-2 px-4 border-b">ID</th>
              <th className="text-white py-2 px-4 border-b">User ID</th>
              <th className="text-white py-2 px-4 border-b">Cart Products</th>
              <th className="text-white py-2 px-4 border-b">Status</th>
              <th className="text-white py-2 px-4 border-b">Address</th>
              <th className="text-white py-2 px-4 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order._id}>
                <td className="text-black py-2 px-4 border-b">
                  {order.orderNumber}
                </td>
                <td className="text-black py-2 px-4 border-b">{order._id}</td>
                <td className="text-black py-2 px-4 border-b">
                  {order.user_id}
                </td>
                <td className="text-black py-2 px-4 border-b">
                  {order.cart_products.map((product, index) => (
                    <div key={index}>
                      {product.name} x {product.amount}
                    </div>
                  ))}
                </td>
                <td className="text-black py-2 px-4 border-b">
                  {editingOrderId === order._id ? (
                    <select
                      value={status}
                      onChange={handleStatusChange}
                      className="w-full border rounded px-2 py-1 text-black bg-gray-200"
                    >
                      <option value=""></option>
                      <option value="pending">pending</option>
                      <option value="success">success</option>
                      <option value="holding">holding</option>
                      <option value="cancel">cancel</option>
                    </select>
                  ) : (
                    order.status
                  )}
                </td>
                <td className="text-black py-2 px-4 border-b">
                  {order.address.address}, {order.address.province},{" "}
                  {order.address.country}, {order.address.zipcode}
                </td>
                <td className="py-2 px-4 border-b">
                  <div className="flex space-x-2">
                    {editingOrderId === order._id ? (
                      <button
                        className="bg-green-500 text-white px-2 py-1 rounded w-20"
                        onClick={() => handleSave(order._id)}
                      >
                        Save
                      </button>
                    ) : (
                      <button
                        className="bg-blue-500 text-white px-2 py-1 rounded w-20"
                        onClick={() => handleEdit(order)}
                      >
                        Edit
                      </button>
                    )}
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

export default Orders;
