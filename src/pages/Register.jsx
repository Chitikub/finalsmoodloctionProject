import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [isRedirecting, setIsRedirecting] = useState(false);

  // สร้าง State สำหรับเลือกเพศ (default เป็นชาย)
  const [gender, setGender] = useState("male");

  // ฟังก์ชันจัดการตอนกด "เข้าสู่ระบบ" ใน Toggle บน
  const handleSwitchToLogin = () => {
    setIsRedirecting(true);
    // รอให้ออนิเมชั่นสไลด์ทำงานเสร็จก่อนค่อยเปลี่ยนหน้า (300ms)
    setTimeout(() => {
      navigate("/login");
    }, 300);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="flex justify-center items-center py-10 px-4"
    >
      <div className="bg-white w-full max-w-lg rounded-[2.5rem] shadow-xl p-10 flex flex-col items-center">
        {/* --- 1. Toggle Switch Header (สลับไป Login) --- */}
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
              src="https://www.svgrepo.com/show/475635/apple-color.svg"
              className="w-6 h-6"
              alt="apple"
            />
          </button>
        </div>

        <div className="divider text-gray-400 text-xs mb-6 uppercase tracking-widest">
          หรือ
        </div>

        {/* --- Registration Form --- */}
        <form className="w-full space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div className="flex gap-4">
            <div className="flex-1">
              <label className="label-text text-gray-700 font-bold ml-2">
                ชื่อ
              </label>
              <input
                type="text"
                className="input input-bordered w-full rounded-2xl bg-gray-50 mt-1 focus:outline-[#8362B8]"
              />
            </div>
            <div className="flex-1">
              <label className="label-text text-gray-700 font-bold ml-2">
                นามสกุล
              </label>
              <input
                type="text"
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
              className="input input-bordered w-full rounded-2xl bg-gray-50 mt-1 focus:outline-[#8362B8]"
            />
          </div>

          <div>
            <label className="label-text text-gray-700 font-bold ml-2">
              Password
            </label>
            <input
              type="password"
              className="input input-bordered w-full rounded-2xl bg-gray-50 mt-1 focus:outline-[#8362B8]"
            />
          </div>

          {/* --- 2. Gender Select with Slider Animation --- */}
          <div className="flex flex-col mt-6">
            <label className="label-text text-gray-700 font-bold ml-2 mb-2">
              เพศ
            </label>
            <div className="relative flex bg-gray-100 rounded-full p-1 w-full h-12 items-center">
              {/* ตัวสไลด์สีพื้นหลังที่จะเลื่อนตามเพศที่เลือก */}
              <motion.div
                className={`absolute top-1 bottom-1 rounded-full shadow-sm ${
                  gender === "male" ? "bg-blue-100" : "bg-pink-100"
                }`}
                initial={false}
                animate={{
                  x: gender === "male" ? "0%" : "100%",
                  width: "calc(50% - 4px)",
                }}
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />

              <button
                type="button"
                onClick={() => setGender("male")}
                className={`relative z-10 flex-1 text-sm font-bold transition-colors duration-300 ${
                  gender === "male" ? "text-blue-600" : "text-gray-400"
                }`}
              >
                ชาย
              </button>

              <button
                type="button"
                onClick={() => setGender("female")}
                className={`relative z-10 flex-1 text-sm font-bold transition-colors duration-300 ${
                  gender === "female" ? "text-pink-600" : "text-gray-400"
                }`}
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

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`btn w-full border-none rounded-2xl text-lg h-14 mt-4 shadow-lg text-white transition-colors duration-500 ${
              gender === "male" ? "bg-[#8362B8]" : "bg-pink-500"
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
