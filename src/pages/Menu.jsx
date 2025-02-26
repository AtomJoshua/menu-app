import useMenuStore from "../stores/menuStore";
import useCartStore from "../stores/cartStore";

const Menu = () => {
  const { menu } = useMenuStore();
  const { addToCart } = useCartStore();

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Menu</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {menu.map((item) => (
          <div key={item.id} className="bg-white p-4 shadow-md rounded-lg flex flex-col items-center">
            {/* Image Display */}
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-40 object-cover rounded-md"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "/images/placeholder.jpg"; // Fallback image if the original fails
              }}
            />
            <h2 className="text-xl font-semibold mt-2">{item.name}</h2>
            <p className="text-gray-700">₦{item.price}</p>
            <button
              onClick={() => addToCart(item)}
              className="mt-3 px-4 py-2 bg-green-500 text-white rounded-md"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;

