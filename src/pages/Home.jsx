import React from "react";
import { motion } from "framer-motion";

const Home = () => {
  const moods = [
    { id: "happy", emoji: "😊", bgColor: "bg-[#FFCC4D]", label: "มีความสุข" },
    { id: "angry", emoji: "😡", bgColor: "bg-[#BE1931]", label: "หัวร้อน" },
    { id: "tired", emoji: "😑", bgColor: "bg-[#AAB8C2]", label: "เหนื่อยล้า" },
    { id: "stressed", emoji: "😰", bgColor: "bg-[#744EAA]", label: "เครียด" },
    { id: "sad", emoji: "😢", bgColor: "bg-[#55ACEE]", label: "เศร้า" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      // แก้ไขตรงนี้: เพิ่ม pt-32 (Padding Top) และเปลี่ยน min-h ให้พอดีกับหน้าจอที่หัก Navbar ออกแล้ว
      className="flex flex-col items-center justify-start min-h-screen pt-32 md:pt-40 px-4 pb-20"
    >
      {/* ส่วนหัวข้อ */}
      <div className="text-center mb-12 md:mb-16">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-3xl md:text-5xl font-black text-[#2D3142] mb-4 tracking-tight"
        >
          วันนี้คุณรู้สึกอย่างไร?
        </motion.h2>
        <p className="text-gray-500 font-medium text-lg">
          บอกความรู้สึกของคุณ เพื่อหาสถานที่ที่เหมาะสมที่สุด
        </p>
      </div>

      {/* Mood Buttons */}
      <div className="flex flex-wrap justify-center gap-6 md:gap-10 mb-16">
        {moods.map((mood, index) => (
          <div key={mood.id} className="flex flex-col items-center gap-3 group">
            <motion.button
              whileHover={{
                scale: 1.1,
                y: -10,
                rotate: [0, -5, 5, 0],
                transition: { duration: 0.3 },
              }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className={`${mood.bgColor} w-20 h-20 md:w-24 md:h-24 rounded-[2.2rem] 
                         shadow-[0_20px_40px_rgba(0,0,0,0.1)] flex items-center justify-center 
                         text-5xl border-4 border-white relative`}
            >
              {mood.emoji}
              <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 rounded-[2rem] transition-opacity duration-300 pointer-events-none"></div>
            </motion.button>
            <span className="text-sm font-bold text-[#2D3142] transition-all duration-300">
              {mood.label}
            </span>
          </div>
        ))}
      </div>

      {/* ตัวคั่น "หรือ" */}
      <div className="flex items-center w-full max-w-md gap-6 mb-16">
        <div className="h-[2px] flex-1 bg-gray-200/80 rounded-full"></div>
        <div className="text-lg font-black text-gray-400">หรือ</div>
        <div className="h-[2px] flex-1 bg-gray-200/80 rounded-full"></div>
      </div>

      {/* Search Bar */}
      <div className="relative w-full max-w-2xl group">
        <input
          type="text"
          placeholder="พิมพ์ความรู้สึกของคุณที่นี่..."
          className="w-full h-16 md:h-20 pl-10 pr-20 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.04)] 
                     bg-white/80 backdrop-blur-xl border border-white focus:outline-none focus:ring-4 
                     focus:ring-[#8362B8]/10 text-gray-700 placeholder-gray-400 text-xl transition-all"
        />
        <button
          className="absolute right-4 top-1/2 -translate-y-1/2 p-4 bg-[#8362B8] hover:bg-[#6d4da3] 
                         rounded-2xl text-white shadow-lg shadow-[#8362B8]/30 transition-all active:scale-95"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={3}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </button>
      </div>
    </motion.div>
  );
};

export default Home;
