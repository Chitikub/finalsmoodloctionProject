import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [isRedirecting, setIsRedirecting] = useState(false);

  // ฟังก์ชันจัดการตอนกด "สมัครสมาชิก" ใน Toggle บน
  const handleSwitchToRegister = () => {
    setIsRedirecting(true);
    // รอให้ออนิเมชั่นสไลด์ไปทางซ้ายเสร็จก่อนค่อยเปลี่ยนหน้า (300ms)
    setTimeout(() => {
      navigate("/register");
    }, 300);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="flex justify-center items-center py-10 px-4"
    >
      <div className="bg-white w-full max-w-lg rounded-[2.5rem] shadow-xl p-10 flex flex-col items-center">
        {/* --- 1. Toggle Switch Header (สไลด์กลับไป Register) --- */}
        <div className="relative bg-gray-100 p-1 rounded-full flex w-64 mb-8">
          {/* พื้นหลังสีส้มสไลด์ (ใช้สี #FFB399 ตามธีม Login) */}
          <motion.div
            className="absolute top-1 bottom-1 left-1 bg-[#FFB399] rounded-full shadow-md"
            initial={false}
            animate={{
              x: isRedirecting ? "0%" : "100%", // อยู่ขวา (Login) สไลด์ไปซ้าย (Register)
              width: "calc(50% - 4px)",
            }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
          />

          <button
            type="button"
            className={`relative z-10 flex-1 py-2 text-sm font-bold transition-colors duration-300 ${isRedirecting ? "text-white" : "text-gray-500"}`}
            onClick={handleSwitchToRegister}
          >
            สมัครสมาชิก
          </button>
          <button
            type="button"
            className={`relative z-10 flex-1 py-2 text-sm font-bold transition-colors duration-300 ${!isRedirecting ? "text-white" : "text-gray-500"}`}
            onClick={() => setIsRedirecting(false)}
          >
            เข้าสู่ระบบ
          </button>
        </div>

        {/* --- Social Login --- */}
        <div className="flex gap-4 mb-6">
          <button
            type="button"
            className="p-3 border rounded-full hover:bg-gray-50 transition-all"
          >
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              className="w-6 h-6"
              alt="google"
            />
          </button>
          <button
            type="button"
            className="p-3 border rounded-full hover:bg-gray-50 transition-all"
          >
            <img
              src="https://www.svgrepo.com/show/475647/facebook-color.svg"
              className="w-6 h-6"
              alt="fb"
            />
          </button>
          <button
            type="button"
            className="p-3 border rounded-full hover:bg-gray-50 transition-all"
          >
            <img
              src="https://www.svgrepo.com/show/475635/apple-color.svg"
              className="w-6 h-6"
              alt="apple"
            />
          </button>
        </div>

        <div className="divider text-gray-400 text-xs mb-6 uppercase tracking-widest">
          หรือ
        </div>

        {/* --- Login Form --- */}
        <form className="w-full space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label className="label-text text-gray-700 font-bold ml-2">
              Email
            </label>
            <input
              type="email"
              className="input input-bordered w-full rounded-2xl bg-gray-50 mt-1 focus:outline-[#FFB399]"
              placeholder="example@mail.com"
            />
          </div>

          <div>
            <label className="label-text text-gray-700 font-bold ml-2">
              Password
            </label>
            <input
              type="password"
              className="input input-bordered w-full rounded-2xl bg-gray-50 mt-1 focus:outline-[#FFB399]"
              placeholder="••••••••"
            />
          </div>

          <div className="flex justify-end pr-2">
            <p className="text-sm text-gray-500">
              ไม่มีบัญชี?{" "}
              <span
                className="text-red-400 cursor-pointer hover:underline font-bold"
                onClick={handleSwitchToRegister}
              >
                สมัครสมาชิกที่นี่
              </span>
            </p>
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="btn w-full bg-[#FFB399] hover:bg-[#ff9d7d] text-white border-none rounded-2xl text-lg h-14 mt-6 shadow-lg transition-all"
          >
            เข้าสู่ระบบ
          </motion.button>
        </form>
      </div>
    </motion.div>
  );
};

export default Login;
