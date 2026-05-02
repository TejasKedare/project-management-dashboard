import { useSelector } from "react-redux";

const Header = () => {
  const count = useSelector((state: any) => state.counter.count);

  return (
    <header className="bg-white border-b border-gray-200 shadow-sm">
      <div className="flex items-center justify-between px-6 py-4">

        {/* Left Section */}
        <div className="flex items-center gap-4">
          <h1 className="text-xl font-semibold text-gray-800">
            Project Dashboard
          </h1>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-6">

          {/* Counter */}
          <div className="text-sm text-gray-600">
            Count: <span className="font-semibold text-gray-900">{count}</span>
          </div>

          {/* Notification Icon */}
          <button className="relative p-2 rounded-lg hover:bg-gray-100 transition">
            🔔
            <span className="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full"></span>
          </button>

          {/* User Avatar */}
          <div className="flex items-center gap-2 cursor-pointer">
            <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center text-sm font-semibold">
              T
            </div>
            <span className="text-sm text-gray-700">Tejas</span>
          </div>

        </div>
      </div>
    </header>
  );
};

export default Header;