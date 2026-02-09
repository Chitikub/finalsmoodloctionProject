import React from "react";
import { motion } from "framer-motion";

const Guide = () => {
  const steps = [
    {
      number: "01",
      title: "เลือกอารมณ์ของคุณ",
      description:
        "เริ่มต้นด้วยการเลือกอิโมจิที่ตรงกับความรู้สึกปัจจุบันของคุณ หรือพิมพ์ความรู้สึกในช่องค้นหา",
      icon: "😊",
      color: "bg-[#FFCC4D]",
    },
    {
      number: "02",
      title: "ระบบประมวลผล",
      description:
        "AI ของเราจะวิเคราะห์อารมณ์และคัดกรองสถานที่ที่ช่วยเติมเต็มหรือปรับอารมณ์ของคุณให้ดีขึ้น",
      icon: "🧠",
      color: "bg-[#8362B8]",
    },
    {
      number: "03",
      title: "เลือกสถานที่ที่โดนใจ",
      description:
        "ดูรายละเอียดสถานที่ ระยะทาง และรีวิว เพื่อตัดสินใจเลือกจุดหมายปลายทางที่ดีที่สุด",
      icon: "📍",
      color: "bg-[#FFB399]",
    },
    {
      number: "04",
      title: "ออกเดินทางได้เลย!",
      description:
        "กดปุ่มนำทางเพื่อเดินทางไปยังสถานที่นั้น และอย่าลืมกลับมาแชร์ประสบการณ์กับเรา",
      icon: "🚗",
      color: "bg-[#55ACEE]",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <div className="max-w-6xl mx-auto px-6 pt-32 pb-12">
      {/* Header */}
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-4xl font-black text-[#2D3142] mb-4"
        >
          คู่มือการใช้งาน
        </motion.h2>
        <p className="text-gray-500 text-lg">
          4 ขั้นตอนง่ายๆ ในการค้นหาสถานที่ที่ใช่สำหรับคุณ
        </p>
      </div>

      {/* Step Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        {steps.map((step, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ y: -5 }}
            className="bg-white p-8 rounded-[2.5rem] shadow-lg border border-gray-50 flex gap-6 relative overflow-hidden"
          >
            {/* Background Number Label */}
            <span className="absolute -right-4 -bottom-4 text-9xl font-black text-gray-50 opacity-50 select-none">
              {step.number}
            </span>

            <div
              className={`${step.color} w-20 h-20 rounded-2xl shrink-0 flex items-center justify-center text-4xl shadow-inner border-2 border-white/50`}
            >
              {step.icon}
            </div>

            <div className="relative z-10">
              <h3 className="text-xl font-black text-[#2D3142] mb-2">
                {step.title}
              </h3>
              <p className="text-gray-500 leading-relaxed font-medium">
                {step.description}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Tip Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="mt-16 bg-[#8362B8]/10 p-8 rounded-[2.5rem] border border-[#8362B8]/20 flex flex-col md:flex-row items-center gap-6"
      >
        <div className="text-4xl">💡</div>
        <div>
          <h4 className="text-lg font-bold text-[#8362B8] mb-1">
            เคล็ดลับเพิ่มเติม
          </h4>
          <p className="text-gray-600">
            คุณสามารถ "สมัครสมาชิก" เพื่อบันทึกสถานที่โปรดไว้ในลิสต์ส่วนตัว
            และรับคำแนะนำที่แม่นยำขึ้นตามสไตล์ของคุณเองได้นะ!
          </p>
        </div>
      </motion.div>

      {/* Back Button */}
      <div className="mt-12 text-center">
        <motion.button
          onClick={() => window.history.back()}
          whileHover={{ x: -5 }}
          className="text-gray-400 font-bold flex items-center justify-center gap-2 mx-auto hover:text-[#8362B8] transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
              clipRule="evenodd"
            />
          </svg>
          ย้อนกลับ
        </motion.button>
      </div>
    </div>
  );
};

export default Guide;
