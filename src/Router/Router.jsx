import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../components/layout";
import Home from "../pages/Home";
import Register from "../pages/Register";
import Login from "../pages/Login";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          {/* เปลี่ยนเป็น Component Login เมื่อสร้างเสร็จ */}
          <Route path="contact" element={<div>หน้าติดต่อ</div>} />
          <Route path="guide" element={<div>หน้าคู่มือ</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
