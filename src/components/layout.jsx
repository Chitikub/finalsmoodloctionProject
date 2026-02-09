import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import { motion, AnimatePresence } from "framer-motion";

const Layout = () => {
  const location = useLocation();

  return (
    // ปรับพื้นหลังเป็น Gradient ม่วง-ส้ม จางๆ ตามรูป
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-[#D1C4E9] via-[#F3E5F5] to-[#FFECB3]">
      <header className="pt-6 px-4">
        <Navbar />
      </header>

      {/* ส่วนเนื้อหาหลักที่ยืดหยุ่นได้ */}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>

      {/* --- Footer (เหมือนในรูปเป๊ะ) --- */}
      <footer className="bg-white/80 backdrop-blur-md py-4 px-10 border-t border-gray-100">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 font-medium">
          <div className="flex gap-8 mb-4 md:mb-0">
            <span>© 2026 Mood Location Finder</span>
            <button className="hover:text-gray-800 transition-colors">
              Terms
            </button>
            <button className="hover:text-gray-800 transition-colors">
              Privacy
            </button>
            <button className="hover:text-gray-800 transition-colors">
              Cookies
            </button>
          </div>

          <div className="flex items-center gap-4">
            <span className="font-bold border-r pr-4 border-gray-300">
              Contact
            </span>
            <div className="flex gap-3 text-lg">
              <i className="fa-brands fa-facebook hover:text-blue-600 cursor-pointer"></i>
              <i className="fa-brands fa-line hover:text-green-500 cursor-pointer"></i>
              <i className="fa-brands fa-instagram hover:text-pink-500 cursor-pointer"></i>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
