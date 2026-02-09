import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Register = () => {
  const navigate = useNavigate();
  const [isRedirecting, setIsRedirecting] = useState(false);
  const [gender, setGender] = useState("male");

  // ฟังก์ชันจัดการตอนกด "เข้าสู่ระบบ" ใน Toggle บน
  const handleSwitchToLogin = () => {
    setIsRedirecting(true);
    setTimeout(() => {
      navigate("/login");
    }, 300);
  };

  // --- ฟังก์ชันสำหรับแสดง Alert เมื่อสมัครสมาชิกสำเร็จ ---
  const handleRegister = (e) => {
    e.preventDefault();

    Swal.fire({
      title: "สมัครสมาชิกสำเร็จ!",
      text: "ยินดีต้อนรับเข้าสู่ Mood Location Finder นะคะ 😊",
      icon: "success",
      background: "#fff",
      confirmButtonColor: gender === "male" ? "#8362B8" : "#ec4899", // เปลี่ยนสีปุ่มตามเพศที่เลือก
      confirmButtonText: "เริ่มต้นใช้งาน",
      customClass: {
        popup: "rounded-[2.5rem] font-anuphan", // ใส่ class เพื่อคุมความโค้ง
        title: "text-2xl font-bold text-[#2D3142]",
        confirmButton: "rounded-2xl px-8 py-3 text-lg",
      },
      showClass: {
        popup: "animate__animated animate__zoomIn animate__faster",
      },
      hideClass: {
        popup: "animate__animated animate__zoomOut animate__faster",
      },
    }).then((result) => {
      if (result.isConfirmed) {
        navigate("/"); // เมื่อกดตกลง ให้เด้งไปหน้า Home
      }
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="flex justify-center items-center py-10 px-4"
    >
      <div className="bg-white w-full max-w-lg rounded-[2.5rem] shadow-xl p-10 flex flex-col items-center border border-gray-50">
        {/* --- 1. Toggle Switch Header --- */}
        <div className="relative bg-gray-100 p-1 rounded-full flex w-64 mb-8">
          <motion.div
            className="absolute top-1 bottom-1 left-1 bg-[#8362B8] rounded-full shadow-md"
            initial={false}
            animate={{
              x: isRedirecting ? "100%" : "0%",
              width: "calc(50% - 4px)",
            }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
          />
          <button
            type="button"
            className={`relative z-10 flex-1 py-2 text-sm font-bold transition-colors duration-300 ${!isRedirecting ? "text-white" : "text-gray-500"}`}
            onClick={() => setIsRedirecting(false)}
          >
            สมัครสมาชิก
          </button>
          <button
            type="button"
            className={`relative z-10 flex-1 py-2 text-sm font-bold transition-colors duration-300 ${isRedirecting ? "text-white" : "text-gray-500"}`}
            onClick={handleSwitchToLogin}
          >
            เข้าสู่ระบบ
          </button>
        </div>

        {/* --- Social Login --- */}
        <div className="flex gap-4 mb-6">
          {["facebook", "google", "apple"].map((social) => (
            <button
              key={social}
              type="button"
              className="p-3 border rounded-full hover:bg-gray-50 transition-all active:scale-90"
            >
              <img
                src={`https://www.svgrepo.com/show/4756${social === "facebook" ? "47" : social === "google" ? "56" : "35"}/${social}-color.svg`}
                className="w-6 h-6"
                alt={social}
              />
            </button>
          ))}
        </div>

        <div className="divider text-gray-400 text-xs mb-6 uppercase tracking-widest">
          หรือ
        </div>

        {/* --- Registration Form --- */}
        <form className="w-full space-y-4" onSubmit={handleRegister}>
          <div className="flex gap-4">
            <div className="flex-1">
              <label className="label-text text-gray-700 font-bold ml-2">
                ชื่อ
              </label>
              <input
                type="text"
                required
                className="input input-bordered w-full rounded-2xl bg-gray-50 mt-1 focus:outline-[#8362B8]"
              />
            </div>
            <div className="flex-1">
              <label className="label-text text-gray-700 font-bold ml-2">
                นามสกุล
              </label>
              <input
                type="text"
                required
                className="input input-bordered w-full rounded-2xl bg-gray-50 mt-1 focus:outline-[#8362B8]"
              />
            </div>
          </div>

          <div>
            <label className="label-text text-gray-700 font-bold ml-2">
              Email
            </label>
            <input
              type="email"
              required
              className="input input-bordered w-full rounded-2xl bg-gray-50 mt-1 focus:outline-[#8362B8]"
            />
          </div>

          <div>
            <label className="label-text text-gray-700 font-bold ml-2">
              Password
            </label>
            <input
              type="password"
              required
              className="input input-bordered w-full rounded-2xl bg-gray-50 mt-1 focus:outline-[#8362B8]"
            />
          </div>

          {/* --- 2. Gender Select --- */}
          <div className="flex flex-col mt-6">
            <label className="label-text text-gray-700 font-bold ml-2 mb-2">
              เพศ
            </label>
            <div className="relative flex bg-gray-100 rounded-full p-1 w-full h-12 items-center">
              <motion.div
                className={`absolute top-1 bottom-1 rounded-full shadow-sm ${gender === "male" ? "bg-blue-100" : "bg-pink-100"}`}
                animate={{
                  x: gender === "male" ? "0%" : "100%",
                  width: "calc(50% - 4px)",
                }}
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
              <button
                type="button"
                onClick={() => setGender("male")}
                className={`relative z-10 flex-1 text-sm font-bold transition-colors duration-300 ${gender === "male" ? "text-blue-600" : "text-gray-400"}`}
              >
                ชาย
              </button>
              <button
                type="button"
                onClick={() => setGender("female")}
                className={`relative z-10 flex-1 text-sm font-bold transition-colors duration-300 ${gender === "female" ? "text-pink-600" : "text-gray-400"}`}
              >
                หญิง
              </button>
            </div>
          </div>

          <p className="text-center text-sm text-gray-500 mt-6">
            มีบัญชีอยู่แล้ว?{" "}
            <span
              className="text-red-400 cursor-pointer hover:underline font-bold"
              onClick={handleSwitchToLogin}
            >
              เข้าสู่ระบบ
            </span>
          </p>

          {/* ปุ่ม Submit ที่เชื่อมฟังก์ชัน handleRegister */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className={`btn w-full border-none rounded-2xl text-lg h-14 mt-4 shadow-lg text-white transition-all duration-500 ${
              gender === "male"
                ? "bg-[#8362B8] hover:bg-[#6d4da3]"
                : "bg-pink-500 hover:bg-pink-600"
            }`}
          >
            สมัครสมาชิก
          </motion.button>
        </form>
      </div>
    </motion.div>
  );
};

export default Register;
