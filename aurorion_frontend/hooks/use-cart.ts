import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

import { Product } from "@/types";
import { toast } from "react-hot-toast";


interface CartStore {
  items: Product[]; // cart items
  addItem: (data: Product) => void; // add item to cart
  removeItem: (id: string) => void; // remove item from cart
  removeAll: () => void; // remove all items from cart
}


const useCart = create( // create store
  persist<CartStore>( // persist store
    (set, get) => ({ // store definition
      items: [], // initial value

      addItem: (data: Product) => { // add item to cart

        const currentItems = get().items;    // get current items in cart
        console.log("Current Items:", currentItems);
        console.log("current items individual ", currentItems.find((item) => item.id));
        const existingItem = currentItems.find((item) => item.id === data.id); // check if item already exists in cart

        if (existingItem) {
          return toast("Item already in cart.");
        }

        set({ items: [...get().items, data] }); //syntax in this line is adding the new item to the existing items
        toast.success("Item added to cart.");
      },
    
      removeItem: (id: string) => { // remove item from cart
        set({ items: [...get().items.filter((item) => item.id !== id)] }); //syntax in this line is removing the item from the existing items
        toast.success("Item removed from cart.");
      },
      removeAll: () => set({ items: [] }),
    }),

    {
      name: "cart-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useCart;
