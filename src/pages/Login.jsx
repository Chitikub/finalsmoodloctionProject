import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Login = () => {
  const navigate = useNavigate();
  const [isRedirecting, setIsRedirecting] = useState(false);

  // ฟังก์ชันจัดการตอนกด "สมัครสมาชิก" ใน Toggle บน
  const handleSwitchToRegister = () => {
    setIsRedirecting(true);
    setTimeout(() => {
      navigate("/register");
    }, 300);
  };

  // --- ฟังก์ชันสำหรับแสดง Alert เมื่อเข้าสู่ระบบสำเร็จ ---
  const handleLogin = (e) => {
    e.preventDefault();

    Swal.fire({
      title: "กำลังเข้าสู่ระบบ...",
      html: "ยินดีต้อนรับกลับมานะคะ 😊",
      timer: 2000,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading();
      },
      background: "#fff",
      customClass: {
        popup: "rounded-[2.5rem] font-anuphan",
        title: "text-2xl font-bold text-[#2D3142]",
      },
    }).then(() => {
      // หลังจาก 2 วินาที (Timer จบ) ให้เปลี่ยนหน้า
      navigate("/");
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="flex justify-center items-center py-10 px-4"
    >
      <div className="bg-white w-full max-w-lg rounded-[2.5rem] shadow-xl p-10 flex flex-col items-center border border-gray-50">
        {/* --- 1. Toggle Switch Header (สไลด์กลับไป Register) --- */}
        <div className="relative bg-gray-100 p-1 rounded-full flex w-64 mb-8">
          <motion.div
            className="absolute top-1 bottom-1 left-1 bg-[#FFB399] rounded-full shadow-md"
            initial={false}
            animate={{
              x: isRedirecting ? "0%" : "100%",
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
          {["google", "facebook", "apple"].map((social) => (
            <button
              key={social}
              type="button"
              className="p-3 border rounded-full hover:bg-gray-50 transition-all active:scale-90"
            >
              <img
                src={`https://www.svgrepo.com/show/4756${social === "google" ? "56" : social === "facebook" ? "47" : "35"}/${social}-color.svg`}
                className="w-6 h-6"
                alt={social}
              />
            </button>
          ))}
        </div>

        <div className="divider text-gray-400 text-xs mb-6 uppercase tracking-widest">
          หรือ
        </div>

        {/* --- Login Form --- */}
        <form className="w-full space-y-4" onSubmit={handleLogin}>
          <div>
            <label className="label-text text-gray-700 font-bold ml-2">
              Email
            </label>
            <input
              type="email"
              required
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
              required
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
            type="submit"
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
