import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import { motion, AnimatePresence } from "framer-motion";

const Layout = () => {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-[#D1C4E9]">
      <header className="p-6">
        <Navbar />
      </header>

      <main>
        {/* AnimatePresence ช่วยให้มี Animation ตอนเปลี่ยนหน้า */}
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname} // สำคัญ: ต้องใส่เพื่อให้ Framer Motion รู้ว่ามีการเปลี่ยนหน้า
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 10 }}
            transition={{ duration: 0.3 }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
};

export default Layout;
