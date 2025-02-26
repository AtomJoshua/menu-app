import { Link } from "react-router-dom";
import useMenuStore from "../stores/menuStore";

const Home = () => {
  const { menu } = useMenuStore();

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Welcome to Foodie's Delight</h1>

      {/* Featured Items */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {menu.slice(1, 4).map((item) => (
          <div key={item.id} className="bg-white p-4 shadow-md rounded-lg">
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
          </div>
        ))}
      </div>

      {/* Navigation */}
      <div className="mt-6 text-center">
        <Link to="/menu" className="px-6 py-2 bg-blue-500 text-white rounded-md">
          View Menu
        </Link>
      </div>
    </div>
  );
};

export default Home;
