const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 mt-auto">
      <div className="flex flex-col md:flex-row items-center justify-between px-6 py-4 text-sm text-gray-600">

        {/* Left */}
        <p>
          © {new Date().getFullYear()} Project Dashboard. All rights reserved.
        </p>

        {/* Right */}
        <div className="flex items-center gap-6 mt-2 md:mt-0">
          <button className="hover:text-gray-900 transition">Privacy</button>
          <button className="hover:text-gray-900 transition">Terms</button>
          <button className="hover:text-gray-900 transition">Support</button>
        </div>

      </div>
    </footer>
  );
};

export default Footer;