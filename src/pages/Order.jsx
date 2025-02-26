import { useState } from "react";
import useOrderStore from "../stores/orderStore";
import useCartStore from "../stores/cartStore";
import { useNavigate } from "react-router-dom";

const Order = () => {
  const { setOrderDetails, resetOrder } = useOrderStore();
  const { clearCart } = useCartStore();
  const navigate = useNavigate();
  
  const [form, setForm] = useState({ name: "", address: "", contact: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    setOrderDetails(form);
    clearCart();
    resetOrder();
    alert("Order placed successfully!");
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Order Form</h1>
      
      <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4 bg-white p-6 rounded-md shadow-md">
        <input
          type="text"
          placeholder="Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          required
          className="w-full p-2 border rounded-md"
        />
        <input
          type="text"
          placeholder="Address"
          value={form.address}
          onChange={(e) => setForm({ ...form, address: e.target.value })}
          required
          className="w-full p-2 border rounded-md"
        />
        <input
          type="tel"
          placeholder="Contact Number"
          value={form.contact}
          onChange={(e) => setForm({ ...form, contact: e.target.value })}
          required
          className="w-full p-2 border rounded-md"
        />
        <button
          type="submit"
          className="w-full bg-green-500 text-white p-2 rounded-md mt-3"
        >
          Place Order
        </button>
      </form>
    </div>
  );
};

export default Order;
