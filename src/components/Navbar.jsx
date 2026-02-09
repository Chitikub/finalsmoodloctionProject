import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    // เปลี่ยนเป็น fixed top-0 และเพิ่ม z-50 เพื่อให้อยู่เหนือทุก Element
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 pt-4 transition-all duration-300">
      {/* ปรับความสูงจาก h-20 เหลือ h-16 (กะทัดรัดขึ้น) และใช้ backdrop-blur เพื่อความหรูหรา */}
      <div className="max-w-6xl mx-auto flex items-center justify-between bg-white/80 backdrop-blur-md rounded-full px-6 h-16 shadow-lg border border-white/20">
        {/* ฝั่งซ้าย: Logo + เมนู */}
        <div className="flex items-center gap-8">
          <Link
            to="/"
            className="text-xl font-serif font-bold text-[#2D3142] hover:scale-105 transition-transform shrink-0"
          >
            Mood Location Finder
          </Link>

          <ul className="hidden md:flex items-center gap-6 text-[15px] font-semibold text-gray-500">
            <li>
              <Link
                to="/contact"
                className="hover:text-[#8362B8] transition-colors"
              >
                ติดต่อ
              </Link>
            </li>
            <li>
              <Link
                to="/guide"
                className="hover:text-[#8362B8] transition-colors"
              >
                คู่มือ
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex items-center gap-2">
          <Link
            to="/login"
            className="h-9 px-4 text-sm bg-[#FFB399]/20 text-[#e08d70] hover:bg-[#FFB399] hover:text-white rounded-full font-bold transition-all active:scale-90 flex items-center"
          >
            เข้าสู่ระบบ
          </Link>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="/register"
              className="h-9 px-4 text-sm bg-[#8362B8] text-white rounded-full font-bold shadow-md hover:bg-[#6d4da3] transition-all flex items-center"
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
