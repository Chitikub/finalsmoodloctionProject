import React from "react";
import { motion } from "framer-motion";
import Swal from "sweetalert2";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    Swal.fire({
      title: "ส่งข้อความสำเร็จ!",
      text: "เราได้รับข้อความของคุณแล้ว และจะติดต่อกลับโดยเร็วที่สุด",
      icon: "success",
      confirmButtonColor: "#8362B8",
      confirmButtonText: "รับทราบ",
      customClass: {
        popup: "rounded-[2rem]",
      },
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-6xl mx-auto px-4 py-12"
    >
      {/* Container หลักที่เป็นการ์ดสีขาวมนๆ */}
      <div className="bg-white/90 backdrop-blur-sm rounded-[3rem] shadow-xl overflow-hidden flex flex-col lg:flex-row border border-white">
        {/* --- ฝั่งซ้าย: Contact Form --- */}
        <div className="flex-1 p-8 md:p-12">
          <header className="mb-10">
            <h2 className="text-3xl font-black text-[#2D3142]">Sends Email</h2>
            <p className="text-gray-500 font-medium">ส่งข้อความหาผู้พัฒนา</p>
          </header>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <label className="label-text font-bold text-gray-700 ml-2">
                  ชื่อ
                </label>
                <input
                  type="text"
                  className="input input-bordered w-full rounded-2xl bg-gray-50/50 mt-1 focus:outline-[#8362B8]"
                  required
                />
              </div>
              <div className="flex-1">
                <label className="label-text font-bold text-gray-700 ml-2">
                  นามสกุล
                </label>
                <input
                  type="text"
                  className="input input-bordered w-full rounded-2xl bg-gray-50/50 mt-1 focus:outline-[#8362B8]"
                  required
                />
              </div>
            </div>

            <div>
              <label className="label-text font-bold text-gray-700 ml-2">
                อีเมล
              </label>
              <input
                type="email"
                className="input input-bordered w-full rounded-2xl bg-gray-50/50 mt-1 focus:outline-[#8362B8]"
                required
              />
            </div>

            <div>
              <label className="label-text font-bold text-gray-700 ml-2">
                ข้อความ
              </label>
              <textarea
                className="textarea textarea-bordered w-full rounded-3xl bg-gray-50/50 mt-1 h-40 focus:outline-[#8362B8]"
                required
              ></textarea>
            </div>

            <div className="flex items-center gap-3 px-2">
              <input
                type="checkbox"
                className="checkbox checkbox-primary rounded-lg"
                required
              />
              <span className="text-sm text-gray-500">
                ยอมรับข้อตกลง{" "}
                <span className="font-bold underline cursor-pointer">
                  ความเป็นส่วนตัว
                </span>
              </span>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="btn w-40 bg-gray-100 hover:bg-gray-200 border-none text-gray-700 rounded-2xl shadow-md mt-4"
            >
              ส่ง
            </motion.button>
          </form>
        </div>

        {/* --- ฝั่งขวา: Image & Info Card --- */}
        <div className="flex-1 bg-gray-50/50 p-8 md:p-12 flex flex-col gap-6 items-center justify-center">
          {/* รูปภาพแนวธรรมชาติ (ตามตัวอย่างในรูปที่ 3) */}
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            className="w-full max-w-sm rounded-[2rem] overflow-hidden shadow-2xl border-8 border-white"
          >
            <img
              src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=1000"
              alt="Natural landscape"
              className="w-full h-72 object-cover"
            />
          </motion.div>

          {/* Contact Details Card */}
          <div className="w-full max-w-sm space-y-4">
            <div className="bg-white p-4 rounded-2xl shadow-sm flex items-center gap-4 border border-gray-100">
              <div className="bg-gray-100 p-3 rounded-xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-gray-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div>
                <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">
                  Email
                </p>
                <p className="text-gray-700 font-medium">
                  Moodlocationfinder@hotmail.com
                </p>
              </div>
            </div>

            <div className="bg-white p-4 rounded-2xl shadow-sm flex items-center gap-4 border border-gray-100">
              <div className="bg-gray-100 p-3 rounded-xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-gray-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <div>
                <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">
                  Phone
                </p>
                <p className="text-gray-700 font-medium">(+66) 0xx-xxx-xxxx</p>
              </div>
            </div>

            <div className="flex items-center justify-center gap-4 pt-4">
              <div className="h-[1px] flex-1 bg-gray-200"></div>
              <span className="text-gray-400 font-bold text-sm">หรือ</span>
              <div className="h-[1px] flex-1 bg-gray-200"></div>
            </div>

            <button className="w-full flex items-center justify-center gap-3 py-3 bg-white hover:bg-gray-50 rounded-2xl border border-gray-100 shadow-sm transition-all active:scale-95">
              <img
                src="https://www.svgrepo.com/show/475647/facebook-color.svg"
                className="h-6 w-6"
                alt="fb"
              />
              <span className="font-bold text-gray-700">
                ติดต่อผ่าน Facebook
              </span>
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
