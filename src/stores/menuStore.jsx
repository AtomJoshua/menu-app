import { create } from "zustand";

const useMenuStore = create((set) => ({
  menu: [
    { id: 1, name: "Burger", price: 5000, category: "Meals", image: '/images/burger.jpeg'},
    { id: 2, name: 'Jollof Rice & Protein', price: 2500, image: '/images/jollof.jpg' },
    { id: 3, name: 'Fried Rice & Protein', price: 2700, image: '/images/fried rice.jpeg' },
    { id: 4, name: 'Pounded Yam & Egusi Soup', price: 3000, image: '/images/pounded yam.jpeg' },
    { id: 5, name: 'Amala & Ewedu', price: 2800, image: '/images/amala.jpeg' },
    { id: 6, name: 'Ofada Rice & Ayamase', price: 3200, image: '/images/ofada.jpeg' },
    { id: 7, name: 'Suya', price: 2000, image: '/images/suya.jpeg' },
    { id: 8, name: 'Moi Moi', price: 1500, image: '/images/moi moi.jpeg' },
    { id: 9, name: 'Ogbono Soup & Fufu', price: 2800, image: '/images/ogbono.jpeg' },
    { id: 10, name: 'Efo Riro', price: 2600, image: '/images/efo riro.jpeg' },
    { id: 11, name: 'Banga Soup & Starch', price: 3100, image: '/images/banga.jpeg' },
    { id: 12, name: 'Nsala Soup (White Soup)', price: 2900, image: '/images/nsala.jpeg' },
    { id: 13, name: 'Okro Soup', price: 2700, image: '/images/okro.jpeg' },
    { id: 14, name: 'Afang Soup', price: 3000, image: '/images/afang.jpeg' },
    { id: 15, name: 'Edikang Ikong', price: 3100, image: '/images/edikang.jpeg' },
    { id: 16, name: 'Nkwobi', price: 3500, image: '/images/Nkwobi.jpeg' },
    { id: 17, name: 'Isi Ewu (Goat Head)', price: 4000, image: '/images/isiewu.jpeg' },
    { id: 18, name: 'Kilishi', price: 2200, image: '/images/kilishi.jpeg' },
    { id: 19, name: 'Abacha (African Salad)', price: 2500, image: '/images/abacha.jpeg' },
    { id: 20, name: 'Peppersoup (Goat Meat)', price: 3300, image: '/images/goat peppersoup.jpeg' },
    // { id: 21, name: 'Burger', price: 2000, image: '/images/burger.jpeg' }
  ],
}));

export default useMenuStore;
