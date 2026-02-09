import React from "react";
import { motion } from "framer-motion";

const Home = () => {
  const moods = [
    { id: "happy", emoji: "😊", bgColor: "bg-[#FFCC4D]" },
    { id: "angry", emoji: "😡", bgColor: "bg-[#BE1931]" },
    { id: "tired", emoji: "😑", bgColor: "bg-[#AAB8C2]" },
    { id: "stressed", emoji: "😰", bgColor: "bg-[#744EAA]" },
    { id: "sad", emoji: "😢", bgColor: "bg-[#55ACEE]" },
  ];

  return (
    // Animation ตอนเข้าหน้าเว็บ: ค่อยๆ จางมาและขยับขึ้น 20px
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center pt-10 md:pt-20 px-4"
    >
      <h2 className="text-2xl md:text-3xl font-bold text-[#2D3142] mb-12">
        เลือกอารมณ์ของคุณ
      </h2>

      <div className="flex flex-wrap justify-center gap-6 md:gap-10 mb-12">
        {moods.map((mood, index) => (
          <motion.button
            key={mood.id}
            // Hover Animation: ขยายขึ้นและดึ๋งๆ
            whileHover={{ scale: 1.15, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            // ให้แต่ละปุ่มค่อยๆ โผล่มาไม่พร้อมกัน (Stagger)
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1, type: "spring", stiffness: 300 }}
            className={`${mood.bgColor} w-16 h-16 md:w-20 md:h-20 rounded-[1.5rem] shadow-lg 
                       flex items-center justify-center text-4xl md:text-5xl`}
          >
            {mood.emoji}
          </motion.button>
        ))}
      </div>

      <div className="text-xl font-bold text-[#2D3142] mb-12">หรือ</div>

      <div className="relative w-full max-w-2xl group">
        <input
          type="text"
          placeholder="ค้นหาอารมณ์ของคุณ...."
          className="w-full h-14 md:h-16 pl-8 pr-14 rounded-full shadow-md focus:outline-none 
                     text-gray-600 placeholder-gray-400 text-lg border border-gray-100"
        />
        <div className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-500">
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
        </div>
      </div>
    </motion.div>
  );
};

export default Home;
