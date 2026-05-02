import { useState } from 'react';

const ToggleTheme = () => {
  const [currentTheme, setCurrentTheme] = useState('light');

  return (
    <div className="flex items-center bg-gray-100 p-1 rounded-xl shadow-inner w-fit">

      <button
        onClick={() => setCurrentTheme('light')}
        className={`px-4 py-1.5 text-sm font-medium rounded-lg transition-all duration-200 cursor-pointer
          ${currentTheme === 'light'
            ? 'bg-white text-gray-900 shadow'
            : 'text-gray-500 hover:text-gray-800'}
        `}>
        Light
      </button>

      <button
        onClick={() => setCurrentTheme('dark')}
        className={`px-4 py-1.5 text-sm font-medium rounded-lg transition-all duration-200 cursor-pointer
          ${currentTheme === 'dark'
            ? 'bg-white text-gray-900 shadow'
            : 'text-gray-500 hover:text-gray-800'}
        `}>
        Dark
      </button>

    </div>
  );
};

export default ToggleTheme;