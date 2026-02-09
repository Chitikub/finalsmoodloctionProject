import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <nav className="max-w-7xl mx-auto px-4 mt-6">
      <div className="flex items-center justify-between bg-white rounded-full px-8 h-20 shadow-md">
        {/* ฝั่งซ้าย: Logo + เมนู */}
        <div className="flex items-center gap-10">
          <Link
            to="/"
            className="text-2xl font-serif font-bold text-[#2D3142] shrink-0"
          >
            Mood Location Finder
          </Link>

          <ul className="hidden lg:flex items-center gap-8 text-[17px] font-medium text-gray-600">
            <li>
              <Link to="/contact" className="hover:text-[#8362B8]">
                ติดต่อ
              </Link>
            </li>
            <li>
              <Link to="/guide" className="hover:text-[#8362B8]">
                คู่มือ
              </Link>
            </li>
          </ul>
        </div>

        {/* ฝั่งขวา: ปุ่มที่เชื่อม Router แล้ว */}
        <div className="flex items-center gap-3">
          <Link
            to="/login"
            className="flex items-center justify-center h-11 px-6 bg-[#FFB399] hover:bg-[#ff9d7d] rounded-2xl text-gray-800 font-semibold transition-all active:scale-95"
          >
            เข้าสู่ระบบ
          </Link>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="/register"
              className="flex items-center justify-center h-11 px-6 bg-[#8362B8] hover:bg-[#6d4da3] text-white rounded-2xl font-semibold shadow-sm transition-all"
            >
              สมัครสมาชิก
            </Link>
          </motion.div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
