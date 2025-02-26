import { create } from "zustand";

const useOrderStore = create((set) => ({
  orderDetails: { name: "", address: "", contact: "" },
  setOrderDetails: (details) => set({ orderDetails: details }),
  resetOrder: () => set({ orderDetails: { name: "", address: "", contact: "" } }),
}));

export default useOrderStore;
